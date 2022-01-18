import { gql } from '@apollo/client';

interface PriceInterface {
    gte?: number
    lte?: number
}

interface FiltersInterface {
    brand?: [string]
    color?: [string]
    offer?: boolean
    rating?: [number]
    price?: PriceInterface
    disponibility?: boolean
    category?: string
    slug?: string
    id?: number[]
}

interface OrderInterface {
    newest?: boolean
    reviews?: boolean
    popularity?: boolean
    lowestPrice?: boolean
    hightestPrice?: boolean
    discount?: boolean
}

interface PaginationInterface {
    from?: number
    size?: number
}

export interface ProductFiltersInterface {
    term?: string
    filters?: FiltersInterface
    order?: OrderInterface
    pagination?: PaginationInterface
}

interface PageInfo {
    took: number
    total: number
    from: number
    size: number
}

export interface ProductQueryInterface {
    products: { 
        hits: ProductInterface[]
        pageInfo: PageInfo
    }
}

export interface ProductQueryVarsInterface {
    includeBreadcrumbs?: boolean
    includeGallery?: boolean
    data: ProductFiltersInterface
}

export interface ProductInterface {
    id: number
    name?: string
    price?: number
    category?: string
    manufacturer?: string
    brand?: string
    color?: [string]
    thumb?: string
    description?: string
    reviews_number?: number
    popularity?: number
    discount?: number
    created_at?: Date
    breadcrumbs?: string[]
    disponibility?: Date
    rating?: number
    slug?: string
    gallery?: string[]
}

export interface SkeletonProductInterface extends ProductInterface {
    loading?: boolean
}

const PRODUCT_QUERY = gql`
    query products (
        $data: ProductSearchInput,
        $includeBreadcrumbs: Boolean = false,
        $includeGallery: Boolean = false
    ) {
        products (data: $data) {
            hits {
                id
                name
                price
                category
                manufacturer
                brand
                color
                thumb
                description
                reviews_number
                popularity
                discount
                created_at
                disponibility
                rating
                slug
                breadcrumbs @include (if: $includeBreadcrumbs)
                gallery     @include (if: $includeGallery)
            }
            pageInfo {
                took
                total
                from
                size
            }
        }
    }
`;

export {
    PRODUCT_QUERY
}