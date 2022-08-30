import { QueryHookOptions } from "@apollo/client";
import { CategoriesQuery, CategoriesQueryVariables, useCategoriesQuery } from "Graphql/generated/graphql";

export type CategorySuggestionInterface = Omit<CategoriesQuery, "breadcrumbs" | "filterableAttributes">;
export type CategoryType = CategoriesQuery['categories']['data'][0];

interface Props {
    lazy?: boolean
    variables: CategoriesQueryVariables   
    options?: QueryHookOptions
}

interface useCategoriesReturn {
    categories: CategoryType[]
    loading: boolean
}

const useCategories = ({ variables, options = {} }: Props): useCategoriesReturn => {
    const { data, loading } = useCategoriesQuery({
        variables: { ...variables, onlyLink: true },
        ...options,
    })

    return { 
        categories: data?.categories.data,
        loading
    };
}

export default useCategories;