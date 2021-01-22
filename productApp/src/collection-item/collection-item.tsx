import React from 'react';
import { CollectionIitem, ImageWrapper, CollectionFooter } from './collection-item.style';
import { ProductItem } from '../../../homeApp/src/types';
import Button from '../button/button';
import { useSetRecoilState } from 'recoil';
import { AddToCart } from "Shell/Atoms";

interface IProps {
    item: ProductItem;
}

const CollectionItem = (props: IProps) => {
    const { name, imageUrl, price } = props.item;
    const setCartItems = useSetRecoilState<any>(AddToCart);
    
    // const uid = useSelector(userIdSelector);
    // const dispatch = useDispatch();
    const addItem = () => {
        setCartItems(props.item);
    };

    return (
        <CollectionIitem>
            <ImageWrapper
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <CollectionFooter>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </CollectionFooter>
            <Button inverted={true} onClick={addItem}>Add to cart</Button>
        </CollectionIitem>
    )
};

export default CollectionItem;
