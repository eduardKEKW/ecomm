import { CommentInterface, COMMENT_FIELDS } from '../fragments/Comment.fragment';
import { PAGINATION_FIELDS } from '../fragments/Pagination.fragment';
import { gql } from '@apollo/client';

export interface PaginationInterface {
    total: number
    from?: number
    size: number
}

export interface RatingsInterface {
    stars: number
    amount: number
}

export interface CommentsMetaInterface {
    avgRating: number
    reviewCount: number
    ratingsCount: RatingsInterface[]
}

export interface CommentResponseInterface {
    hits: CommentInterface[]
    pageInfo: PaginationInterface
    metaData: CommentsMetaInterface
}

export interface CommentQueryInteraface {
    comments: CommentResponseInterface
}

export interface CommnetQueryVarsInterface {
    productId: number
    from?: number
    size?: number
}

const COMMENTS_QUERY = gql`
    ${COMMENT_FIELDS}
    ${PAGINATION_FIELDS}
    query comments (
        $productId: ID,
        $from: Int = 0,
        $size: Int = 10,
        $sorting: CommentSort = {
            newest: null
            popular: null
        },
        $filters: CommentFilters = {
            stars: null
        }
     ) {
        comments (
            productId: $productId,
            from: $from,
            size: $size,
            sorting: $sorting,
            filters: $filters
        ) {
            hits {
                ...CommentFields
            }
            metaData {
                avgRating
                reviewCount
                ratingsCount {
                    stars
                    amount
                }
            }
            pageInfo {  
                ...PaginationFiels
            }
        }
    }
`;

export {
    COMMENTS_QUERY
}