import Resource from 'components/helpers/Resource';
import { SComments } from 'components/styled/Product/Comments';
import Title from 'components/Title';
import { ReviewsOrder } from 'Graphql/generated/graphql';
import useComments, { commentsFiltersOptions, commentsPerPageOptions, commentsSortingOptions, OptionsType, ReviewsType } from 'hooks/useComments'
import { useInitialRender } from 'hooks/useInitialRender.hook';
import useUser from 'hooks/useUser';
import produce from 'immer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import Create from './Create';
import Reviews from './Reviews';

interface Props {
    productId: number
    gridArea?: string
}

function Comments({ productId, gridArea }: Props) {
    const [selectedPage, setSelectedPage]   = useState<number>(1);
    const { isGuest }                       = useUser();
    const router                            = useRouter();
    const initilaRedner                     = useInitialRender();
    const [options, setOptions]             = useState<OptionsType>({
        variables: {
            productId,
            order: ReviewsOrder.Popular,
            first: 3,
            page: 1
        }
    });

    const [getReviews, { loading, comments = [], reviewsInfo, pageInfo, like, called }] = useComments({ options });

    useEffect(() => {
        if(! initilaRedner && router.isReady) {
            getReviews(options);   
        }
    }, [options])

    useEffect(() => {
        if(router.isReady) {
            const query = router.query;
            console.log(query);
            setOptions({
                variables: {
                    productId,
                    order: query.resourceSortings as ReviewsOrder ?? ReviewsOrder.Popular,
                    first: query?.resourcePerPage ? +query?.resourcePerPage : options.variables.first,
                    page: query?.page ? +query?.page : options.variables.page,
                }
            });
        }
    }, [router.isReady])

    return (
        <SComments gridArea={gridArea}>
            <div>
                <Title name='Reviews' style={{ margin: "1rem 0rem" }} />

                <Create productId={productId} border="top" />    

                <Reviews 
                    avgRating={reviewsInfo?.reviewsInfo?.averageRating} 
                    reviewCount={pageInfo?.total} 
                    ratingsCount={reviewsInfo?.reviewsInfo?.starsMap}  
                />

                <Resource
                    columns={1}
                    rows={0}
                    empty={! comments?.length}
                    selectedPage={selectedPage}
                    anchor='reviews'
                    loading={loading}
                    pagination={pageInfo}
                    filters={commentsFiltersOptions} 
                    sorting={commentsSortingOptions}
                    perPage={commentsPerPageOptions}
                    onFiltersChange={(stars) => {  
                        setOptions(opt => {
                                return produce(opt, draft => {
                                    draft.variables.page = 1;
                                    draft.variables.rating = +stars;
                                })
                            }
                        )
                    }}
                    onSortingChange={(sort) => {   
                        setOptions(opt => {
                                return produce(opt, draft => {
                                    draft.variables.order = sort as ReviewsOrder;
                                    draft.variables.page = 1;
                                })
                            }
                        )
                    }}
                    onPerPageChange={(perPage) => {   
                        setOptions(opt => {
                                return produce(opt, draft => {
                                    draft.variables.first = +perPage;
                                    draft.variables.page = 1;
                                })
                            }
                        )
                    }}
                    onPageChange={(page) => {
                        setSelectedPage(page)

                        setOptions(opt => {
                                return produce(opt, draft => {
                                    draft.variables.page = +page;
                                })
                            }
                         )
                    }}
                >
                    <>
                        {
                            comments.map((comment, index) => (
                                <Comment 
                                    isGuest={isGuest}
                                    comment={comment} 
                                    like={like} 
                                    key={comment.id} 
                                    index={index}
                                />
                            ))
                        }
                    </>
                </Resource>

                <Create productId={productId} />
            </div>
        </SComments>
    )
}

export default Comments