import Carousel from "components/Carousel";
import { SProductSlider } from "components/styled/ProductSlider";
import Title from "components/Title";
import { ProductFlatFragmentFragment } from "Graphql/generated/graphql";
import { useFavorite } from "hooks/useFavorite.hook";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Props {
  gridArea?: string
  size?: number
  title?: string
  products: ProductFlatFragmentFragment[]
  name: string
}

const perPage = 6;

function ProductSlider({ gridArea, size = 15, title, products: propsProducts, name }: Props) {
  const [{ items: favoriteItems }, setFavoriteItems]  = useFavorite();
  const [products, setProducts]                       = useState<ProductFlatFragmentFragment[] | number[]>(() => new Array(6).fill(0));

  useEffect(() => {
      setProducts(propsProducts);
  }, [propsProducts]);

  return (
    <SProductSlider gridArea={gridArea}>
      <Title
        name={name}
        description={title || `products`}
        style={{ marginBottom: "2rem" }}
      />

      <Carousel
        gap={1.5}
        perPage={perPage}
        slidesCount={products.length || size}
        height="20rem"
        navigation="outside"
        isExtended={true} 
      >
        <>
          {products.map((product, index) => {
            return (
              <Card
                key={index}
                product={product}
                isFavorited={
                  favoriteItems &&
                  !!favoriteItems.find(({ id }) => id == product?.id)
                }
                skeletonLoading={!product}
                setFavoriteItems={setFavoriteItems}
              />
            );
          })}
        </>
      </Carousel>
    </SProductSlider>
  );
}

export default ProductSlider;
