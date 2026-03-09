import styled from 'styled-components'

export const HeaderContainer = styled.div.attrs({
})`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 60;
    width: 100%;
    min-height: 88px;
    transition: all .25s ease;

    ${
        props => props.scrolled ? `
            background: rgba(247, 251, 255, 0.86);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(35, 78, 131, 0.14);
            box-shadow: 0 10px 24px rgba(16, 34, 62, 0.12);

            --header-text: #17375d;
            --header-pill-hover: rgba(63, 121, 230, 0.1);
            --header-active-bg: rgba(63, 121, 230, 0.14);
            --header-active-border: rgba(63, 121, 230, 0.2);
            --header-text-shadow: none;
        ` : `
            background: transparent;
            border-bottom: 1px solid transparent;
            box-shadow: none;

            --header-text: rgba(245, 251, 255, 0.97);
            --header-pill-hover: rgba(255, 255, 255, 0.16);
            --header-active-bg: rgba(255, 255, 255, 0.2);
            --header-active-border: rgba(255, 255, 255, 0.34);
            --header-text-shadow: 0 3px 12px rgba(0, 0, 0, 0.32);
        `
    }
`;

export const RowCenter = styled.div.attrs({
})`
    display: flex;
    align-items: center;
    min-height: 88px;

    @media(max-width: 1100px){
        justify-content: space-between;
        min-height: 82px;
    }
`;

export const RowEnd = styled.div.attrs({
})`
    display: none;
`;

export const AppLogo = styled.img.attrs({
    src:'/logo1024.png'
})`
    margin-right: 14px;
    width: 56px;
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 0 12px 20px rgba(11, 28, 52, 0.28);

    @media(max-width: 1100px){
        margin-right: 0;
        width: 52px;
    }
`;

export const HeaderLeftMenu = styled.ul.attrs({
})`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 4px;

    @media(max-width: 1100px){
        display: none;
    }
`;

export const HeaderMenuItem = styled.li.attrs({
})`
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: var(--header-text);
    font-size: 13px;
    font-weight: 700;
    border-radius: 999px;
    text-shadow: var(--header-text-shadow);
    transition: all .2s ease;

    ${
        props => props.active ? `
            background: var(--header-active-bg);
            box-shadow: inset 0 0 0 1px var(--header-active-border);
        ` : ``
    }

    :hover{
        background: var(--header-pill-hover);
    }
`;

export const HeaderMobile = styled.div.attrs({
})`
    display: none;
    position: relative;
    z-index: 61;

    @media(max-width: 1100px){
        display: block;
        padding: 14px 0;
    }
`;

export const MenuIcon = styled.img.attrs({
    src:'/icons/menu.svg'
})`
    width: 24px;
    filter: ${props => {
        if(props.opened){
            return 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))'
        }

        if(props.dark){
            return 'brightness(0) saturate(100%) invert(18%) sepia(17%) saturate(1118%) hue-rotate(177deg) brightness(93%) contrast(91%)'
        }

        return 'brightness(0) invert(1) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45))'
    }};
`;

export const HeaderMobileMenu = styled.ul.attrs({
})`
    width: min(88vw, 360px);
    max-width: 360px;
    height: 100dvh;
    list-style: none;
    padding: 16px 20px 24px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: linear-gradient(180deg, rgba(12, 31, 56, 0.98) 0%, rgba(10, 27, 49, 0.98) 100%);
    border-left: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: -30px 0 56px rgba(5, 14, 26, 0.52);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    animation: mobileMenuIn .24s ease both;

    @keyframes mobileMenuIn{
        from{
            opacity: 0;
            transform: translateX(20px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const HeaderMobileAction = styled.li.attrs({
})`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6px;
`;

export const HeaderMobileClose = styled.button.attrs({
    type: 'button'
})`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s ease;

    &:hover{
        background: rgba(255, 255, 255, 0.14);
    }
`;

export const HeaderMobileCloseIcon = styled.img.attrs({
    src: '/icons/close-white.svg'
})`
    width: 18px;
`;

export const HeaderMobileOverlay = styled.div.attrs({
})`
    position: fixed;
    inset: 0;
    z-index: 120;
    background: rgba(8, 20, 36, 0.48);
    backdrop-filter: blur(3px);
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    animation: mobileCoverIn .2s ease;

    @keyframes mobileCoverIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`;

export const HeaderMobileItem = styled.li.attrs({
})`
    display: flex;
    min-height: 54px;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
    border-radius: 12px;
    color: rgba(246, 251, 255, 0.96);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .05em;

    ${
        props => props.active ? `
            background: rgba(255, 255, 255, 0.18);
        ` : ``
    }

    :hover{
        background: rgba(255, 255, 255, 0.14);
    }
`;
