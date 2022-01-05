import { useQuery } from "@apollo/client";
import { QueryHookOptions, useLazyQuery } from "@apollo/react-hooks";
import { CATEGORY_QUERY } from 'apollo/querys/Category.query';
import { CategoryInterface } from "Interfaces/Category.interface";
import { CategoryQueryInterface, CategoryQueryVarsInterface } from "Interfaces/queries/Category.query.interface";
import { useEffect } from "react";

interface Props {
    lazy?: boolean
    variables: CategoryQueryVarsInterface   
    options?: QueryHookOptions
}

interface useCategoryReturn {
    categories: CategoryInterface[]
    loading: boolean
}

const useCategory = ({ variables, options }: Props): useCategoryReturn => {
    const { data, loading } = useQuery<CategoryQueryInterface, CategoryQueryVarsInterface>(CATEGORY_QUERY, {
        variables: variables,
    });

    return { 
        categories: (data?.category ?? []) as CategoryInterface[],
        loading
    };
}

export default useCategory;