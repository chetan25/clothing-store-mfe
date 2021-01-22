import React from 'react';
import { ProductItem } from '../../../homeApp/src/types';
import { CollectionPreview, Title, Preview } from './preview-collection.style';
import CollectionItem from '../collection-item/collection-item';

interface IProps  {
    title: string;
    routeName: string;
    items: ProductItem[];
}

const PreviewCollection = (props: IProps) => {
    const { title, items } = props;

    const navigateTo = () => {
        // history.push(`${match.path}/${routeName}`);
    };

    return (
       <CollectionPreview>
           <Title onClick={navigateTo}>{title.toUpperCase()}</Title>
           <Preview>
               {
                   items.filter((item, index) => index < 4)
                       .map(item => {
                          return (
                              <CollectionItem  key={item.id} item={item}/>
                          );
                       })
               }
           </Preview>
       </CollectionPreview>
   );
};

export default PreviewCollection;