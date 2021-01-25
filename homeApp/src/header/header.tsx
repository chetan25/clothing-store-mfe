import React from "react";
import { HeaderWrapper, LogoContaiiner, LogoImage, NavOptions, LinkOptions } from './header.style';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon.png';
import CartIcon from "../cart-icon/cart-icon";
import { ShowCartDropdown } from '../global-atoms';
import { useRecoilValue } from 'recoil';
import CartDropDown from "../cart-dropdown/cart-dropdown";

const Header = () => {
    const dropdownState = useRecoilValue(ShowCartDropdown);

    return (
        <HeaderWrapper>
            <LogoContaiiner>
                <Link to='/' className='logo-container'>
                  <LogoImage src={Logo} alt="Logo" />
                </Link>
            </LogoContaiiner>
            <NavOptions>
                <LinkOptions><Link to='/shop' >Shop</Link></LinkOptions>
                {/* <LinkOptions> <Link to='/signIn'>SignIn</Link></LinkOptions> */}
                <CartIcon/>
            </NavOptions>
            {
                !dropdownState ? null : <CartDropDown/>
            }
        </HeaderWrapper>
    );
};

export default Header;