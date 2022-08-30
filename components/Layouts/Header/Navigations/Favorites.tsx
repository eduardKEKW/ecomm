import React, { useEffect, useState } from 'react';

import ButtonMain from 'components/buttons/Main';
import Link from 'components/helpers/LinkCustom';
import Loading from 'components/helpers/Loading';
import style from 'styles/components/interactions.module.scss';
import { useFavorite } from 'hooks/useFavorite.hook';
import Item from './Item';
import useCart from 'hooks/useCart.hook';
import { produce } from 'immer';

interface Props {
    setCount?: (count: number) => void
}

const Favorites = ({
    setCount
}: Props) => {
    const [childLoadingIds, setChildLoading]            = useState<{[key: string]: boolean}>({});
    const [{ items, loading }, setFavoriteItems]        = useFavorite({ notify: false });
    const [{ loading: loadingCart }, mutateCartItems]   = useCart();

    const mutateFavorite = (id: string) => {
        setChildLoading(produce(childLoadingIds, (draft) => {
            draft[id] = true;
        }));

        setFavoriteItems({ detach: true, productId: id }).finally(() => {
            setChildLoading(produce(childLoadingIds, (draft) => {
                delete draft[id];
            }));
        });
    }

    const mutateCart = (id: string) => {
        setChildLoading(produce(childLoadingIds, (draft) => {
            draft[id] = true;
        }));
        
        mutateCartItems({
            detach: false,
            productId: id,
            qty: 1
        }).finally(() => {
            setChildLoading(produce(childLoadingIds, (draft) => {
                delete draft[id];
            }));
        });
    }

    useEffect(() => {
        if(! loading) {      
            setChildLoading({});
        }

        setCount(items.length);
    }, [loading, items, setCount]);

    return (
        <div className={style.items}>
            <div className={style.items__container}>
                <Loading loading={! Object.keys(childLoadingIds).length && loading} minHeight={items.length ? "0rem" : "3rem"} minWidth="15rem">
                    <>
                        {
                            items.map(item => 
                                <Item 
                                    onDeleteProp={mutateFavorite}
                                    onAddProps={mutateCart}
                                    key={item.id} 
                                    item={item}
                                    loading={childLoadingIds.hasOwnProperty(item.id)}
                                    type="favorite"
                                />
                            )
                        }
                    </>
                </Loading>
            </div>

            {  !! items.length && (
                    <div className={style.items__btn}>
                        <Link href="/favorites">
                            <ButtonMain>
                                See all favorites items
                            </ButtonMain>
                        </Link>
                    </div>
                )
            }

            {
                ! loading && ! items.length && <p>You don`t have any favorite items.</p> 
            }
        </div>
    )
}

export default React.memo(Favorites)