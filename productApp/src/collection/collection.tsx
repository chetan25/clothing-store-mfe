import React, { lazy } from "react";
import {CollectionPage, Items} from './collection.style';
import { RouteComponentProps } from "react-router";
import CollectionItem from "../collection-item/collection-item";
import { useRecoilValue } from 'recoil';
import { ProductsData } from 'Shell/Atoms';
const Spinner = lazy(() => import("Shell/Spinner"));

interface IProps extends RouteComponentProps {
    name?: string;
}

export interface IItem {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export interface ICollectionItem {
    id: string;
    routeName: string;
    title: string;
    items: IItem[];
}
export interface IShop {
    hats: ICollectionItem;
    jackets: ICollectionItem;
    men: ICollectionItem;
    women: ICollectionItem;
    sneakers: ICollectionItem;
}


const Collection = (props: IProps) => {
    console.log(props, 'collection');
    const params: any = props.match.params;
    const collectionId: string = params['collectionId'];
    const collectionItems: IShop = useRecoilValue(ProductsData);
    console.log(collectionItems, 'collectionItems');
    // @ts-ignore
    const collectionItem = collectionItems.find(item => item.routeName === collectionId);
    console.log(collectionItem, 'collectionItem');
    if (!collectionItem) {
        return (
            <div className='collection-page'>
                <Spinner/>
            </div>
        )
    }
    const {title, items } = collectionItem;

    return (
        <CollectionPage>
            <h2 className='title'>{ title }</h2>
            <Items>
                {
                    items.map((item: any) => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </Items>
        </CollectionPage>
    );
};

export default Collection;