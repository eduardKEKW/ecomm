import { ApolloCache, DefaultContext, MutationFunctionOptions, useMutation, useQuery } from '@apollo/client';
import { MUTATE_CART_ITEMS } from 'apollo/mutations/Cart.mutator';
import { GET_USER_QUERY } from 'apollo/querys/User.query';
import { CartInterface } from 'Interfaces/Cart.interface';
import { CartQueryInterface, CartQueryVarsInterface } from 'Interfaces/mutations/CartItems.mutator.interface';
import { useEffect, useState } from 'react'
import {GET_GUEST_CART} from 'apollo/querys/Cart.query';
import { UserQueryInterface, UserQueryVarsInterface } from 'Interfaces/queries/User.query.interface';
import { useGlobalDispatch } from 'Providers/GlobalProvider.provider';
import { addNotificationAction } from 'Providers/Actions';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

type mutateCartItems = (options?: MutationFunctionOptions<CartQueryInterface, CartQueryVarsInterface, DefaultContext, ApolloCache<any>>) => any

interface guestCartInterface {
    cartItems: CartInterface
}

interface guestCartInterfaceReturn {
    cart: CartInterface
    loading: boolean
}

interface Props {
    notify?: boolean
}

function useCart({ notify = true }: Props = {}): [guestCartInterfaceReturn, mutateCartItems] {
    const [loading, setLoading] = useState<boolean>(true);
    const [cart, setCart]       = useState<CartInterface>({ items: [] });
    const dispatchGlobalState   = useGlobalDispatch();

    const { data: guestCartData, loading: guestCartLoading }    = useQuery<guestCartInterface, CartQueryVarsInterface>(GET_GUEST_CART, {
        notifyOnNetworkStatusChange: true,
    });

    const { data: userCartData, loading: userLoading }          = useQuery<UserQueryInterface, UserQueryVarsInterface>(GET_USER_QUERY, {
        notifyOnNetworkStatusChange: true,
    });
    
    const [mutateCartItems, { data: userData, loading: userItemsLoading }] = useMutation<CartQueryInterface, CartQueryVarsInterface>(MUTATE_CART_ITEMS, {
        refetchQueries: [GET_USER_QUERY, GET_GUEST_CART],
        awaitRefetchQueries: true,
        onCompleted: ({ MutateCartItems }) => {
            const { message, success } = MutateCartItems
            if(notify) {
                dispatchGlobalState(addNotificationAction({
                    status: success,
                    description: message,
                    time: 5000,
                    icon: faShoppingCart,
                    color: "rgb(255, 89, 89)"
                }));
            }
        }
    });

    useEffect(() => {
        setCart(userCartData?.me?.cart ?? guestCartData?.cartItems);
    }, [guestCartData, userCartData]);

    useEffect(() => {
        setLoading(guestCartLoading || userLoading || userItemsLoading);
    }, [guestCartLoading, userLoading, userItemsLoading])

    return [ { cart, loading }, mutateCartItems];
}

export default useCart

