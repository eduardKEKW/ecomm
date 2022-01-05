import React, { useState } from 'react'
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'components/helpers/LinkCustom';
import Loading from 'components/helpers/Loading';
import Price from 'components/Product/Price';
import { ProductInterface } from 'Interfaces/Product.interface';
import { shortenString } from 'helpers/helpers';
import style from 'styles/components/interactions.module.scss';
import { CartItemInterface } from 'Interfaces/Cart.interface';

interface Props {
    item: CartItemInterface & ProductInterface;
    onDeleteProp?: (id: number) => void
    type: string
    onAddProps?: (id: number) => void,
    loading: boolean
}

const Item = ({
    item: {
        id,
        name,
        thumb,
        price,
        discount,
        quantity
    },
    onDeleteProp,
    onAddProps,
    type,
    loading
}: Props) => {
    const [hover, setHover] = useState<boolean>(false);
    
    const onDelete = () => {
        onDeleteProp(id);
    }

    const onAdd = () => {
        onAddProps(id);
    }

    return (
        <div 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={[style.items__item, true && style.items__loading].join(' ')} 
        >
            <Loading loading={loading} >
                <>
                    <Image
                        src={thumb}
                        alt={name}
                        width="40"
                        height="20"
                        className={style.items__item__image}
                    />

                    <Link href="/product" parentClassName={style.items__item__name}>
                        {
                            shortenString({
                                str: name,
                                word: true,
                                count: 10
                            })
                        }
                    </Link>
                    {
                        type == 'cart' &&
                        (
                            <div className={style.items__item__qty}>
                                {quantity}x
                            </div>
                        )
                    }

                    <div className={style.items__item__price}>
                        <Price price={price} discount={discount} />
                    </div>

                    <div className={[style.items__item__buttons, hover && style.animation_fadeUp].join(' ')}>

                        {type == 'favorite' && <FontAwesomeIcon onClick={onAdd} icon={faCartPlus} className={style.items__item__button} title="Add to card"/>}

                        <FontAwesomeIcon icon={faTimes} className={style.items__item__button} title="Delete" onClick={onDelete} />

                    </div>
                </>
            </Loading>
        </div>
    )
}

export default Item
