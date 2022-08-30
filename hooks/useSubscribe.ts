import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { NewsletterSubscriberMutationVariables, useNewsletterSubscriberMutation } from "Graphql/generated/graphql";
import { addNotificationAction } from "Providers/Actions";
import { useGlobalDispatch } from "Providers/GlobalProvider.provider";
import { useEffect, useState } from "react";
import useUser from "./useUser";

interface Props {
    variables?: NewsletterSubscriberMutationVariables   
}

const useSubscription = ({ variables }: Props): [typeof response & { isSubscribed: boolean, defaultAddress: string}, typeof mutatateSubscription] => {
    const dispatchGlobalState = useGlobalDispatch();
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const { isGuest, user} = useUser();
    
    const [mutatateSubscription, response] = useNewsletterSubscriberMutation({
        variables: variables,
        onCompleted: ({ }) => {
            setIsSubscribed(true);

            dispatchGlobalState(addNotificationAction({
                status: true,
                description: "Subscribed !",
                time: 5000,
                icon: faEnvelope,
                title: "Subscribed to newsletter."
            }));
        }
    });

    useEffect(() => {
        if(! isGuest) {
            setIsSubscribed(!! user?.accountInfo?.customer?.subscribedToNewsLetter);            
        }
    }, [isGuest])

    return [
        {
            ...response, 
            isSubscribed: isSubscribed,
            defaultAddress: user?.accountInfo?.customer?.email
        },
        mutatateSubscription
    ];
}

export default useSubscription;
