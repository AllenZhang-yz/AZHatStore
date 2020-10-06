import React, { useContext } from 'react';
import { ProductsGrid } from '../ProductsGrid';
import ProductContext from 'context/ProductContext';

const FeaturedProducts = () => {
  const { collections } = useContext(ProductContext);
  const featuredCollection = collections.find(c => c.title === 'Featured Hats');
  return (
    <section>
      <h1>Featured hats</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
};

export { FeaturedProducts };
