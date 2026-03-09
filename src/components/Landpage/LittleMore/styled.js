import styled from 'styled-components'

export const MoreContainer = styled.div.attrs({
})`
    padding: 108px 0 108px;
    position: relative;

    @media(max-width: 767px){
        padding: 76px 0 84px;
    }
`;

export const MoreTag = styled.div.attrs({
})`
    display: inline-flex;
    font-size: 12px;
    letter-spacing: .2em;
    font-weight: 800;
    color: #4e84df;
    margin-bottom: 14px;
`;

export const MoreTitle = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 56px;
    line-height: 1.03;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: var(--lp-heading);

    @media(max-width: 767px){
        font-size: 40px;
    }
`;

export const MoreText = styled.div.attrs({
})`
    margin-top: 18px;
    font-size: 22px;
    line-height: 1.58;
    color: #4f637b;

    p{
        margin-bottom: 20px;
    }

    @media(max-width: 767px){
        font-size: 18px;
    }
`;

export const MoreVisual = styled.div.attrs({
})`
    max-width: 430px;
    width: 100%;
    min-height: 420px;
    border-radius: 24px;
    background: linear-gradient(160deg, #eff4fb 0%, #e4ecf8 100%);
    border: 1px solid rgba(49, 88, 141, 0.12);
    box-shadow: 0 18px 34px rgba(43, 80, 126, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 0 auto;
    overflow: hidden;
    padding: 28px;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #4e84df, #48c3b8);
        opacity: .88;
    }

    @media(max-width: 767px){
        min-height: 370px;
        max-width: 100%;
        margin: 20px auto 0;
        padding: 24px 20px;
    }
`;

export const MoreVisualHeader = styled.div.attrs({
})`
    display: block;
    padding-top: 2px;
`;

export const MoreVisualEyebrow = styled.div.attrs({
})`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: .14em;
    font-weight: 800;
    color: #54739a;
    margin-bottom: 6px;
`;

export const MoreVisualTitle = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 27px;
    line-height: 1.04;
    letter-spacing: -0.02em;
    color: #1e3656;
    font-weight: 700;

    @media(max-width: 767px){
        font-size: 22px;
    }
`;

export const MoreVisualList = styled.ul.attrs({
})`
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`;

export const MoreVisualItem = styled.li.attrs({
})`
    font-size: 15px;
    line-height: 1.5;
    color: #365377;
    position: relative;
    padding-left: 18px;

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

export const MoreVisualImage = styled.div.attrs({
})`
    margin-top: 18px;
    width: 100%;
    height: 126px;
    border-radius: 14px;
    border: 1px solid rgba(49, 88, 141, 0.14);
    background:
        linear-gradient(180deg, rgba(239, 244, 251, 0.08) 0%, rgba(30, 54, 86, 0.08) 100%),
        url('/images/gpt/quem-somos-visual.png') no-repeat center center / cover;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.24);

    @media(max-width: 767px){
        height: 112px;
    }
`;

export const MoreDecoration = styled.img.attrs({
    src:'/icons/circle-2.svg'
})`
    width: 560px;
    position: absolute;
    bottom: -80px;
    right: -260px;
    z-index: -1;
    opacity: .07;
`;
