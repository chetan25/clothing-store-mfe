import styled from 'styled-components';

export const CollectionPage  = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 38px;
        margin: 0 auto 30px;
    }
`;

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
        margin-bottom: 30px;
    }

    @media (min-width: 1025px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 4px;
    }
`;