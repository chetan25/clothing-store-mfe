import styled from 'styled-components';

export const CartDropdown = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 6px;
    border: 1px solid black;
    background-color: white;
    top: 50px;
    right: 22px;
    z-index: 5;

    button {
      margin-top: auto;
    }
  
    .empty-message {
      font-size: 18px;
      margin: 50px auto;
    }
  }
`

export const CartItemsWrapper = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;