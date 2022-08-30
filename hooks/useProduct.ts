import { ProductQuery, ProductQueryResult, ProductQueryVariables, useProductQuery } from "Graphql/generated/graphql";
import { useEffect, useMemo, useState } from "react";

interface Props {
    variables?: ProductQueryVariables
}

export type ID = string;

interface ReturnInterface extends Omit<ProductQueryResult, 'data'> {
    product: ProductQuery['product'] | null
}

const useProduct = ({ variables }: Props = {}): ReturnInterface => {
    const [product, setProduct]         = useState<ProductQuery['product'] | null>(null);
    const {data, loading, ...rest}      = useProductQuery({
        variables,
    });

    useEffect(() => {
        if(data?.product && ! loading) 
            setProduct(data.product);
    }, [data, loading]);
    
    return useMemo(() => ({
        product,
        loading,
        ...rest
    }), [product, loading]);
} 

export default useProduct;