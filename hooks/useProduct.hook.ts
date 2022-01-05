import { QueryLazyOptions, useLazyQuery } from "@apollo/client";
import { LazyQueryHookOptions } from "@apollo/react-hooks";
import { PRODUCT_QUERY } from "apollo/querys/Product.query";
import { ProductInterface } from "Interfaces/Product.interface";
import { ProductQueryInterface, ProductQueryVarsInterface } from "Interfaces/queries/Product.query.interface";
import { useEffect } from "react";

interface Props {
    variables?: ProductQueryVarsInterface
    lazy?: boolean
}

type loadProductsFun = (options?: LazyQueryHookOptions<ProductQueryVarsInterface, ProductQueryVarsInterface>) => void;

interface returnValueInterface {
    loading: boolean
    products: ProductInterface[] | undefined
    called?: boolean
}

const useProduct = ({ variables, lazy = true }: Props = {}): [loadProductsFun, returnValueInterface] => {
    const [loadProducts, { called, loading, data }] = useLazyQuery<ProductQueryInterface, ProductQueryVarsInterface>(PRODUCT_QUERY, {
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
            loading,
            products: data?.products?.hits ?? null,
            called
        }
    ];
} 

export default useProduct;