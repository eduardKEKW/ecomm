import React, { useEffect, useState } from "react";
import ButtonMain from "components/buttons/Main";
import Link from "components/helpers/LinkCustom";
import Loading from "components/helpers/Loading";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import style from 'styles/components/interactions.module.scss';
import Item from "./Item";
import Price from "components/Product/Price";
import useCart from "hooks/useCart.hook";

interface Props {
    setCount?: (count: number) => void
}

const Cart = ({
    setCount
}: Props) => {
    const [{ cart, loading }, mutateCartItems]  = useCart({ notify: false });
    const [childLoadingIds, setChildLoading]    = useState<Array<number|null>>([]);

    const onDelete = (id: number) => {
        setChildLoading([...childLoadingIds, id]);

        mutateCartItems({
            variables: {
                items: [id],
                detach: true,
                qty: 0
            }
        });
    }
    
    useEffect(() => {
        if(! loading) {
            setCount(cart?.items?.length ?? 0);
            childLoadingIds.shift;
            setChildLoading([...childLoadingIds]);
        }
    }, [loading, cart]);

    return (    
        <>
            <div className={style.items}>
                <div className={style.items__container}>
                    <Loading loading={! childLoadingIds.length && loading} minHeight={cart?.items?.length ? "0rem" : "3rem"} minWidth="15rem">
                        <>
                        
                            {
                                cart?.items?.map(item => 
                                    <Item
                                        onDeleteProp={onDelete}
                                        key={item.id} 
                                        item={item}
                                        loading={childLoadingIds.includes(item.id)} 
                                        type="cart"
                                    />
                                )
                            }

                        </>
                    </Loading>
                </div>

                {  !!cart?.items?.length && 
                    (<>
                        <div className={style.items__total}>
                            <span> Total: </span> <Price price={cart.total} />
                        </div>

                        <div className={style.items__btn}>
                            <Link href="/cart">
                                <ButtonMain style={{ 
                                    width: "20rem"
                                }} >
                                    Cart details
                                </ButtonMain>
                            </Link>
                        </div>
                    </>)
                }

                {
                    ! loading && ! cart?.items?.length && <p>You don`t have any favorite products.</p> 
                }
            </div>
        </>        
    )
}

export default Cart
