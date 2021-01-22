import React, { useEffect, useState, lazy } from 'react';
import { useSetRecoilState } from 'recoil';
import { fetchCollectionAsync } from '../../fetchData';
import { ProductTypeData, ProductItemsData, ProductTypes } from '../../types';
import { ProductsData } from '../../global-atoms';


const CollectionOverview = lazy(() => import("ProductApp/CollectionOverview"));

const ShopPage = ({match}: {match: {path: string}}) => {
    console.log(match, 'match');
    const [isLoading, setIsLoading] = useState(true);
    const setProductsData = useSetRecoilState<ProductTypeData | Record<any, any>>(ProductsData);
    useEffect(() => {
        const load = async() => {
           const data:ProductTypeData = await fetchCollectionAsync() || {} as ProductTypeData;
           console.log(data);
           const formattedData: ProductItemsData[] = Object.keys(data).map(key => data[key as ProductTypes]);
           setProductsData(formattedData);
           setIsLoading(false);
        };
        load();
    });
  
    return (
        <div className='shop-page'>
            {
                isLoading ? <h2>loading</h2> : <CollectionOverview />
            }
        </div>
    );
  };

  export default ShopPage;