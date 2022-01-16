
import { ApolloCache, DefaultContext, MutationFunctionOptions, useMutation, useQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";

import { FavoriteMutatorInterface, FavoriteMutatorVarsInterface, FAVORITE_MUTATION } from "apollo/mutations/Favorites.mutator";
import { FavoriteQueryInterface, FavoriteQueryVarsInterface, FAVORITE_QUERY } from 'apollo/querys/Favorite.query';
import { useGlobalDispatch } from "Providers/GlobalProvider.provider";
import { addNotificationAction } from "Providers/Actions";
import { faHeart as regularFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { UserInterface } from "apollo/fragments/User.fragment";
import { ProductInterface } from "apollo/querys/Product.query";


export type options = MutationFunctionOptions<FavoriteMutatorInterface, FavoriteMutatorVarsInterface, DefaultContext, ApolloCache<any>>;

interface returnData { 
    items?: ProductInterface[],
    loading?: boolean,
    user?: UserInterface | null
};

interface Props {
    notify?: boolean
}

const useFavorite = ({ notify: useNotifications = true }: Props = {}): [ returnData, (options?: options) => any ] => {
    const [loading, setLoading]             = useState<boolean>(false);
    const [favorites, setFavorites]         = useState<ProductInterface[]>([]);
    const [notifications, setNotifications] = useState<{ [key: number]: boolean }>([]);
    const dispatchGlobalState               = useGlobalDispatch();
    
    const { data: favoriteItems, loading: loadingFavoriteItems }   = useQuery<FavoriteQueryInterface, FavoriteQueryVarsInterface>(FAVORITE_QUERY, {
        notifyOnNetworkStatusChange: true,
        variables: {
            from: 0,
            size: 50
        }
    });
    const [ mutateFavoriteItems, { loading: loadingMutation } ]   = useMutation<FavoriteMutatorInterface, FavoriteMutatorVarsInterface>(FAVORITE_MUTATION, {
        refetchQueries: [FAVORITE_QUERY],
        awaitRefetchQueries: true,
        onCompleted: ({ mutateFavoriteItems: ids }) => {
            ids.forEach(id => {
                if(notifications.hasOwnProperty(id)) {

                    notify({ detach: notifications[id], success: true })

                    setNotifications(state => {
                        delete notifications[id]
                        return { ...state }
                    })

                }
            });
        },
        onError: () => {
            notify({ detach: false, success: false })
        }
    });

    const notify = ({ detach, success }) => {
        if(useNotifications) {
            dispatchGlobalState(addNotificationAction({
                status: success,
                description: `Item ${detach ? 'removed from' : 'added to'} favorites.`,
                time: 5000,
                icon: detach ? regularFaHeart : solidFaHeart,
                color: "rgb(255, 89, 89)"
            }));
        }
    }
    
    const setFavoriteItems = (options: options) => {
        mutateFavoriteItems(options);
        setNotifications((not) => ({
            ...not,
            [options.variables.items[0]]: options.variables.detach
        }))
    }

    useEffect(() => {
        const items = favoriteItems?.favoriteItems;

        if(! loadingFavoriteItems && items) {
            setFavorites(items);
        }
    }, [loadingFavoriteItems]);

    useEffect(() => {
        setLoading(loadingFavoriteItems || loadingMutation);
    }, [loadingFavoriteItems, loadingMutation]);
    
    return [{ items: favorites, loading }, setFavoriteItems];
}

export {
    useFavorite
}   