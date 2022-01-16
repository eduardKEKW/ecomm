import { QueryHookOptions } from '@apollo/react-hooks';
import { useApollo } from 'apollo-client';
import { CommentInterface } from 'apollo/fragments/Comment.fragment';
import { ACTIVITY_QUERY } from 'apollo/querys/Activity.query';
import { CommentQueryInteraface, commentsFiltersOptions, commentsPerPageOptions, commentsSortingOptions, CommnetQueryVarsInterface } from 'apollo/querys/Comments.query';
import Resource from 'components/helpers/Resource';
import Pagination, { ListInterface } from 'components/helpers/Resource';
import { SEmpty } from 'components/styled/Resource';
import { SComments } from 'components/styled/Product/Comments';
import Title from 'components/Title';
import { changeSelectedValue } from 'helpers/helpers';
import useComments from 'hooks/useComments'
import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import Create from './Create';
import Reviews from './Reviews';

interface Props {
    productId: number
    gridArea?: string
}

type settings = QueryHookOptions<CommentQueryInteraface, CommnetQueryVarsInterface>;

function Comments({ productId, gridArea }: Props) {
    const [filters, setFilters]     = useState<ListInterface[]>(commentsFiltersOptions);
    const [perPages, setPerPages]   = useState<ListInterface[]>(commentsPerPageOptions);
    const [sortings, setSortings]   = useState<ListInterface[]>(commentsSortingOptions);
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [comments, setComments]   = useState<CommentInterface[]>([]);
    const [options, setOptions]     = useState<settings>({
        variables: {
            productId,
            size: 3,
            from: 1,
        }
    });

    const [mutateComment, { loading, comments: data, pageInfo, fetchMore, like, metaData, called }] = useComments({
        options: options
    });

    useEffect(() => {
        if(! loading) setComments(data);
    }, [data, loading])

    useEffect(() => {
        fetchMore(options);
    }, [options])

    return (
        <SComments gridArea={gridArea}>
            <div>
                <Title name='Reviews' description={`${metaData?.reviewCount || null} reviews`} style={{ margin: "1rem 0rem" }} />

                <Create productId={productId} border="top" />    

                <Reviews {...metaData} />

                <Resource
                    empty={! comments.length}
                    selectedPage={selectedPage}
                    anchor='reviews'
                    loading={loading}
                    pagination={pageInfo}
                    filters={filters} 
                    sorting={sortings} 
                    perPage={perPages}
                    onFiltersChange={(stars) => {  
                        changeSelectedValue(filters, stars, (newFilters) => setFilters(newFilters))
                        setSelectedPage(1)

                        setOptions((opt) => ({
                            variables: {
                                ...opt.variables,
                                from: 1,
                                filters: {
                                    ...opt.variables.filters,
                                    stars: +stars
                                }
                            }
                        }))
                    }}
                    onSortingChange={(sort) => {   
                        changeSelectedValue(sortings, sort, (newFilters) => setSortings(newFilters))
                        setSelectedPage(1)
                        
                        setOptions((opt) => ({
                            variables: {
                                ...opt.variables,
                                from: 1,
                                sorting: {
                                    [sort]: true
                                }
                            }
                        }))
                    }}
                    onPerPageChange={(perPage) => {   
                        changeSelectedValue(perPages, perPage, (newFilters) => setPerPages(newFilters))
                        setSelectedPage(1)
                        
                        setOptions((opt) => ({
                            variables: {
                                ...opt.variables,
                                from: 1,
                                size: +perPage
                            }
                        }))
                    }}
                    onPageChange={(page) => {
                        setSelectedPage(page)

                        setOptions((opt) => ({
                            variables: {
                                ...opt.variables,
                                from: +page
                            }
                        }))
                    }}
                >
                    <>
                        {
                            comments.map((comment, index) => (
                                <Comment 
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