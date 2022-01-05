import { useQuery } from '@apollo/react-hooks'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GET_USER_QUERY } from 'apollo/querys/User.query'
import { SUBSCRIBE_TEXT } from 'helpers/local'
import useSubscription from 'hooks/useSubscribe'
import { UserQueryInterface, UserQueryVarsInterface } from 'Interfaces/queries/User.query.interface'
import React, { useEffect, useMemo, useState } from 'react'
import ButtonMain from './buttons/Main'
import Form from './Form'
import Link from './helpers/LinkCustom'
import Input from './input/Input.main'
import { SSubscribe } from './styled/Subscribe'
import Title from './Title'

interface Props {
    gridArea: string
}

const formState = {
    email: { value: '', validation: ['required'] },
    terms: { value: '', validation: ['required'] }
};

function Subscribe({ gridArea }: Props) {
    const { data: { me: user } = { me: null }, loading }                            = useQuery<UserQueryInterface, UserQueryVarsInterface>(GET_USER_QUERY);
    const [{ response, loading: subscribeLoading, called }, mutateSubscription]     = useSubscription({});
    const [email, setEmail]                                                         = useState<string>('');
    const subscribed                                                                = useMemo(() => (called && ! subscribeLoading && response.success), [called, subscribeLoading, response]);
    
    useEffect(() => {
        setEmail(email || user?.email || '')
    }, [loading])
    
    return (

        <>

    <SSubscribe gridArea={gridArea}>

        <Form initialState={formState} onSubmit={(state) => mutateSubscription({
            variables: { email: (state as any).email.value }
        })} >
            <>
                <div>
                    <Input name="email" type="email" placeholder="Your Email Address" style={{ 
                        borderRadius: "0rem",
                        height: "3rem",
                    }} />
                    
                    <ButtonMain 
                        disable={subscribed} 
                        loading={subscribeLoading} 
                        icon={faEnvelope}
                        type="submit"
                        style={{ 
                            width: "100%",
                            height: "3rem"
                        }}
                    >
                        {subscribed ? <FontAwesomeIcon icon={faCheck} /> : "Subscribe"}
                    </ButtonMain>
                </div>

                <div>
                    <Input name="terms" type="checkbox" style={{ 
                        height: "1rem",
                        width: "1rem"
                    }}>
                        <span>
                            I accept the <Link href="#">terms and conditions.</Link>
                        </span>
                    </Input>
                </div>
            </>
        </Form>

        <h3>
            <Title name="Subscribe" description={SUBSCRIBE_TEXT} />
        </h3>
    </SSubscribe>

    



        {/* <SSubscribe style={{ 
            width: "50vw"
         }}>
            <section>
            <Form initialState={{
                        name: 'test2'
                    }}>
                        <>
                <div>
                    <Input onChange={setEmail} value={email} type="email" placeholder="Your Email Address" style={{ 
                        borderRadius: "0rem",
                        height: "3rem",
                    }} />
                    
                    <ButtonMain 
                        disable={subscribed} 
                        onClick={subscribe} 
                        loading={subscribeLoading} 
                        icon={faEnvelope} 
                        style={{ 
                            width: "100%",
                            height: "3rem"
                        }}
                    >
                        {subscribed ? <FontAwesomeIcon icon={faCheck} /> : "Subscribe"}
                    </ButtonMain>
                </div>

                <div>
                    <Input onChange={(v) => setTermsChecked(!! v as boolean)} type="checkbox" style={{ 
                        height: "1rem",
                        width: "1rem"
                    }}>
                        <span>
                            I accept the <Link href="#">terms and conditions.</Link>
                        </span>
                    </Input>
                </div>
                </>
                    </Form>
            </section>

            <h3>
                <Title name="Subscribe" description={SUBSCRIBE_TEXT} />
            </h3>
        </SSubscribe> */}
        </>
    )
}

export default Subscribe
