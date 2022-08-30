import { useQuery } from "@apollo/client";
import { MeQuery, useMeQuery } from "Graphql/generated/graphql";
import produce from "immer";
import { useEffect, useState } from "react";

interface Props { }

interface UserDataInterface {
    user?: MeQuery | null
    isGuest: boolean
}

const useUser = (): UserDataInterface => {
    const [userData, setUserData]   = useState<UserDataInterface>(() => ({ isGuest: true }));
    const {data, loading, error}    = useMeQuery();

    useEffect(() => {
        setUserData(
            produce(userData, draft => {
                if(! loading && ! error && !! data?.accountInfo) {
                    draft.isGuest = false;
                    draft.user = data;
                } else {
                    draft.isGuest = true;
                }
            })
        )
    }, [data, loading, error])

    return userData;
}

export default useUser;
