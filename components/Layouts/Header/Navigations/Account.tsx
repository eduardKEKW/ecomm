

import ButtonMain from 'components/buttons/Main';
import Link from 'components/helpers/LinkCustom';
import Loading from 'components/helpers/Loading';
import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from 'styles/components/interactions.module.scss';
import { LOCAL_ACCESS_TOKEN_NAME, USER_NAVIGATION } from 'helpers/local';
import { useRouter } from 'next/router';
import { useMeQuery } from 'Graphql/generated/graphql';

interface Props {
    setCount?: (count: number) => void
}

const Account = ({
    setCount
}: Props) => {
    const { data: { accountInfo } = { me: null }, loading, error }  = useMeQuery();
    const router                                                    = useRouter();
    
    if(! accountInfo) return (
        <div className={style.account}>
            <Loading loading={loading} showChildren={false} minHeight="15rem" minWidth="10rem" >
                <div className={style.account__empty}>
                    <ButtonMain icon={faArrowRight}>
                        <Link href="/login">
                            Sign in
                        </Link>
                    </ButtonMain>

                    <div className={style.account__empty_text}>
                        New customer? <Link href="/register">Start here</Link>
                    </div>

                </div>
            </Loading>
        </div>
    )

    return (
        <div className={style.account}>
            <div className={style.account__navigation}>
                <div className={style.account__navigation_item}>
                    Hy, {accountInfo.customer.firstName} <span>✋</span>
                </div>

                {
                    USER_NAVIGATION.map(({ name }) => {
                        return (
                            <div key={name} className={style.account__navigation_item}>
                                <Link href="/as" key={name}>
                                    <div className={style.account__item}>
                                        {name}
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }

                <div className={style.account__navigation_item}>
                    {/* <Link onClick={() => {
                        localStorage.removeItem(LOCAL_ACCESS_TOKEN_NAME);
                        router.reload()
                    }} href="">Log out 😔</Link> */}
                    <p onClick={() => {
                        localStorage.removeItem(LOCAL_ACCESS_TOKEN_NAME);
                        router.reload()
                    }}>Log out 😔</p>
                </div>
            </div>
        </div>
    )
}

export default Account

