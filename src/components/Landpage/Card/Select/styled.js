import styled from 'styled-components'

export const CardBanner = styled.div.attrs({
})`
    padding: 0;
    margin: 0;
    max-width: 720px;
    position: relative;

    @media(max-width: 767px){
        padding: 0;
    }
`;

export const CardBannerTitle = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 62px;
    line-height: 1.01;
    letter-spacing: -0.03em;
    font-weight: 700;
    color: #ffffff;
    text-wrap: balance;

    @media(max-width: 1040px){
        font-size: 55px;
    }

    @media(max-width: 767px){
        font-size: 38px;
    }
`;

export const CardBannerText = styled.div.attrs({
})`
    font-size: 20px;
    line-height: 1.6;
    color: rgba(236, 244, 255, 0.96);
    margin: 18px 0 28px;
    max-width: 560px;

    @media(max-width: 767px){
        font-size: 17px;
    }
`;
