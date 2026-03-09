import styled from 'styled-components'

export const KnowItem = styled.div.attrs({
})`
    position: relative;
    width: min(100%, 1060px);
    margin: 0 0 72px;
    padding: 0;
    display: grid;
    grid-template-columns: minmax(220px, 26%) 1fr;
    column-gap: 30px;
    align-items: start;
    padding-left: ${props => props.side === 'right' ? '126px' : '0'};
    opacity: ${props => props.visible ? 1 : 0};
    transform: ${props => props.visible ? 'translate3d(0, 0, 0)' : 'translate3d(-30px, 18px, 0)'};
    transition: opacity .62s cubic-bezier(.17,.84,.44,1), transform .62s cubic-bezier(.17,.84,.44,1);
    transition-delay: ${props => props.visible ? `${Math.min((props.index || 0) * 90, 320)}ms` : '0ms'};

    ${
        props => props.linked ? `
            cursor: pointer;
        ` : ``
    }

    @media(max-width: 991px){
        width: 100%;
        grid-template-columns: 1fr;
        row-gap: 16px;
        padding-left: ${props => props.side === 'right' ? '68px' : '0'};
        transform: ${props => props.visible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 18px, 0)'};
    }

    @media(max-width: 767px){
        margin-bottom: 48px;
        padding-left: 0;
    }
`;

export const KnowItemImageFrame = styled.div.attrs({
})`
    position: relative;
    overflow: hidden;
    border-radius: 0;
    background: transparent;
    width: ${props => props.featured ? 'min(100%, 340px)' : 'min(100%, 280px)'};
    aspect-ratio: 1 / 1;
    order: 1;
    justify-self: start;

    @media(max-width: 991px){
        width: ${props => props.featured ? 'min(100%, 300px)' : 'min(100%, 260px)'};
    }

    @media(max-width: 767px){
        width: min(100%, 250px);
    }
`;

export const KnowItemImage = styled.img.attrs((props) => ({
    alt: props.alt || 'Capa do livro'
}))`
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    background: transparent;
    display: block;
    clip-path: ${props => props.visible ? 'inset(0 0 0 0)' : 'inset(0 0 74% 0)'};
    transform: ${props => props.visible ? 'translateY(0) scale(1)' : 'translate3d(-12px, 32px, 0) scale(1.02)'};
    opacity: ${props => props.visible ? 1 : .86};
    transition: clip-path .72s cubic-bezier(.17,.84,.44,1), transform .72s cubic-bezier(.17,.84,.44,1), opacity .46s ease;
    transition-delay: ${props => props.visible ? `${Math.min((props.index || 0) * 90 + 60, 380)}ms` : '0ms'};

    @media (hover: hover) and (pointer: fine){
        ${KnowItem}:hover &{
            transform: ${props => props.visible ? 'scale(1.012)' : 'translateY(20px) scale(1.02)'};
        }
    }
`;

export const KnowItemContent = styled.div.attrs({
})`
    padding: 2px 0 4px;
    order: 2;
    opacity: ${props => props.visible ? 1 : 0};
    transform: ${props => props.visible ? 'translate3d(0, 0, 0)' : 'translate3d(18px, 0, 0)'};
    transition: opacity .54s ease, transform .54s ease;
    transition-delay: ${props => props.visible ? `${Math.min((props.index || 0) * 90 + 150, 460)}ms` : '0ms'};
`;

export const KnowItemContentTitle = styled.div.attrs({
})`
    color: var(--lp-heading);
    font-family: 'Sora', 'Nunito Sans', sans-serif;
    font-size: 35px;
    line-height: 1.04;
    letter-spacing: -0.01em;
    font-weight: 700;

    ${
        props => props.featured ? `
            font-size: 52px;
            line-height: .98;
        ` : ``
    }

    @media(max-width: 767px){
        font-size: 32px;

        ${
            props => props.featured ? `
                font-size: 42px;
            ` : ``
        }
    }
`;

export const KnowItemContentText = styled.div.attrs({
})`
    color: #5b6f86;
    font-size: 16px;
    line-height: 1.52;
    margin-top: 8px;
`;

export const KnowItemContentRate = styled.div.attrs({
})`
    display: flex;
    align-items: center;
    margin: 12px 0 12px;
`;

export const KnowItemContentRateText = styled.div.attrs({
})`
    color: var(--grey-color);
    font-size: 13px;

    &:empty{
        display: none;
    }
`;

export const KnowItemContentRateIcon = styled.img.attrs(props => ({
    src: `/icons/star-${ props.rated ? `on` : `off` }.svg`
}))`
    margin-right: 6px;
    width: 18px;
`;

export const KnowItemContentDescription = styled.div.attrs({
})`
    color: #465d78;
    font-size: 16px;
    line-height: 1.58;
    margin-top: 6px;
    margin-bottom: 11px;

    ${
        props => props.featured ? `
            font-size: 19px;
            line-height: 1.56;
        ` : ``
    }
`;

export const KnowItemContentAvailable = styled.div.attrs({
})`
    margin-bottom: 4px;
    color: #5a7697;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .04em;
`;
