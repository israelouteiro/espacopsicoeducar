import styled from 'styled-components'

export const BannerImage = styled.div.attrs({
})`
    position: relative;
    min-height: 100vh;
    min-height: 100svh;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(120deg, rgba(8, 24, 47, 0.54), rgba(14, 33, 59, 0.34)),
        url(/images/gpt/hero-therapy.png) no-repeat center center / cover;

    &::before{
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(8, 20, 40, 0.34) 0%, rgba(8, 20, 40, 0.1) 44%, rgba(8, 20, 40, 0.56) 100%);
        pointer-events: none;
    }

    @media(max-width: 767px){
        min-height: 94vh;
        min-height: 94svh;
    }
`;

export const BannerOut = styled.div.attrs({
})`
    min-height: 100vh;
    min-height: 100svh;
    width: 100%;
    background: transparent;

    @media(max-width: 767px){
        min-height: 94vh;
        min-height: 94svh;
    }
`;

export const BannerContent = styled.div.attrs({
})`
    min-height: 100vh;
    min-height: 100svh;
    width: 100%;
    position: absolute;
    inset: 0;
    background: linear-gradient(97deg, rgba(6, 18, 34, 0.72) 0%, rgba(6, 18, 34, 0.35) 48%, rgba(6, 18, 34, 0.04) 100%);

    display: flex;
    align-items: center;

    > .container{
        width: 100%;
    }

    @media(max-width: 767px){
        min-height: 94vh;
        min-height: 94svh;
        background: linear-gradient(180deg, rgba(6, 18, 34, 0.75) 0%, rgba(6, 18, 34, 0.32) 64%, rgba(6, 18, 34, 0.14) 100%);
    }
`;

export const BannerCard = styled.div.attrs({
})``;
