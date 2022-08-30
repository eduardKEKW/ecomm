import React, { useEffect, useState } from "react";
import ButtonMain from "components/buttons/Main";
import Link from "components/helpers/LinkCustom";
import Loading from "components/helpers/Loading";
import style from "styles/components/interactions.module.scss";
import Item from "./Item";
import Price from "components/Product/Price";
import useCart from "hooks/useCart.hook";
import produce from "immer";

interface Props {
  setCount?: (count: number) => void;
}

const Cart = ({ setCount }: Props) => {
  const [{ cart, loading }, mutateCartItems]  = useCart();
  const [childLoadingIds, setChildLoading]    = useState<{
    [key: string]: boolean;
  }>({});

  const onDelete = (id: string) => {
    setChildLoading(
      produce(childLoadingIds, (draft) => {
        draft[id] = true;
      })
    );

    mutateCartItems({
      detach: true,
      productId: id,
    }).finally(() => {
      setChildLoading(
        produce(childLoadingIds, (draft) => {
          delete draft[id];
        })
      );
    });
  };

  useEffect(() => {
    setCount(cart?.cartDetail?.allItems?.length ?? 0);
  }, [loading, cart]);

  return (
    <>
      <div className={style.items}>
        <div className={style.items__container}>
          <Loading
            loading={!Object.keys(childLoadingIds).length && loading}
            minHeight={cart?.cartDetail?.itemsCount ? "0rem" : "3rem"}
            minWidth="15rem"
          >
            <>
              {cart?.cartDetail?.allItems?.map((item) => (
                <Item
                  onDeleteProp={() => onDelete(item.id)}
                  key={item.id}
                  item={{ ...item.productFlat, quantity: item.quantity }}
                  loading={childLoadingIds.hasOwnProperty(item.id)}
                  type="cart"
                />
              ))}
            </>
          </Loading>
        </div>

        {!!cart?.cartDetail?.itemsCount && (
          <>
            <div className={style.items__total}>
              <span> Total: </span>{" "}
              <Price
                price={cart.cartDetail.grandTotal}
                specialPrice={cart.cartDetail.discountAmount}
              />
            </div>

            <div className={style.items__btn}>
              <Link href="/cart">
                <ButtonMain>Cart details</ButtonMain>
              </Link>
            </div>
          </>
        )}

        {!loading && !cart?.cartDetail?.itemsCount && (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
