import React from "react";
import { MenuItemWrapper, BackgroundImage, Content, Title, SubTitle } from './menu-item.style';

interface IProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

const MenuItem = (props: IProps) => {
    const {
        title,
        subtitle= 'Shop Now',
        imageUrl,
        size,
        linkUrl,
    } = props;
    console.log(linkUrl, size);

    return (
        <MenuItemWrapper className={size}>
            <BackgroundImage
                className='background-image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <Content className='content'>
                <Title className='title'>{title.toUpperCase()}</Title>
                <SubTitle className='subtitle'>{subtitle}</SubTitle>
            </Content>
        </MenuItemWrapper>
    );
};

export default MenuItem;