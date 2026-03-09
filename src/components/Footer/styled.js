import styled from 'styled-components'

export const FooterContainer = styled.div.attrs({
    id:'contato'
})`
    background: linear-gradient(180deg, #f8fbff 0%, #f3f6fa 100%);
    color: #18324f;
    padding: 72px 0 26px;
    border-top: 1px solid rgba(24, 50, 79, 0.12);
`;

export const FooterSurface = styled.div.attrs({
})`
    padding-bottom: 34px;
    border-bottom: 1px solid rgba(24, 50, 79, 0.12);
`;

export const FooterBottom = styled.div.attrs({
})`
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media(max-width: 767px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const FooterBrand = styled.div.attrs({
})`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 14px;
`;

export const FooterLogo = styled.img.attrs({
    src:'/logo1024.png'
})`
    width: 54px;
    border-radius: 10px;
    border: 1px solid rgba(24, 50, 79, 0.12);
`;

export const FooterSubtitle = styled.div.attrs({
})`
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #5f738d;
    margin-bottom: 8px;
`;

export const FooterTitle = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 30px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 600;
    color: #18324f;
    max-width: 620px;

    @media(max-width: 767px){
        font-size: 24px;
    }
`;

export const FooterText = styled.div.attrs({
})`
    font-size: 15px;
    line-height: 1.55;
    color: #516985;
    max-width: 520px;
`;

export const FooterLink = styled.div.attrs({
})`
    font-size: 15px;
    font-weight: 600;
    color: #1e4a7f;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    width: fit-content;
    transition: all .2s ease;
    letter-spacing: .01em;

    &:hover{
        color: #14355b;
        text-decoration: underline;
    }
`;

export const FooterSection = styled.div.attrs({
})`
    padding-top: 4px;

    @media(max-width: 767px){
        margin-top: 0;
    }
`;

export const FooterLabel = styled.h4.attrs({
})`
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .13em;
    text-transform: uppercase;
    color: #5f738d;
    margin: 0 0 12px;
`;

export const FooterStack = styled.div.attrs({
})`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FooterCopyright = styled.div.attrs({
})`
    font-size: 12px;
    font-weight: 500;
    color: #627892;
`;

export const UniLogo = styled.img.attrs({
    src:'/icons/unilogo.svg'
})`
    width: 62px;
    opacity: .72;
    cursor: pointer;

    &:hover{
        opacity: .9;
    }
`;
