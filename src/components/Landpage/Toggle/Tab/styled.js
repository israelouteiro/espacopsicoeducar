import styled from 'styled-components'

export const CentredRow = styled.div.attrs({
})`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
`;

export const TabsContainer = styled.div.attrs({
})`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    width: 100%;
    margin-bottom: 30px;

    @media(max-width: 767px){
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

export const TabItem = styled.div.attrs({
})`
    width: 100%;
    min-height: 84px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 29px;
    letter-spacing: -0.02em;
    font-weight: 600;
    line-height: 1.1;
    text-align: left;
    color: #5f7085;
    cursor: pointer;
    padding: 8px 0;
    border-bottom: 2px solid rgba(35, 78, 131, 0.16);
    transition: all .2s ease;

    ${
        props => props.active ? `
            color: var(--lp-heading);
            border-bottom-color: rgba(63, 121, 230, 0.9);
        ` : ``
    }

    &:hover{
        color: var(--lp-heading);
    }

    @media(max-width: 767px){
        min-height: 58px;
        font-size: 24px;
    }
`;
