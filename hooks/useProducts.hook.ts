import { ListInterface } from "components/helpers/Resource";
import { GetProductListingQueryVariables, SortValues, useGetProductListingLazyQuery, useGetProductListingQuery } from "Graphql/generated/graphql";
import { useEffect } from "react";

export type useProductsVars = Parameters<typeof useGetProductListingLazyQuery>[0];

interface Props {
    variables?: GetProductListingQueryVariables
    skip?: boolean
    lazy?: boolean
}

export const productsSortingOptions: ListInterface[] = [
    {name: 'Popular', value: SortValues.Popular, selected: true},
    {name: 'Newset', value: SortValues.Newest},
    {name: 'Discount', value: SortValues.Discount },
    {name: 'Expensive', value: SortValues.Expensive },
    {name: 'Reviews', value: SortValues.Reviews },
];

export const productsPerPageOptions: ListInterface[] = [
    {name: '10', value: '10', selected: true},
    {name: '12', value: '12'},
    {name: '20', value: '20'}
];


const useProducts = ({ variables, lazy = false }: Props = {}): ReturnType<typeof useGetProductListingLazyQuery> => {
    const [getProducts, products] = useGetProductListingLazyQuery({
        notifyOnNetworkStatusChange: true,
        variables
    });

    useEffect(() => {
        if(! lazy) {
            getProducts({ variables });
        }
    }, [lazy]);

    return [getProducts, products];
} 

export default useProducts;