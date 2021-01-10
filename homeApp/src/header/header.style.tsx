import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  position: sticky;
  background-color: white;
  top: 0px;
  border-bottom: 1px solid darkseagreen;
  z-index: 1000;
  opacity: 1;
`;

export const LogoContaiiner = styled.div`
  height: 100%;
  width: 17vw;
`;

export const LogoImage = styled.img`
  width:30%;
`;

export const NavOptions = styled.div`
  width: 74%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
`;

export const LinkOptions = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;


// @media (min-width: 1025px) {
//   .header {
//     margin-bottom: 25px;

//     .logo-container {
//       width: 5vw;
//     }
//     .options {
//       width: 50%;

//       .option {
//         padding: 10px 15px;
//         cursor: pointer;
//       }
//     }
//   }
// }