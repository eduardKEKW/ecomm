import { useQuery } from "@apollo/client";
import { ActivityInterface, ActivityQueryVars } from "Interfaces/queries/Activity.query.interface";
import { ACTIVITY_QUERY } from 'apollo/querys/Activity.query';

interface Props {
    productId: number
}

interface useActivityReturn extends ActivityInterface {
    loading: boolean
}

export const useActivity = ({ productId }: Props): useActivityReturn => {
    const { data, loading } = useQuery<ActivityInterface, ActivityQueryVars>(ACTIVITY_QUERY, {
        variables: {
            productId
        },
    });

    return {
        ...data,
        loading
    };
}
