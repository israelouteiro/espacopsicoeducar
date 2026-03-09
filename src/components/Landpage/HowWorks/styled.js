import styled from 'styled-components'

export const HowWorksContainer = styled.div.attrs({
})`
    position: relative;
    padding: 112px 0 96px;

    @media(max-width: 767px){
        padding: 76px 0 64px;
    }
`;

export const HowWorksDecoration = styled.img.attrs({
    src:`/icons/circle-1.svg`
})`
    width: 640px;
    position: absolute;
    top: 0;
    left: -352px;
    opacity: .14;
    pointer-events: none;

    @media(max-width: 767px){
        width: 420px;
        left: -248px;
        top: -54px;
    }
`;

export const HowWorksTitleContent = styled.div.attrs({
})`
    padding: 0 0 54px;
    max-width: 1080px;

    @media(max-width: 767px){
        padding-bottom: 38px;
    }
`;

export const HowWorksTitle = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 62px;
    line-height: 1.02;
    letter-spacing: -0.02em;
    color: var(--lp-heading);
    font-weight: 700;
    margin-bottom: 22px;
    text-wrap: balance;

    @media(max-width: 1100px){
        font-size: 54px;
    }

    @media(max-width: 767px){
        font-size: 39px;
    }
`;

export const HowWorksText = styled.div.attrs({
})`
    font-size: 23px;
    line-height: 1.52;
    color: #4f637b;
    max-width: 1040px;

    @media(max-width: 767px){
        font-size: 18px;
    }
`;

export const HowWorksTimeline = styled.div.attrs({
})`
    position: relative;
    padding: 8px 0 0;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        transform: translateX(-50%);
        background: linear-gradient(180deg, rgba(63, 121, 230, 0.15), rgba(63, 121, 230, 0.42), rgba(72, 195, 184, 0.24));
    }

    @media(max-width: 991px){
        &::before{
            left: 22px;
            transform: none;
        }
    }
`;
