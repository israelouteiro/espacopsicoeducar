import styled from 'styled-components'

export const MoreInfosContainer = styled.div.attrs({
})`
    padding: 108px 0 94px;
    margin: 0;
    position: relative;
    overflow: hidden;
    background: transparent;

    @media(max-width: 767px){
        margin: 0;
        padding: 76px 0 62px;
    }
`;

export const MoreInfosDecoration = styled.img.attrs({
    src:'/icons/circle-1.svg'
})`
    width: 500px;
    position: absolute;
    top: -160px;
    left: -260px;
    opacity: .06;
    pointer-events: none;
`;

export const MoreInfosTitle = styled.div.attrs({
})`
    color: var(--lp-heading);
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 56px;
    line-height: 1.03;
    letter-spacing: -0.02em;
    font-weight: 700;

    @media(max-width: 767px){
        font-size: 38px;
    }
`;

export const MoreInfosText = styled.div.attrs({
})`
    color: #4f637b;
    font-size: 21px;
    line-height: 1.55;
    max-width: 980px;
    margin-top: 18px;

    @media(max-width: 767px){
        font-size: 18px;
    }
`;
