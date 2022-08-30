import React from "react";
import img from "/public/logo6.webp";
import Image from "next/image";
import styles from "styles/components/header.module.scss";
import Link from "next/link";
import { useVelocityMetaDataQuery } from "Graphql/generated/graphql";

interface Props {
  onClick?: () => void;
  href?: string;
}

const LinkContent = React.forwardRef<HTMLAnchorElement, Props>(
  function LinkContent({ onClick, href }: Props, ref) {
    const { data } = useVelocityMetaDataQuery();

    return (
      <div className={styles.header__logo_unset}>
        <a href={href} onClick={onClick} ref={ref}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={img}
              alt="logo"
              quality={100}
              layout="fill"
              className={styles.header__logo_img}
            />
          </div>
        </a>
      </div>
    );
  }
);

const Logo = () => {
  return (
    <div className={styles.header__logo}>
      <Link href="/" passHref>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={img}
              alt="logo"
              quality={100}
              layout="fill"
              className={styles.header__logo_img}
            />
          </div>
      </Link>
    </div>
  );
};

export default Logo;