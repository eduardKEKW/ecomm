import { initializeApollo } from '../apollo-client';
import Carousel from 'components/Carousel';
import Image from 'next/image';
import React, { FC } from 'react';
import Benefits from 'components/Benefits';
import { BANNERS } from 'helpers/local';
import ProductSlider from 'components/Product/CategorySlider';
import Subscribe from 'components/Subscribe';
import { GetStaticProps } from 'next';
import { Grid, SSliders } from 'components/styled/Page/Home';
import { getApiImage } from 'helpers/helpers';
import { initialCategoriesLoad } from 'components/Layouts/Header/Categories/Categories';
import { DefaultLayout } from './_app';
import { CategoriesDocument, CategoriesQuery, CategoriesQueryVariables, useVelocityMetaDataQuery, VelocityMetaDataDocument, VelocityMetaDataQuery, VelocityMetaDataQueryVariables } from 'Graphql/generated/graphql';
import  banner1 from 'public/banner1.png';
import  banner2 from 'public/banner2.png';
import  banner3 from 'public/banner3.png';

const localBanners = [
  banner1,
  banner2,
  banner3
]

const Home: FC & { Layout: FC<{}>; } = function ({  }) {
  const { data }= useVelocityMetaDataQuery();
console.log(getApiImage({ url: data?.metaData?.advertisement[1] }));
  return (  
      <Grid>
        <Carousel navigationInside={true} gridArea="main-carousel" slidesCount={BANNERS.length} height="32rem">
          <>
            {
              data?.metaData?.advertisement?.map((src, index) => {
                return (
                  <div key={index} style={{ height: "100%", width: "100%" }}>
                      <Image
                          src={localBanners[index]}
                          layout="fill"
                          objectFit="cover"
                      />
                  </div>
                )
              })
            }
          </>
        </Carousel>

        <Benefits gridArea="benefits" />

        <SSliders gridArea="slider" >
            {
              data?.metaData?.homePageCategories?.map((category, index) => {
                return (
                  <ProductSlider category={category} key={index} />
                )
              })
            }
        </SSliders>

        <Subscribe gridArea="subscribe" />
      </Grid> 
  )
}

Home.Layout = DefaultLayout;

export default Home;

export const getStaticProps: GetStaticProps  = async (context) => {
  const apolloClient = initializeApollo();

  const [{ data }, categories] = await Promise.all([
    apolloClient.query<VelocityMetaDataQuery, VelocityMetaDataQueryVariables>({
      query: VelocityMetaDataDocument,
    }),
    apolloClient.query<CategoriesQuery, CategoriesQueryVariables>({
      query: CategoriesDocument,
      ...initialCategoriesLoad
    })
  ]);

  return {
    props: {
      apolloCache: apolloClient.cache.extract(),
      title: 'Home'
    },
 };
}