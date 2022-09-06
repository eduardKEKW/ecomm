import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMeQuery } from 'Graphql/generated/graphql'
import { SUBSCRIBE_TEXT } from 'helpers/local'
import useSubscription from 'hooks/useSubscribe'
import React, { useEffect, useState } from 'react'
import ButtonMain from './buttons/Main'
import Form, { IFormState } from './Form'
import Link from './helpers/LinkCustom'
import Input from './input/Input.main'
import { STitledSection } from './styled/Benefits'
import { SSubscribe } from './styled/Subscribe'
import Title from './Title'

interface Props {
    gridArea: string
}

const formState: IFormState = {
    email: { value: '', validation: ['required'] },
    terms: { value: false, validation: ['required'] }
};

function Subscribe({ gridArea }: Props) {
    const { data: { accountInfo: user } = { me: null }, loading } = useMeQuery();
    const [{ loading: subscribeLoading, called, isSubscribed, defaultAddress,  ...response }, mutateSubscription] = useSubscription({});
    const [email, setEmail] = useState<string>('');
    
    useEffect(() => {
        setEmail(email || user?.customer?.email || '')
    }, [loading, setEmail]);
    
    return (
        <>
            <STitledSection style={{ marginTop: "5rem" }} name="newsletter" gridArea={gridArea} > 
                <SSubscribe subscribed={isSubscribed}  gridArea={gridArea}>
                    <Form initialState={formState} onSubmit={(state) => mutateSubscription({
                        variables: { input: {
                            email: (state as any).email.value || state.email
                        }}
                    })} >
                        <>
                            <div>
                                <Input initialValue={defaultAddress} name="email" type="email" placeholder="Your Email Address" />
                                
                                <ButtonMain 
                                    disable={isSubscribed} 
                                    loading={subscribeLoading} 
                                    icon={faEnvelope}
                                    id="subscribe"
                                    type="submit"
                                >
                                    {isSubscribed ? <FontAwesomeIcon icon={faCheck} /> : "Subscribe"}
                                </ButtonMain>
                            </div>

                            <div>
                                <Input name="terms" type="checkbox">
                                    <span>
                                        I accept the <Link href="#">terms and conditions.</Link>
                                    </span>
                                </Input>
                            </div>
                            
                        </>
                    </Form>

                    <Title background='white' name="subscribe" description={SUBSCRIBE_TEXT} />
                </SSubscribe>
            </STitledSection>
        </>
    )
}

export default Subscribe
