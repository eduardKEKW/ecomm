import { LazyQueryResult, useLazyQuery } from "@apollo/client";
import { ProductInterface, ProductQueryInterface, ProductQueryVarsInterface, PRODUCT_QUERY } from "apollo/querys/Product.query";
import { useEffect } from "react";

interface Props {
    variables?: ProductQueryVarsInterface
    lazy?: boolean
}

interface ReturnInterface extends Omit<LazyQueryResult<ProductQueryInterface, ProductQueryVarsInterface>, 'data'> {
    products: ProductInterface[] | undefined
}

const useProduct = ({ variables, lazy = true }: Props = {}): [typeof loadProducts, ReturnInterface] => {
    const [loadProducts, { data, ...rest }] = useLazyQuery<ProductQueryInterface, ProductQueryVarsInterface>(PRODUCT_QUERY, {
        notifyOnNetworkStatusChange: true,
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
            products: data?.products?.hits ?? [],
            ...rest
        }
    ];
} 

export default useProduct;