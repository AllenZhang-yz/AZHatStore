import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';
import {
  CollectionTileWrapper,
  CollectionTileContent,
  Title,
  Description,
} from './styles';

const CollectionTile = ({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) => {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <CollectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>Shop now</StyledLink>
        </div>
      </CollectionTileContent>
    </CollectionTileWrapper>
  );
};

export { CollectionTile };
