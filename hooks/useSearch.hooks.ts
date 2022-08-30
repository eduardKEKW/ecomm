import { SearchProductLazyQueryHookResult, SearchProductQuery, SearchProductQueryVariables, useSearchProductLazyQuery } from "Graphql/generated/graphql";
import { APOLLO_NETWORK_ONLY } from "helpers/local";
import { useEffect, useMemo } from "react";

interface Props {
    variables?: SearchProductQueryVariables
    lazy?: boolean
}

interface ReturnInterface extends Omit<SearchProductLazyQueryHookResult[1], 'data'> {
    products: SearchProductQuery["searchProduct"]["data"] | undefined
}

const useSearch = ({ variables, lazy = false }: Props = {}): [typeof loadProducts, ReturnInterface] => {
    const [loadProducts, { data, ...rest }] = useSearchProductLazyQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: APOLLO_NETWORK_ONLY,
        variables   
    });
    
    useEffect(() => {
        if(! lazy) {
            loadProducts({ variables });
        }
    }, []);
    
    return useMemo(() => ([
        loadProducts,
        {
            products: data?.searchProduct?.data,
            ...rest
        }
    ]), [data]);
}

export default useSearch;