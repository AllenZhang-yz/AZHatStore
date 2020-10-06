import React from 'react';
import { Checkbox } from '../../Checkbox';
import { navigate, useLocation } from '@reach/router';
import { CategoryFilterItemWrapper } from './styles';
import queryString from 'query-string';

const CategoryFilterItem = ({ title, id }) => {
  const { search } = useLocation();
  const qs = queryString.parse(search);
  const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
  const checked = collectionIds?.find(cId => cId === id);
  const searchTerm = qs.s;

  const onClick = () => {
    // let newIds = collectionIds.map(cId => encodeURIComponent(cId));
    let newIds = [];
    if (checked) {
      newIds = collectionIds
        .filter(cId => cId !== id)
        .map(cId => encodeURIComponent(cId));
    } else {
      collectionIds.push(id);
      newIds = collectionIds.map(cId => encodeURIComponent(cId));
    }
    if (newIds.length && !searchTerm) {
      navigate(`/all-products?c=${newIds.join(',')}`);
    } else if (newIds.length && !!searchTerm) {
      navigate(
        `all-products?c=${newIds.join(',')}&s=${encodeURIComponent(searchTerm)}`
      );
    } else if (!newIds.length && !!searchTerm) {
      navigate(`all-products?s=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/all-products');
    }
  };
  return (
    <CategoryFilterItemWrapper onClick={() => onClick(id)}>
      <Checkbox checked={checked} />
      <div>{title}</div>
    </CategoryFilterItemWrapper>
  );
};

export { CategoryFilterItem };
