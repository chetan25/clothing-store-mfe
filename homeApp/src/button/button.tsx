import React from "react";
import {CustomButton } from './button.style';

interface IProps {
    type?: "button" | "submit" | "reset" | undefined;
    children: React.ReactNode;
    onClick?: () => void;
    inverted?: boolean;
}
const Button = (props: IProps) => {
    const { type = 'button', children, onClick, inverted } = props;

    return (
      <CustomButton
          className={`${inverted ? 'inverted' : ''} custom-button`}
          type={type}
          onClick={onClick}
      >
          {children}
      </CustomButton>
    );
};

export default Button;