import { useUserActivityQuery } from "Graphql/generated/graphql";

interface Props {
    options: Parameters<typeof useUserActivityQuery>[0]
}

const useActivity = ({ options }: Props): ReturnType<typeof useUserActivityQuery> => {
    const data = useUserActivityQuery(options);

    return data;
}

export default useActivity;