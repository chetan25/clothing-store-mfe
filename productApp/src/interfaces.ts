export type ProductTypes = 'hats' |  'men' | 'sneakers' | 'jackets' | 'women';

export type ProductItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
}

export type ProductItemsData = {
    id: string;
    items: ProductItem[];
    routeName: string;
    title: string;
}

export type ProductTypeData = {
    [key in ProductTypes]: {
       id: string;
       items: ProductItem[];
       routeName: string;
       title: string;
    }
}
