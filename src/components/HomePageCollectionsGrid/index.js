import React from 'react';
import { CollectionTile } from '../CollectionTile';
import { RemainingCollections } from './styles';

const HomePageCollectionsGrid = ({ collections }) => {
  const saleTile = collections.find(c => c.title === 'Sale');
  const remainingTiles = collections.filter(c => c.title !== 'Sale');
  console.log(saleTile);
  return (
    <div>
      {!!saleTile && (
        <CollectionTile
          sale
          destination={`/all-products?c=${encodeURIComponent(
            saleTile.shopifyId
          )}`}
          title={saleTile.title}
          description={saleTile.description}
          backgroundImage={saleTile.image.localFile.childImageSharp.fluid}
        />
      )}
      <RemainingCollections>
        {remainingTiles.map(collection => (
          <CollectionTile
            destination={`/all-products?c=${encodeURIComponent(
              collection.shopifyId
            )}`}
            key={collection.shopifyId}
            title={collection.title}
            description={collection.description}
            backgroundImage={collection.image.localFile.childImageSharp.fluid}
          />
        ))}
      </RemainingCollections>
    </div>
  );
};

export { HomePageCollectionsGrid };
