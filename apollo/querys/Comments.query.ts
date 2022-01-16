import { CommentInterface, COMMENT_FIELDS } from '../fragments/Comment.fragment';
import { PAGINATION_FIELDS } from '../fragments/Pagination.fragment';
import { gql } from '@apollo/client';
import { ListInterface } from 'components/helpers/Resource';

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

interface SortingInterface {
    newest?: boolean
    popular?: boolean
}

interface FiltersInterface {
    stars?: number
}

export interface CommnetQueryVarsInterface {
    productId: number
    from?: number
    size?: number
    sorting?: SortingInterface,
    filters?: FiltersInterface
}

export const commentsFiltersOptions: ListInterface[] = [
    {name: 'All', value: 'null', selected: true},
    {name: '1 Stars', value: '1'},
    {name: '2 Stars', value: '2'},
    {name: '3 Stars', value: '3'},
    {name: '4 Stars', value: '4'},
    {name: '5 Stars', value: '5'},
];

export const commentsSortingOptions: ListInterface[] = [
    {name: 'Popular', value: 'popular', selected: true},
    {name: 'Newset', value: 'newest'},
];

export const commentsPerPageOptions: ListInterface[] = [
    {name: '3', value: '3', selected: true},
    {name: '6', value: '6'},
    {name: '9', value: '9'}
];

const COMMENTS_QUERY = gql`
    ${COMMENT_FIELDS}
    ${PAGINATION_FIELDS}
    query comments (
        $productId: ID,
        $from: Int = 1,
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