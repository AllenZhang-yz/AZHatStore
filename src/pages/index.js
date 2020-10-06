import React, { useContext } from 'react';
import {
  Layout,
  HomePageCollectionsGrid,
  FeaturedProducts,
  SEO,
} from 'components';
import ProductContext from 'context/ProductContext';

const IndexPage = () => {
  const { collections } = useContext(ProductContext);
  return (
    <Layout>
      <SEO title="Home Page" description="The ZAHat store home page" />
      <HomePageCollectionsGrid
        collections={collections.filter(c => c.title !== 'Featured Hats')}
      />
      {!!collections.find(c => c.title === 'Featured Hats') && (
        <FeaturedProducts />
      )}
    </Layout>
  );
};

export default IndexPage;
