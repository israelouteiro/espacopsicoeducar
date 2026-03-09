import styled from 'styled-components'

export const Page = styled.div.attrs({
})`
    padding-top: 88px;
`;

export const HeroSection = styled.section.attrs({
})`
    padding: 96px 0 82px;
    background:
        radial-gradient(circle at 82% 18%, rgba(78, 132, 223, 0.14), transparent 38%),
        linear-gradient(180deg, rgba(236, 244, 255, 0.86) 0%, rgba(247, 250, 255, 0.34) 100%);

    @media(max-width: 767px){
        padding: 84px 0 70px;
    }
`;

export const HeroTag = styled.div.attrs({
})`
    display: inline-flex;
    font-size: 12px;
    letter-spacing: .18em;
    text-transform: uppercase;
    font-weight: 800;
    color: #4f83dd;
    margin-bottom: 12px;
`;

export const HeroTitle = styled.h1.attrs({
})`
    margin: 0 0 34px;
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 66px;
    line-height: .98;
    letter-spacing: -0.03em;
    color: #1e3656;
    max-width: 840px;

    @media(max-width: 991px){
        font-size: 54px;
    }

    @media(max-width: 767px){
        font-size: 40px;
        margin-bottom: 26px;
    }
`;

export const HeroText = styled.p.attrs({
})`
    margin: 0 0 26px;
    font-size: 22px;
    line-height: 1.62;
    color: #4f637b;
    max-width: 860px;

    @media(max-width: 767px){
        font-size: 18px;
        margin-bottom: 20px;
    }
`;

export const HeroPhotoFrame = styled.div.attrs({
})`
    width: min(100%, 240px);
    aspect-ratio: 3 / 4;
    margin-right: auto;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(39, 88, 149, 0.12);

    @media(max-width: 991px){
        margin-right: 0;
        width: min(100%, 260px);
    }

    @media(max-width: 767px){
        width: min(100%, 230px);
    }
`;

export const HeroPhoto = styled.img.attrs({
    src: "/images/gpt/psicologa-regina.png",
    alt: "Regina Mendes"
})`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 14%;
`;

export const HeroPhotoCaption = styled.div.attrs({
})`
    margin-top: 12px;
    font-size: 11px;
    letter-spacing: .11em;
    text-transform: uppercase;
    font-weight: 700;
    color: #5f7b9d;
`;

export const HeroAside = styled.div.attrs({
})`
    width: min(100%, 760px);
    border-left: 1px solid rgba(39, 88, 149, 0.2);
    padding-left: 20px;
`;

export const HeroAsideTitle = styled.div.attrs({
})`
    font-size: 12px;
    letter-spacing: .14em;
    text-transform: uppercase;
    font-weight: 800;
    color: #54739a;
    margin-bottom: 12px;
`;

export const HeroAsideText = styled.p.attrs({
})`
    margin: 0;
    color: #385879;
    font-size: 17px;
    line-height: 1.62;
`;

export const Section = styled.section.attrs({
})`
    padding: 94px 0;

    ${
        props => props.soft ? `
            background: linear-gradient(180deg, rgba(239, 246, 255, 0.56) 0%, rgba(247, 250, 255, 0.16) 100%);
        ` : ''
    }

    @media(max-width: 767px){
        padding: 72px 0;
    }
`;

export const SectionTag = styled.div.attrs({
})`
    display: inline-flex;
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
    font-weight: 800;
    color: #56789f;
    margin-bottom: 12px;
`;

export const SectionTitle = styled.h2.attrs({
})`
    margin: 0;
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 50px;
    line-height: 1.04;
    letter-spacing: -0.02em;
    color: #1e3656;
    max-width: 920px;

    @media(max-width: 767px){
        font-size: 36px;
    }
`;

export const SectionText = styled.p.attrs({
})`
    margin: 18px 0 0;
    color: #50657f;
    font-size: 19px;
    line-height: 1.68;
    max-width: 980px;

    @media(max-width: 767px){
        font-size: 17px;
    }
`;

export const Emphasis = styled.strong.attrs({
})`
    color: #224064;
`;

export const SpecsList = styled.ul.attrs({
})`
    margin: 16px 0 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid rgba(39, 88, 149, 0.12);
`;

export const SpecsItem = styled.li.attrs({
})`
    margin: 0;
    padding: 14px 0 14px 18px;
    border-bottom: 1px solid rgba(39, 88, 149, 0.1);
    &:first-child{
        padding-top: 14px;
    }
    position: relative;
    color: #3c597b;
    font-size: 17px;
    line-height: 1.58;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 10px;
        height: 2px;
        background: linear-gradient(90deg, #4e84df, #48c3b8);
    }
`;

export const FlowList = styled.div.attrs({
})`
    margin-top: 30px;
    border-top: 1px solid rgba(39, 88, 149, 0.16);
    counter-reset: careFlow;
`;

export const FlowItem = styled.article.attrs({
})`
    position: relative;
    counter-increment: careFlow;
    padding: 24px 0 26px 78px;
    border-bottom: 1px solid rgba(39, 88, 149, 0.14);

    &::before{
        content: counter(careFlow, decimal-leading-zero);
        position: absolute;
        top: 24px;
        left: 0;
        font-family: 'Sora', 'Nunito Sans', sans-serif;
        font-size: 28px;
        line-height: 1;
        letter-spacing: -0.02em;
        color: rgba(39, 88, 149, 0.46);
    }

    @media(max-width: 767px){
        padding-left: 62px;

        &::before{
            font-size: 22px;
        }
    }
`;

export const FlowTitle = styled.h3.attrs({
})`
    margin: 0;
    font-size: 31px;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #203f63;
    font-family: 'Sora', 'Nunito Sans', sans-serif;

    @media(max-width: 767px){
        font-size: 25px;
    }
`;

export const FlowText = styled.p.attrs({
})`
    margin: 12px 0 0;
    color: #50657f;
    font-size: 18px;
    line-height: 1.66;

    @media(max-width: 767px){
        font-size: 16px;
    }
`;

export const Signature = styled.div.attrs({
})`
    margin-top: 28px;
    padding-top: 18px;
    border-top: 1px solid rgba(39, 88, 149, 0.14);
    color: #335276;
    font-size: 17px;
    line-height: 1.62;
`;
