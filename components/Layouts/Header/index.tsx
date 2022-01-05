import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styles from 'styles/components/header.module.scss';
import Categories from './Categories/Categories';
import Interactions from './Interactions';
import Logo from './Logo';
import Search from './Search';
import Link from 'components/helpers/LinkCustom';

interface Props {}

const Header = () => {
    const [showCategoriesMenu, setShowHoverCategoriesMenu]  = useState<boolean>(false);
    const [menuHover, setMenuHover]                         = useState<boolean>(false);
    const [showMenu, setShowMenu]                           = useState<boolean>(false);

    useEffect(() => {
        setShowMenu(!! (showCategoriesMenu || menuHover));
    }, [showCategoriesMenu, menuHover]);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__top}>
                    <Logo />
                    <Search />
                    <div className={styles.header__interactions}>
                        <Interactions />
                    </div>
                </div>
            </div>

            <div className={styles.menu}>
                <div className={styles.menu__items}>
                        <Categories show={showMenu} setMenuHover={(value) => setMenuHover(value)}>
                            <div 
                                className={[styles.menu__items__item, showMenu && styles.menu_selected].join(' ')} 
                                onMouseEnter={() => setShowHoverCategoriesMenu(true)}
                                onMouseLeave={() => setShowHoverCategoriesMenu(false)}
                            >
                                <Link href="/">                                
                                    <div>
                                        <FontAwesomeIcon icon={faBars} className={styles.menu__items__icon} /> Products
                                    </div>
                                </Link>
                            </div>
                        </Categories>
                    <div className={styles.menu__items__item}>
                        <Link href="/">     
                            <div>
                                New
                            </div>
                        </Link>
                    </div>
                    <div className={styles.menu__items__item}>
                        <Link href="/"> 
                            <div>
                                Price Reduction
                            </div>
                        </Link>
                    </div>
                    <div className={styles.menu__items__item}>
                        <Link href="/"> 
                            <div>
                                Limited Offers
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;