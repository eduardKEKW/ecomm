import { GetStaticProps } from 'next'
import Link from 'next/link'
import { PageHead } from './_app'

const Error = () => {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}

Error.Layout = ({ children, title }) => {
  return (
    <>
      <PageHead title={title} />
      <>
        { children }
      </>
    </>
  )
}

export const getStaticProps: GetStaticProps  = async (context) => {
  return {
    props: {
      title: 'Not Found'
    },
  }
}

export default Error;
