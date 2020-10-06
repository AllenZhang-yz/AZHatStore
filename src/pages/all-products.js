import React, { useContext } from 'react';
import styled from 'styled-components';
import { Layout, Filters, ProductsGrid } from 'components';
import queryString from 'query-string';
import { useLocation } from '@reach/router';
import ProductContext from 'context/ProductContext';

const Content = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
`;

const AllProducts = () => {
  const { products, collections } = useContext(ProductContext);
  const collectionProductMap = {};
  const { search } = useLocation();
  const qs = queryString.parse(search);
  console.log(qs);
  const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const searchTerm = qs.s;
  const selectedCollectionIdsMap = {};
  selectedCollectionIds.forEach(collectionId => {
    selectedCollectionIdsMap[collectionId] = true;
  });

  if (collections) {
    collections.forEach(collection => {
      collectionProductMap[collection.shopifyId] = {};
      collection.products.forEach(product => {
        collectionProductMap[collection.shopifyId][product.shopifyId] = true;
      });
    });
  }

  const filteredProducts = products
    .filter(product => {
      if (Object.keys(selectedCollectionIdsMap).length) {
        for (let key in selectedCollectionIdsMap) {
          if (collectionProductMap[key]?.[product.shopifyId]) {
            return true;
          }
        }
        return false;
      }
      return true;
    })
    .filter(product => {
      if (searchTerm) {
        return (
          product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        );
      }
      return true;
    });
  return (
    <Layout>
      {!!searchTerm && (
        <h3>
          Search term: <strong>'{searchTerm}'</strong>
        </h3>
      )}
      <h4>{filteredProducts.length} products</h4>
      <Content>
        <Filters />
        <div>
          <ProductsGrid products={filteredProducts} />
        </div>
      </Content>
    </Layout>
  );
};

export default AllProducts;
