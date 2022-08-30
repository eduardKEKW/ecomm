import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonMain from "components/buttons/Main";
import Form from "components/Form";
import Input from "components/input/Input.main";
import { Columns, Container, Layout, SFormError } from "components/styled/Layouts/Pages/Login";
import Title from "components/Title";
import { GetStaticProps } from "next";
import Link from "next/link";
import { FC, useState } from "react";
import { DefaultLayoutProps, PageHead } from "./_app";
import Image from "next/image";
import logo from "/public/logo6.webp";
import { MeDocument, useCustomerLoginMutation, useCustomerRegisterMutation, useMeQuery } from "Graphql/generated/graphql";
import { useRouter } from "next/router";
import { LOCAL_ACCESS_TOKEN_NAME } from "helpers/local";
import Loading from "components/helpers/Loading";

const formState = {
    firstName:  { value: '', validation: ['required'] },
    lastName:   { value: '', validation: ['required'] },
    email:      { value: '', validation: ['required'] },
    password:   { value: '' , validation: ['required'] },
    terms:      { value: false, validation: ['required'] },
    passwordConfirmation: { value: '' , validation: ['required'] },
};

const Register: FC & { Layout: FC<DefaultLayoutProps>; }  = function ( ) {
    const [loginFormState, setLoginFormState]                           = useState<{ email: string, password: string }>();
    const router                                                        = useRouter();
    const [loginMutation, { loading: loginLoading }]                    = useCustomerLoginMutation({
        refetchQueries: [MeDocument],
        onError: (err) => console.error(err),
        onCompleted: (data) => {
            if(data?.customerLogin?.success) {
                localStorage.setItem(LOCAL_ACCESS_TOKEN_NAME, data.customerLogin.accessToken)
                router.push("/");
            }
        },
    });
    const [registerMutation, { loading, error }]                        = useCustomerRegisterMutation({
        refetchQueries: [MeDocument],
        onError: (err) => console.error(err),
        onCompleted: (data) => {
            if(data?.customerRegister?.success) {
                loginMutation({
                    variables: {
                        input: loginFormState
                    }
                })
            }
        },
    });

    return (
        <Layout>
            <Container>
                <Loading loading={loading}>
                    <>
                        <Image
                            src={logo}
                            alt="logo"
                            width="150px"
                            height="50px"
                        />

                        <Title name="No Account? No Worries!" />

                        <Form initialState={formState} onSubmit={(state) => {
                            registerMutation({
                                variables: {
                                    input: {
                                        email: state.email.value,
                                        firstName: state.firstName.value,
                                        lastName: state.lastName.value,
                                        password: state.password.value,
                                        passwordConfirmation: state.passwordConfirmation.value
                                    }
                                }
                            })

                            setLoginFormState({
                                email: state.email.value,
                                password: state.password.value,
                            })
                        }} >
                            <>
                                <Input name="firstName" type="text" placeholder="Your First Name" />

                                <Input name="lastName" type="text" placeholder="Your Last Name" />

                                <Input name="email" type="email" placeholder="Your Email Address" />
                                
                                <Input name="password" type="password" placeholder="Password" />

                                <Input name="passwordConfirmation" type="password" placeholder="Password" />

                                <Columns>
                                    <Input name="terms" type="checkbox" />
                                    <span>
                                        I accept the <Link href="#">terms and conditions.</Link>
                                    </span>
                                </Columns>    

                                <ButtonMain 
                                    id="subscribe"
                                    type="submit"
                                    style={{ width: "100%" }}
                                    loading={loading || loginLoading}
                                >
                                    <>
                                        Register here <FontAwesomeIcon icon={faUser} />
                                    </>
                                </ButtonMain>

                                <p>Don`t have an account ? <Link href="/register">Sign Up Here.</Link></p>

                                <SFormError show={!! error?.message}>
                                    {error?.message}
                                </SFormError>
                            </>
                        </Form>
                    </>
                </Loading>
            </Container>
        </Layout>
    )
}

Register.Layout = ({ children, title }) => (
    <>
     <PageHead title={title} />
     { children }
    </>
);

export default Register;

export const getStaticProps: GetStaticProps  = async (context) => {
    return {
      props: {
        title: 'New user'
      },
   };
}