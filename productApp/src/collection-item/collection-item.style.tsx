import styled from 'styled-components';

export const CollectionIitem = styled.div`
  width: 48vw;
  height: 250px;
  @media (min-width: 1025px) {
    width: 22vw;
    height: 350px;
  }

  .custom-button {
      width: 100%;
      opacity: 0.7;
      position: relative;
      top: -74px;
      //position: absolute;
      display: none;
  }
  
  
  &:hover {
    .image {
      opacity: 0.8;
    }
  
    .custom-button {
        opacity: 0.85;
        display: flex;
      }
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 80%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    @media (min-width: 1025px) {
      height: 95%;
    }
`;

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    .name {
        width: 90%;
        margin-bottom: 15px;
    }

    .price {
        width: 10%;
    }
`;

// {
  

  
//     .collection-footer {

//   }
  
//   @media (min-width: 1025px) {
//     .collection-item {
//       width: 22vw;
//       height: 350px;
  
//       .image {
//         height: 95%;
//       }
//     }
  
//     .custom-button {
//       width: 100%;
//       top: -72px;
//     }
//   }