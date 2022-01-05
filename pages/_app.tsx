import '../styles/_globals.scss';

import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import Notification from '../components/Notification';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../apollo-client';
import { GlobalProvider } from '../Providers/GlobalProvider.provider';

import { ThemeProvider } from 'styled-components';
import { theme } from 'components/styled/Theme';

import Head from 'next/head';

function MyApp({ Component, pageProps: { apolloCache, ...props } }) {
  const apolloClient = useApollo(apolloCache);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <DefaultLayout title={props.title}> 
            <Component {...props} />
          </DefaultLayout>
        </GlobalProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

const DefaultLayout = ({ children, title }) => {

  return (
    <>
      <PageHead title={title} />
      <Header />
      <>
        { children }
      </>
      <Footer />
      <Notification />
    </>
  )
}

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default MyApp
