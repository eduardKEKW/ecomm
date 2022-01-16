

import ButtonMain from 'components/buttons/Main';
import { GET_USER_QUERY, UserQueryInterface, UserQueryVarsInterface } from 'apollo/querys/User.query';
import Link from 'components/helpers/LinkCustom';
import Loading from 'components/helpers/Loading';
import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from 'styles/components/interactions.module.scss';
import { useQuery } from '@apollo/client';
import { USER_NAVIGATION } from 'helpers/local';

interface Props {
    setCount?: (count: number) => void
}

const Account = ({
    setCount
}: Props) => {
    const { data: { me: user } = { me: null }, loading, error } = useQuery<UserQueryInterface, UserQueryVarsInterface>(GET_USER_QUERY);
    
    if(! user) return (
        <div className={style.account}>
            <Loading loading={loading} showChildren={false} minHeight="15rem" minWidth="10rem" >
                <div className={style.account__empty}>
                    <Link href="/login">
                        <ButtonMain icon={faArrowRight}>
                            Sign in
                        </ButtonMain>
                    </Link>

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
                    Hy, {user.name}
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
                    <Link href="/logout">Log out</Link>
                </div>
            </div>
        </div>
    )
}

export default Account

