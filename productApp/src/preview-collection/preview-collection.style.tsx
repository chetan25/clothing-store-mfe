import styled from 'styled-components';

export const CollectionPreview  = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
 
export const Preview = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;

    @media (min-width: 1025px) {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
`;


export const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    text-decoration: underline;
    padding-left: 5px;

    @media (min-width: 1025px) {
        font-size: 28px;
        margin-bottom: 25px;
        cursor: pointer;
        text-decoration: underline;
    }
`;

  
  