import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useSetRecoilState } from 'recoil';
import { fetchCollectionAsync } from '../../fetchData';
import { ProductTypeData, ProductItemsData, ProductTypes } from '../../types';
import { ProductsData } from '../../global-atoms';
import { Route } from 'react-router-dom';
import Spinner from '../../spinner/spinner';

const CollectionOverview = lazy(() => import("ProductApp/CollectionOverview"));
const Collection = lazy(() => import("ProductApp/Collection"));

const ShopPage = ({match}: {match: {path: string}}) => {
    console.log(match, 'match');
    const [isLoading, setIsLoading] = useState(true);
    const setProductsData = useSetRecoilState<ProductTypeData | Record<any, any>>(ProductsData);
    useEffect(() => {
        const load = async() => {
           const data:ProductTypeData = await fetchCollectionAsync() || {} as ProductTypeData;
           const formattedData: ProductItemsData[] = Object.keys(data).map(key => data[key as ProductTypes]);
           setProductsData(formattedData);
           console.log(formattedData);
           setIsLoading(false);
        };
        load();
    });
  
    return (
        <div className='shop-page'>
            {
                isLoading ? <Spinner /> : 
                <Suspense fallback={<Spinner />}>
                  <Route exact path={`${match.path}`} component={CollectionOverview}/>
                  <Route path={`${match.path}/:collectionId`} component={Collection}/>
               </Suspense>
            }
        </div>
    );
  };

  export default ShopPage;