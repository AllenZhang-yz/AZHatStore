import React from 'react';
import Img from 'gatsby-image';
import { ProductTileWrapper, Description, Title, Price } from './styles';
import { StyledLink } from '../StyledLink';

const ProductTile = ({ title, imageFluid, description, minPrice, handle }) => {
  return (
    <ProductTileWrapper>
      <Img fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>from ${parseFloat(minPrice).toFixed(2)}</Price>
      <StyledLink to={`/products/${handle}`}>View product</StyledLink>
    </ProductTileWrapper>
  );
};

export { ProductTile };
