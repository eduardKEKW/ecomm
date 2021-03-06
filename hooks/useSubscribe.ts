import { ApolloCache, DefaultContext, MutationFunctionOptions, useMutation } from "@apollo/client";
import { ApolloError } from "@apollo/react-hooks";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { addNotificationAction } from "Providers/Actions";
import { useGlobalDispatch } from "Providers/GlobalProvider.provider";
import { responseBodyInterface, SubscribeInterface, SubscribeVarsInterface, SUBSCRIBE_MUTATION } from "../apollo/mutations/Subscribe.mutator";

interface Props {
    variables?: SubscribeVarsInterface   
}

interface useSubscriptionReturn {
    response: responseBodyInterface
    loading: boolean
    called: boolean
    error: ApolloError
}

const useSubscription = ({ variables }: Props): [useSubscriptionReturn, typeof mutatateSubscription] => {
    const dispatchGlobalState = useGlobalDispatch();
    
    const [mutatateSubscription, { data, loading, called, error }] = useMutation<SubscribeInterface, SubscribeVarsInterface>(SUBSCRIBE_MUTATION, {
        variables: variables,
        onCompleted: ({ Subscribe }) => {
            dispatchGlobalState(addNotificationAction({
                status: true,
                description: Subscribe.message,
                time: 5000,
                icon: faEnvelope,
            }));
        }
    });

    return [{ response: data?.Subscribe, loading, called, error }, mutatateSubscription];
}

export default useSubscription;
