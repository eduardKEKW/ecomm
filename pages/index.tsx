import { initializeApollo } from '../apollo-client';
import Carousel from 'components/Carousel';
import Image from 'next/image';
import React from 'react';
import Benefits from 'components/Benefits';
import { BANNERS } from 'helpers/local';
import ProductSlider from 'components/Product/ProductSlider';
import Subscribe from 'components/Subscribe';
import { GetStaticProps } from 'next';
import { Grid } from 'components/styled/Page/Home';

export default function Home({  }) {

  return (
      <Grid>
        
        <Carousel gridArea="main-carousel" slidesCount={BANNERS.length} height="32rem">
          <>
            { 
              BANNERS.map(({ img, alt, blur }, index) => {
                return (
                  <div key={index} style={{ height: "100%" }}>
                      <Image
                          src={img}
                          alt={alt}
                          width={1480}
                          height={513}
                          placeholder="blur"
                          blurDataURL={blur}
                          objectFit="cover"
                      />
                  </div>
                )
              })
            }
          </>
        </Carousel>

        <Benefits gridArea="benefits" />

        <ProductSlider gridArea="slider-1" category="Home" />

        <ProductSlider gridArea="slider-2" category="Lighting" />

        <ProductSlider gridArea="slider-3" category="Health, Household & Personal Care" />
        
        <ProductSlider gridArea="slider-4" category="Garden" />

        <ProductSlider gridArea="slider-5" category="Beauty" />

        <Subscribe gridArea="subscribe" />

      </Grid> 
  )
}


export const getStaticProps: GetStaticProps  = async (context) => {
  const apolloClient = initializeApollo();

  return {
    props: {
      apolloCache: apolloClient.cache.extract(),
      title: 'Ecomm | Home'
    },
 };
}