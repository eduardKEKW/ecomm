import { LazyQueryResult, QueryLazyOptions, QueryTuple, useLazyQuery } from "@apollo/client";
import { LazyQueryHookOptions } from "@apollo/react-hooks";
import { ProductInterface, ProductQueryInterface, ProductQueryVarsInterface, PRODUCT_QUERY } from "apollo/querys/Product.query";
import { useEffect } from "react";

interface Props {
    variables?: ProductQueryVarsInterface
    lazy?: boolean
}

interface returnValueInterface extends Omit<LazyQueryResult<ProductQueryInterface, ProductQueryVarsInterface>, 'data'> {
    products: ProductInterface[] | undefined
}

const useProduct = ({ variables, lazy = true }: Props = {}): [typeof loadProducts, returnValueInterface] => {
    const [loadProducts, { data, ...rest }] = useLazyQuery<ProductQueryInterface, ProductQueryVarsInterface>(PRODUCT_QUERY, {
        variables: variables
    });
    
    useEffect(() => {
        if(! lazy) {
            loadProducts({
                variables,
            });
        }
    }, []);

    return [
        loadProducts, 
        {
            products: data?.products?.hits ?? null,
            ...rest
        }
    ];
} 

export default useProduct;