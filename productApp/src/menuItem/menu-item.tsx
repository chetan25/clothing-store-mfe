import React from "react";
import { useHistory } from 'react-router-dom';
import { MenuItemWrapper, BackgroundImage, Content, Title, SubTitle } from './menu-item.style';

interface IProps {
    title: string;
    subtitle?: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

const MenuItem = (props: IProps) => {
    const history = useHistory();
    const {
        title,
        subtitle= 'Shop Now',
        imageUrl,
        size,
        linkUrl,
    } = props;
    console.log(linkUrl, size);

    const navigateTo = () => {
        history.push(`${linkUrl}`);
    };

    return (
        <MenuItemWrapper className={size} onClick={navigateTo}>
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