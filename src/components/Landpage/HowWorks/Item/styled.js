import styled from 'styled-components'

export const HowWorkStep = styled.div.attrs({
})`
    position: relative;
    width: calc(50% - 42px);
    margin: 0 0 52px;
    padding: 0 6px 4px;

    ${
        props => props.side === 'right' ? `
            margin-left: auto;
        ` : `
            margin-right: auto;
        `
    }

    @media(max-width: 991px){
        width: calc(100% - 52px);
        margin-left: 52px;
        margin-right: 0;
        margin-bottom: 34px;
        padding-right: 0;
    }
`;

export const HowWorkDot = styled.span.attrs({
})`
    position: absolute;
    top: 40px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3f79e6, #48c3b8);

    ${
        props => props.side === 'right' ? `
            left: -48px;
        ` : `
            right: -48px;
        `
    }

    @media(max-width: 991px){
        left: -36px;
        right: auto;
    }
`;

export const HowWorkConnector = styled.span.attrs({
})`
    position: absolute;
    top: 45px;
    width: 36px;
    height: 1px;
    background: rgba(63, 121, 230, 0.42);

    ${
        props => props.side === 'right' ? `
            left: -36px;
        ` : `
            right: -36px;
        `
    }

    @media(max-width: 991px){
        left: -24px;
        right: auto;
        width: 24px;
    }
`;

export const HowWorkStepNumber = styled.div.attrs({
})`
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 74px;
    line-height: .9;
    letter-spacing: -0.03em;
    font-weight: 700;
    color: rgba(63, 121, 230, 0.24);

    @media(max-width: 767px){
        font-size: 56px;
    }
`;

export const HowWorkScope = styled.div.attrs({
})`
    display: inline-flex;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
    font-weight: 800;
    color: #4e84df;
    margin: 8px 0 10px;
`;

export const HowWorkStepTitle = styled.div.attrs({
})`
    font-size: 34px;
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--lp-heading);
    margin-top: 2px;

    @media(max-width: 767px){
        font-size: 27px;
    }
`;

export const HowWorkStepText = styled.div.attrs({
})`
    font-size: 19px;
    line-height: 1.58;
    color: #4f637b;
    margin-top: 12px;
    max-width: 92%;

    b{
        font-weight: 700;
        color: var(--lp-heading);
    }

    @media(max-width: 991px){
        max-width: 100%;
    }

    @media(max-width: 767px){
        font-size: 17px;
    }
`;
