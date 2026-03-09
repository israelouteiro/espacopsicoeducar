import styled from 'styled-components'

export const CommomContainer = styled.div.attrs({
})`
    position: relative;
    padding: 108px 0 94px;
    margin: 0;

    @media(max-width: 767px){
        padding: 76px 0 64px;
    }
`;

export const CommomDecoration = styled.img.attrs({
    src:'/icons/circle-2.svg'
})`
    position: absolute;
    width: 540px;
    right: -300px;
    bottom: -220px;
    opacity: .08;
    pointer-events: none;
`;

export const CommomTag = styled.div.attrs({
})`
    display: inline-flex;
    font-size: 12px;
    letter-spacing: .2em;
    font-weight: 800;
    color: #4e84df;
    margin-bottom: 14px;
`;

export const CommomTitle = styled.h1.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 56px;
    line-height: 1.03;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: var(--lp-heading);
    margin: 0;
    text-wrap: balance;

    @media(max-width: 767px){
        font-size: 40px;
    }
`;

export const CommomLead = styled.p.attrs({
})`
    font-size: 22px;
    line-height: 1.56;
    margin: 20px 0 30px;
    color: #4f637b;

    @media(max-width: 767px){
        font-size: 18px;
    }
`;

export const CommomManifesto = styled.ul.attrs({
})`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const CommomManifestoItem = styled.li.attrs({
})`
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 16px;
    color: #445b76;
    padding-left: 30px;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 11px;
        width: 14px;
        height: 2px;
        background: linear-gradient(90deg, #3f79e6, #48c3b8);
    }

    @media(max-width: 767px){
        font-size: 17px;
    }
`;

export const CommomPillar = styled.div.attrs({
})`
    margin: 0 0 34px;
    padding-left: 0;

    &:first-child{
        margin-top: 6px;
    }
`;

export const CommomPillarTitle = styled.h3.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 30px;
    line-height: 1.08;
    letter-spacing: -0.01em;
    margin: 0 0 8px;
    color: var(--lp-heading);

    @media(max-width: 767px){
        font-size: 27px;
    }
`;

export const CommomPillarText = styled.p.attrs({
})`
    font-size: 18px;
    line-height: 1.58;
    margin: 0;
    color: #51667f;

    @media(max-width: 767px){
        font-size: 17px;
    }
`;
