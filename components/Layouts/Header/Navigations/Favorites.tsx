import React, { useEffect, useState } from 'react';

import ButtonMain from 'components/buttons/Main';
import Link from 'components/helpers/LinkCustom';
import Loading from 'components/helpers/Loading';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from 'styles/components/interactions.module.scss';
import { useFavorite } from 'hooks/useFavorite.hook';
import Item from './Item';
import useCart from 'hooks/useCart.hook';

interface Props {
    setCount?: (count: number) => void
}

const Favorites = ({
    setCount
}: Props) => {
    const [childLoadingIds, setChildLoading]            = useState<Array<number|null>>([]);
    const [{ items, loading }, setFavoriteItems]        = useFavorite({ notify: false });
    const [{ loading: loadingCart }, mutateCartItems]   = useCart();
    
    const mutateFavorite = (id: number) => {
        setChildLoading([...childLoadingIds, id]);
        setFavoriteItems({ variables: {
            items: [id],
            detach: true
        }});
    }

    const mutateCart = (id: number) => {
        setChildLoading([...childLoadingIds, id]);
        mutateCartItems({
            variables: {
                items: [id],
                detach: false,
                qty: 1
            }
        });
    }

    useEffect(() => {
        if(! loading && ! loadingCart) {      
            setCount(items.length);
            setChildLoading([]);
        }
    }, [loading, items, loadingCart]);

    return (
        <div className={style.items}>
            <div className={style.items__container}>
                <Loading loading={!childLoadingIds.length && loading} minHeight={items.length ? "0rem" : "3rem"} minWidth="15rem">
                    <>
                        {
                            items.map(item => 
                                <Item 
                                    onDeleteProp={mutateFavorite}
                                    onAddProps={mutateCart}
                                    key={item.id} 
                                    item={item}
                                    loading={childLoadingIds.includes(item.id)}
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
                            <ButtonMain style={{ 
                                width: "20rem"
                            }} >
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