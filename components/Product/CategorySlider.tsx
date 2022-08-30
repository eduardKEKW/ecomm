import Carousel from "components/Carousel";
import { SProductSlider } from "components/styled/ProductSlider";
import Title from "components/Title";
import { CategoryQuery, ProductFlatFragmentFragment } from "Graphql/generated/graphql";
import { useFavorite } from "hooks/useFavorite.hook";
import useProducts from "hooks/useProducts.hook";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Props {
  gridArea?: string;
  size?: number;
  title?: string;
  category: CategoryQuery["category"];
}

const perPage = 6;

function CategorySlider({ gridArea, size = 15, title, category }: Props) {
  const [{ items: favoriteItems }, setFavoriteItems]  = useFavorite();
  const [products, setProducts]                       = useState<ProductFlatFragmentFragment[] | number[]>(() => new Array(6).fill(0));
  const [getProducts, { loading, data }]              = useProducts({
      variables: {
        input: {
          categoryId: +category.id,
        },
      },
  });

  useEffect(() => {
    if (!loading && data?.getProductListing?.data) {
      setProducts(data.getProductListing.data.map((p) => p.productFlat));
    } else {
      setProducts(new Array(6).fill(0));
    }
  }, [loading, data]);

  return (
    <SProductSlider gridArea={gridArea}>
      <Title
        name={category.name}
        description={title || `category`}
        href={category.slug}
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

export default CategorySlider;
