import React from 'react';
import { CollectionOverviewWrapper } from './collection-overview.style';
import { useRecoilValue } from 'recoil';
import { ProductsData } from "Shell/Atoms";
import { ProductItemsData } from '../interfaces';
import PreviewCollection from '../preview-collection/preview-collection';

const CollectionOverview = () => {
    const collections: ProductItemsData[] = useRecoilValue(ProductsData);
 
    return (
      <CollectionOverviewWrapper>
          {
              collections ?
                  collections.map(({id, ...collectionProps}) => {
                      return (
                          <div key={id}>
                              <PreviewCollection {...collectionProps} />
                          </div>
                      );
                  }) : <h4>loading</h4>
          }
      </CollectionOverviewWrapper>
    );
};

export default CollectionOverview;