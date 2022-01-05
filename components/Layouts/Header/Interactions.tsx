
import React, { useRef } from 'react'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import Account from './Navigations/Account';
import Cart from './Navigations/Cart';
import Favorites from './Navigations/Favorites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Tooltip from 'components/helpers/Tooltip';
import cart from '/public/cart.svg';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import styles from 'styles/components/interactions.module.scss';

interface Props {}

const buttons = {
    profile: { name: "My Profile", icon: faUser, Content: (props = {}) => <Account {...props} />, count: 0 },
    favorites: { name: "My Favorites", icon: faHeart, Content: (props = {}) => <Favorites {...props} />, count: 0 },
    cart: { name: "My Cart", IconElem: () => <Image width="18" height="18" src={cart} />, Content: (props = {}) => <Cart {...props} />, count: 0 }
};

const Interactions = () => {
    const countRef = useRef<HTMLDivElement[]>([]);

    const setCount = (count, index) => {
        countRef.current[index]?.setAttribute("data-after-content", count)
    }

    return (
        <div className={styles.interactions}>

            {
                Object.keys(buttons).map((name, index) => {
                    const { name: itemName, icon, IconElem, Content, count } = buttons[name];
                    const Icon = IconElem ? (<IconElem />) : (<FontAwesomeIcon icon={icon} className={styles.interactions__item_icon_content} />);

                    return (
                        <Tooltip 
                            className={styles.interactions__item} 
                            content={Content({ setCount: (count) => setCount(count, index) })} 
                            key={name} 
                        >
                            <>
                                <div 
                                    ref={el => (countRef.current[index] = el)} 
                                    className={styles.interactions__item_icon} 
                                    data-after-content={count}
                                > 
                                    {Icon}
                                </div>

                                <div className={styles.interactions__item_title}> 
                                    {itemName} 
                                </div>
                                
                                <FontAwesomeIcon icon={faSortDown} className={styles.interactions__item_icon_arrow} />
                            </>
                        </Tooltip>
                    )
                })
            }

        </div>

        
    )
}

export default Interactions
