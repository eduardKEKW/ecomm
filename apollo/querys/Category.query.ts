import { gql } from '@apollo/client';

export interface CategoryQueryInterface {
    category: QueryInterface
}

export interface QueryInterface {
    id: number
    name: string
    slug: string
    breadcrumbs: CategoryInterface[]
    children: CategoryInterface[]
    parent: CategoryInterface[]
}

export interface CategoryQueryVarsInterface {
    parent?: number
    id?: number
    includeBreadcrumbs?: boolean 
    includeChildren?: boolean 
    includeParent?: boolean
}

export interface ChildCategoryInterface {
    name: string
    id: number
    slug: string
}

export interface CategoryInterface extends ChildCategoryInterface {
    children?: ChildCategoryInterface[]
    parent?: ChildCategoryInterface
    breadcrumbs?: ChildCategoryInterface[]
}

const CATEGORY_QUERY = gql`
    query Category (
        $parent: Int = null,
        $id: ID = null,
        $includeBreadcrumbs: Boolean = false,
        $includeChildren: Boolean = false,
        $includeParent: Boolean = false,
     ) {
        category (parent: $parent, id: $id) {
            id
            name
            path
            slug
            breadcrumbs @include (if: $includeBreadcrumbs) {
                name
                id
            }
            children @include (if: $includeChildren) {
                id
                name
                slug
            }
            parent @include (if: $includeParent) {
                id
                name
                slug
            }
        }
    }
`;

export {
    CATEGORY_QUERY
}