import React from "react";
import img from '/public/logo6.png';
import Image from 'next/image';
import styles from 'styles/components/header.module.scss';
import Link from 'next/link';

interface Props {
    onClick?: () => void
    href?: string
}

const LinkContent = React.forwardRef<HTMLAnchorElement, Props>(({ onClick, href }: Props, ref) => {
    return (
        <div className={styles.header__logo_unset}>
            <a href={href} onClick={onClick} ref={ref}>
                <Image
                    src={img}
                    alt="Ecomm Logo"
                    quality={100}
                    layout="fill"
                    className={styles.header__logo_img}
                />
            </a>
        </div>
    )
})

const Logo = () => {
    return (
        <div className={styles.header__logo}>
            <Link href='/' passHref >
                <LinkContent />
            </Link>
        </div>
    )
}

export default Logo;