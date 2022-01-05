import { GET_GUEST_CART } from "apollo/querys/Cart.query";
import { GET_USER_QUERY } from "apollo/querys/User.query";

const MUTATE_CART_ITEMS_REFETCH =  [GET_USER_QUERY, GET_GUEST_CART];

export {
    MUTATE_CART_ITEMS_REFETCH
}