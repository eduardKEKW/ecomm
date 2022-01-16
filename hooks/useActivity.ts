import { useQuery } from "@apollo/client";
import { QueryHookOptions } from "@apollo/react-hooks";
import { ActivityDataInterface, ActivityInterface, ActivityQueryVars, ACTIVITY_QUERY } from 'apollo/querys/Activity.query';

interface Props {
    options: QueryHookOptions<ActivityDataInterface, ActivityQueryVars>
}

interface useActivityReturn extends ActivityInterface {
    loading: boolean
}

const useActivity = ({ options }: Props): useActivityReturn => {
    const { data, loading } = useQuery<ActivityDataInterface, ActivityQueryVars>(ACTIVITY_QUERY, options);

    return {
        ...data?.activity,
        loading
    };
}

export default useActivity;