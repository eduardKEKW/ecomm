import { QueryHookOptions } from "@apollo/client";
import { CategoryQuery, CategoryQueryVariables, useCategoryQuery } from "Graphql/generated/graphql";

export type CategorySingleType = CategoryQuery['category'];
export type AttributeType = CategoryQuery['category']['filterableAttributes'][0]

interface Props {
    variables?: CategoryQueryVariables   
    options?: QueryHookOptions
    skip?: boolean
}

interface useCategoryReturn extends Omit<ReturnType<typeof useCategoryQuery>, 'data'> {
    category: CategorySingleType
    loading: boolean
}

const useCategory = ({ variables = {}, options, skip = false }: Props): useCategoryReturn => {
    const { data, loading, ...rest } = useCategoryQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "cache-and-network",
        variables,
        skip
    });

    return { 
        category: data?.category,
        loading,
        ...rest
    };
}

export default useCategory;