import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonMain from "components/buttons/Main";
import Form, { IFormState } from "components/Form";
import Input from "components/input/Input.main";
import { Columns, Container, Layout, SFormError } from "components/styled/Layouts/Pages/Login";
import Title from "components/Title";
import { GetStaticProps } from "next";
import Link from "next/link";
import { FC, useEffect } from "react";
import { DefaultLayoutProps, PageHead } from "./_app";
import Image from "next/image";
import logo from "/public/logo6.webp";
import { MeDocument, useCustomerLoginMutation, useMeQuery } from "Graphql/generated/graphql";
import { useRouter } from "next/router";
import { LOCAL_ACCESS_TOKEN_NAME } from "helpers/local";
import Loading from "components/helpers/Loading";

const formState: IFormState = {
    email: { value: '', validation: ['required'] },
    password: { value: '' , validation: ['required'] }
};

const Login: FC & { Layout: FC<DefaultLayoutProps>; }  = function ( ) {
    const { data: userData, loading: userLoading } = useMeQuery();
    const router                                    = useRouter();
    const [loginMutation, { loading, error, data }] = useCustomerLoginMutation({
        refetchQueries: [MeDocument],
        onError: (err) => console.error(err),
        onCompleted: (data) => {
            if(data?.customerLogin?.success) {
                localStorage.setItem(LOCAL_ACCESS_TOKEN_NAME, data.customerLogin.accessToken)
                router.push("/");
            }
        },
    });

    useEffect(() => {
        if(! userLoading && userData?.accountInfo?.customer?.id) {
            router.push("/");
        }
    }, [userLoading]);

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

                        <Title name="Login here!" />

                        <Form initialState={formState} onSubmit={(state) => {
                            loginMutation({
                                variables: {
                                    input: {
                                        email: state.email.value,
                                        password: state.password.value,
                                    }
                                }
                            })
                        }} >
                            <>
                                <Input name="email" type="email" placeholder="Your Email Address" />
                                
                                <Input name="password" type="password" placeholder="Password" />

                                <ButtonMain 
                                    id="subscribe"
                                    type="submit"
                                    style={{ width: "100%" }}
                                >
                                    <>
                                        Continue <FontAwesomeIcon icon={faUser} />
                                    </>
                                </ButtonMain>

                                <p>Don`t have an account ? <Link href="/register">Sign Up Here.</Link></p>

                                <SFormError show={!! error?.graphQLErrors}>
                                    {
                                        error?.graphQLErrors.map(({ extensions }) => {
                                            return Object.values(extensions?.validation).map((errArr) => {
                                                return errArr[0];
                                            });
                                        })
                                    }
                                </SFormError>
                            </>
                        </Form>
                    </>
                </Loading>
            </Container>
        </Layout>
    )
}

Login.Layout = ({ children, title }) => (
    <>
     <PageHead title={title} />
     { children }
    </>
);


export default Login;


export const getStaticProps: GetStaticProps  = async (context) => {
  
    return {
      props: {
        title: 'New user'
      },
   };
  }