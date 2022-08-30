import { useEffect, useState } from "react";
import { useGlobalDispatch } from "Providers/GlobalProvider.provider";
import { addNotificationAction } from "Providers/Actions";
import { faHeart as regularFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { NotificationInterface } from "components/Notification";
import { ProductFlat, useAddToWishlistMutation, useRemoveFromWishlistMutation, useWishlistQuery, WishlistDocument, WishlistQuery } from "Graphql/generated/graphql";

export interface setFavoriteInterface {
    detach: boolean,
    productId: string
}

type Item = WishlistQuery["wishlist"]["data"][0]["product"]["productFlat"]; 

interface DataInterface { 
    items?: Item[],
    loading?: boolean,
};

interface Props {
    notify?: boolean
}

const useFavorite = ({ notify: useNotifications = true }: Props = {}): [DataInterface, typeof setFavoriteItems] => {
    const [loading, setLoading]             = useState<boolean>(false);
    const [favorites, setFavorites]         = useState<Item[]>([]);
    const dispatchGlobalState               = useGlobalDispatch();
    
    const { data: favoriteItems, loading: loadingFavoriteItems }   = useWishlistQuery({
        notifyOnNetworkStatusChange: true,
        variables: {
            first: 10,
            page: 1   
        }
    });

    const [ addItemsToFavorites, { loading: loadingAdd } ] = useAddToWishlistMutation({
        refetchQueries: [WishlistDocument],
        awaitRefetchQueries: true,
        onCompleted: ({ addToWishlist }) => notify({
            title: 'Favorite list updated!',
            description: 'Item added to favorites 😍',
            icon: solidFaHeart,
            status: true
        }),
        onError: ({ message }) => notify({
            title: 'We did an oopsie! 😓',
            description: message,
            icon: solidFaHeart,
            status: false
        })
    });
    
    const [ removeItemsToFavorites, { loading: loadingRemove } ] = useRemoveFromWishlistMutation({
        refetchQueries: [WishlistDocument],
        awaitRefetchQueries: true,
        onCompleted: ({ removeFromWishlist }) => notify({
            title: 'Favorite list updated!',
            description: 'Favorite item removed 😓',
            icon: regularFaHeart,
            status: true
        }),
        onError: ({ message }) => notify({
            title: 'We did an oopsie! 😓',
            description: message,
            icon: solidFaHeart,
            status: false
        })
    });

    const notify = (data: Omit<NotificationInterface, "time" | "color">) => {
        if(useNotifications) {
            dispatchGlobalState(addNotificationAction({
                ...data,
                time: 5000,
            }));
        }
    }
    
    const setFavoriteItems = (options: setFavoriteInterface): Promise<any> => {
        if(options.detach) {
            return removeItemsToFavorites({
                variables: {
                    input: {
                        productId: options.productId,
                    }
                }
            })
        } else {
            return addItemsToFavorites({
                variables: {
                    input: {
                        productId: options.productId
                    }
                }
            })
        }
    }

    useEffect(() => {
        const items = favoriteItems?.wishlist?.data?.map(p => p.product.productFlat);

        if(! loadingFavoriteItems && items) {
            setFavorites(items);
        }
    }, [loadingFavoriteItems]);

    useEffect(() => {
        setLoading(loadingFavoriteItems || loadingAdd || loadingRemove);
    }, [loadingFavoriteItems, loadingAdd, loadingRemove]);
    
    return [{ items: favorites, loading }, setFavoriteItems];
}

export {
    useFavorite
}   