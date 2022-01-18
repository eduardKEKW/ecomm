
import React, { useCallback, useRef } from 'react'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

import Account from './Navigations/Account';
import Cart from './Navigations/Cart';
import Favorites from './Navigations/Favorites';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Tooltip from 'components/helpers/Tooltip';
import cart from '/public/cart.svg';
import { faSortDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from 'styles/components/interactions.module.scss';

interface ButtonInterface {
    name: string,
    icon?: IconDefinition,
    showCount?: boolean,
    IconElem?: React.FC
    Content: React.FC<{ setCount?: (count: number) => void }>
    count?: number
}

const buttons: { [key: string]: ButtonInterface } = {
    profile: { 
        name: "My Profile",
        icon: faUser,
        showCount: false,
        count: 0,
        Content: function Content (props = {}) { 
            return <Account {...props} />
        }
    },
    favorites: {
        name: "My Favorites",
        icon: faHeart,
        count: 0,
        Content: function Content (props = {}) {
            return <Favorites {...props} />
        }
    },
    cart: { 
        name: "My Cart",
        count: 0,
        IconElem: function IconElem () {
            return <Image width="18" height="18" alt="add_to_card" src={cart} />
        },
        Content: function Content (props = {}) {
            return <Cart {...props} /> 
        } 
    }
};

const Interactions = () => {
    const countRef = useRef<HTMLDivElement[]>([]);
    
    const setCount = useCallback(
        (count, index) => {
            countRef.current[index]?.setAttribute("data-after-content", count)
        }, []
    );

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
