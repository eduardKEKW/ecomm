import '../styles/_globals.scss';

import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';
import Notification from '../components/Notification';
import { useApollo } from '../apollo-client';
import { GlobalProvider } from '../Providers/GlobalProvider.provider';

import { ThemeProvider } from 'styled-components';
import { theme } from 'components/styled/Theme';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from 'components/helpers/Loading';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps}) {
  const apolloClient = useApollo(pageProps.apolloCache);
  
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <PageLoader>
            <Component.Layout title={pageProps?.title}> 
              <Component {...pageProps} />
            </Component.Layout> 
          </PageLoader>
        </GlobalProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

const PageLoader = ({ children }): JSX.Element => {
  const [pageChanging, setPageChanging] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const onRouteChangeStart = (_, { shallow }) => {
      if(! router.isFallback) {
        setPageChanging(! shallow)
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
      }
    }

    const onRouteChangeEnd = (_, { shallow }) => {
      if(! router.isFallback) {
        setPageChanging(false)
        document.body.style.overflow = 'visible';
      } 
    }

    router.events.on('routeChangeStart', onRouteChangeStart)
    router.events.on('routeChangeComplete', onRouteChangeEnd)

    return () => {  
      router.events.off('routeChangeStart', onRouteChangeStart)
      router.events.off('routeChangeComplete', onRouteChangeEnd)
    }
  }, [router.isFallback, router.events])

  return(
      <>
        <Loading loading={pageChanging} pulsating={true} size="big">
          {
            pageChanging ? <div style={{ height: '100vh' }}></div> : children
          }
        </Loading>
      </>
    )
}

export interface DefaultLayoutProps {
  children: JSX.Element
  title: string
}
export const DefaultLayout = ({ children, title }: DefaultLayoutProps) => {
  return (
    <>
      <PageHead title={title} />
      <Header />
      <>
        { children }
      </>
      <Notification />
      <Footer />
    </>
  )
}

export const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default MyApp
