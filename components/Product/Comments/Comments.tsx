import { SComments } from 'components/styled/Product/Comments';
import Title from 'components/Title';
import useComments from 'hooks/useComments'
import React, { } from 'react'
import Comment from './Comment';
import Create from './Create';
import Reviews from './Reviews';

interface Props {
    productId: number
    gridArea?: string
}

function Comments({ productId, gridArea }: Props) {
    const [mutateComment, { loading, comments, pageInfo, fetchMore, like, metaData }] = useComments({
        options: {
            variables: {
                productId,
                size: 3
            }
        }
    });

    return (
        <SComments gridArea={gridArea}>
            <div>
                <Title name='Reviews' description={`${metaData?.reviewCount || 0} reviews`} style={{ margin: "1rem 0rem" }} />

                <Create productId={productId} border="top" />    

                {! loading && <Reviews {...metaData} />}

                {
                    ! loading && comments?.length && comments.map(comment => (
                        <Comment 
                            comment={comment} 
                            like={like} 
                            key={comment.id} 
                        />
                    ))
                }

                {! loading && comments?.length >= 3 && <Create productId={productId} />}
            </div>
        </SComments>
    )
}

export default Comments