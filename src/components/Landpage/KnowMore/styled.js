import styled from 'styled-components'

export const KnowContent = styled.div.attrs({
})`
    padding: 108px 0 96px;
    background: transparent;

    @media(max-width: 767px){
        padding: 76px 0 64px;
    }
`;

export const MoreTitle = styled.div.attrs({
})`
    font-size: 58px;
    line-height: 1.02;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: var(--lp-heading);
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    text-wrap: balance;

    @media(max-width: 767px){
        font-size: 40px;
    }
`;

export const MoreText = styled.div.attrs({
})`
    color: #4f637b;
    font-size: 22px;
    line-height: 1.56;
    max-width: 1040px;
    margin-top: 18px;

    @media(max-width: 767px){
        font-size: 18px;
    }
`;

export const KnowTimeline = styled.div.attrs({
})`
    margin-top: 34px;

    @media(max-width: 991px){
        margin-top: 28px;
    }
`;
