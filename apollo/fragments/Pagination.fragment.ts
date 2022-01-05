import { gql } from '@apollo/client';

export const PAGINATION_FIELDS = gql`
    fragment PaginationFiels on pageInfo {
        total
        from
        size    
    }
`;