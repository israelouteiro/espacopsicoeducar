import styled from 'styled-components'

export const MoreInfosItemContent = styled.div.attrs({
})`
    margin-top: 74px;
    height: calc(100% - 74px);
    position: relative;

    &::before{
        content: '${props => `0${props.variant + 1}`}';
        position: absolute;
        top: -66px;
        left: 0;
        font-family: 'Sora', 'Nunito Sans', sans-serif;
        font-size: 78px;
        line-height: .92;
        letter-spacing: -0.03em;
        color: rgba(63, 121, 230, 0.28);
        font-weight: 700;
    }

    ${
        props => props.secondary ? `
            transform: translateY(24px);

            @media(max-width: 767px){
                transform: none;
            }
        ` : ``
    }
`;

export const MoreInfosImage = styled.div.attrs({
})`
    position: relative;
    overflow: hidden;
    height: 304px;
    margin-top: 26px;
    background:
        linear-gradient(120deg, rgba(8, 24, 47, 0.5), rgba(14, 33, 59, 0.28)),
        url(${props => props.image}) no-repeat center center / cover;
    clip-path: polygon(0 0, 100% 0, 100% 88%, 86% 100%, 0 100%);

    &::before{
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(8, 20, 40, 0.28) 0%, rgba(8, 20, 40, 0.08) 44%, rgba(8, 20, 40, 0.5) 100%);
        pointer-events: none;
    }

    @media(max-width: 767px){
        margin-top: 20px;
    }
`;

export const MoreInfosItemText = styled.div.attrs({
})`
    font-size: 24px;
    line-height: 1.35;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--lp-heading);
    margin: 20px 0 8px;

    @media(max-width: 767px){
        font-size: 20px;
    }
`;
