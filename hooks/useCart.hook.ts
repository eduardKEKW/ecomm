import { useEffect, useState } from 'react'
import { useGlobalDispatch } from 'Providers/GlobalProvider.provider';
import { addNotificationAction } from 'Providers/Actions';
import { faCartArrowDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NotificationInterface } from 'components/Notification';
import { CartDetailDocument, CartDetailQuery, useAddItemToCartMutation, useCartDetailQuery, useRemoveCartItemMutation } from 'Graphql/generated/graphql';

interface DataInterface {
    cart: CartDetailQuery
    loading: boolean
}

interface MutateCartInterface {
    detach: boolean
    productId: string
    qty?: number
}

interface Props {
    useNotifications?: boolean
}

function useCart({ useNotifications = true }: Props = {}): [DataInterface, typeof mutateCart] {
    const [loading, setLoading] = useState<boolean>(true);
    const [cart, setCart]       = useState<CartDetailQuery | null>(null);
    const dispatchGlobalState   = useGlobalDispatch();

    const { data, loading: loadingCartItems } = useCartDetailQuery({
        notifyOnNetworkStatusChange: true,
    });
        
    const [removeItemFromCart, { data: removeItem, loading: loadingCartItemRemove }] = useRemoveCartItemMutation({
        refetchQueries: [CartDetailDocument],
        awaitRefetchQueries: true,
        onCompleted: ({ removeCartItem }) => notify({
            title: 'Cart items updated!',
            description: 'Item removed from cart 😅',
            icon: faShoppingCart,
            status: true
        }),
        onError: ({ message }) => notify({
            title: 'We did an oopsie! 🤭',
            description: message,
            icon: faShoppingCart,
            status: false
        })
    });

    const [addItemToCart, { data: addIten, loading: loadingCartAddItem }] = useAddItemToCartMutation({
        refetchQueries: [CartDetailDocument],
        awaitRefetchQueries: true,
        onCompleted: ({ addItemToCart }) => notify({
            title: 'Cart items updated!',
            description: 'Item added to cart 😅',
            icon: faCartArrowDown,
            status: true
        }),
        onError: ({ message }) => notify({
            title: 'Out of stock! 🤭',
            description: 'Please try again later.',
            icon: faShoppingCart,
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

    const mutateCart = (options: MutateCartInterface): Promise<any> => {
        if(options.detach) {
            return removeItemFromCart({
                variables: {
                    id: options.productId,
                }
            })
        } else {
            return addItemToCart({
                variables: {
                    input: {
                        productId: options.productId,
                        quantity: options.qty
                    }
                }
            })
        }
    }

    useEffect(() => {
        setCart(data);
    }, [loadingCartItems]);

    useEffect(() => {
        setLoading(loadingCartItems || loadingCartItemRemove || loadingCartAddItem);
    }, [loadingCartItems, loadingCartItemRemove, loadingCartAddItem])

    return [ { cart, loading }, mutateCart];
}

export default useCart

