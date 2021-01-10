import styled from 'styled-components';

export const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    //desktop
    @media (min-width: 1025px) {
        padding: 20px 80px;
    }
`;

export const DirectoryMenu = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;

    //desktop
    @media (min-width: 1025px) {
        flex-direction: row;
    }
`;