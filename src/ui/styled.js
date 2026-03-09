import styled from 'styled-components'
import ReactLoading from 'react-loading';
import Lottie from 'react-lottie';

export const hexToRgb = (hex) => {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c = hex.substring(1).split('');
        if(c.length === 3){
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
    return `255,255,255`
}

export const PrimaryColor = hexToRgb('#06346b')

export const Touch = styled.div.attrs({
})`
    cursor: pointer;
    border-radius: 10px;
    transition: all .2s ease;

    &:hover{
        background: rgba(63, 121, 230, 0.08);
    }
`;

export const Load = styled(ReactLoading).attrs({
    type:'spin',
    color:'#ffffff',
    height:20,
    width:20
})``;

export const ButtonWhite = styled.div.attrs({
})`
    min-width: 156px;
    height: 42px;
    padding: 0 14px;
    border-radius: 999px;
    margin-left: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all .2s ease;
    font-size: 14px;
    font-weight: 700;
    text-align: center;

    ${
        props => props.outline ? `
            border: 1px solid rgba(35, 78, 131, 0.32);
            color: var(--lp-heading, var(--secondary-color));
            background: transparent;
        ` : `
            background: #ffffff;
            color: var(--lp-heading, var(--primary-color));
            box-shadow: 0 8px 18px rgba(22, 49, 95, 0.12);
        `
    }

    ${
        props => props.nomargin ? `
            margin: 0 !important;
        ` : ``
    }

    ${
        props => props.centred ? `
            margin: 12px auto;
        ` : ``
    }

    &:hover{
        transform: translateY(-1px);
    }

    @media(max-width: 869px){
        margin-left: 10px;
        min-width: 138px;
    }

    @media(max-width: 767px){
        margin-left: 0;
    }
`;

export const ButtonColor = styled.div.attrs({
})`
    ${
        props => props.outline ? `
            border: 1px solid rgba(131, 145, 163, 0.5);
            color: var(--lightgrey-color);
            background: transparent;
        ` : `
            background: #9ca3af;
            color: var(--white-color);
        `
    }

    height: 48px;
    width: fit-content;
    min-width: 190px;
    max-width: 100%;
    padding: 0 22px;
    border-radius: 999px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-weight: 800;
    letter-spacing: 0.01em;
    font-size: 14px;
    margin-top: 14px;

    cursor: pointer;
    transition: all .2s ease;
    box-shadow: 0 10px 18px rgba(28, 56, 102, 0.14);

    ${
        props => props.primary ? `
            ${
                props.outline ? `
                    border: 1px solid var(--primary-color);
                    color: var(--primary-color);
                ` : `
                    background: linear-gradient(120deg, var(--primary-color), #4f8cf3);
                    color: var(--white-color);
                `
            }
        ` : ``
    }

    ${
        props => props.secondary ? `
            ${
                props.outline ? `
                    border: 1px solid var(--secondary-color);
                    color: var(--secondary-color);
                ` : `
                    background: linear-gradient(120deg, #2f6cbe, var(--primary-color));
                    color: var(--white-color);
                `
            }
        ` : ``
    }

    ${
        props => props.centred ? `
            margin: 14px auto;
            display: flex;
        ` : ``
    }

    ${
        props => props.white ? `
            ${
                props.outline ? `
                    border: 1.5px solid rgba(255, 255, 255, 0.9);
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.06);
                    box-shadow: 0 14px 28px rgba(6, 18, 34, 0.35);
                    backdrop-filter: blur(4px);
                ` : `
                    background: #ffffff;
                    color: #1e3656;
                    box-shadow: 0 14px 28px rgba(6, 18, 34, 0.28);
                `
            }
            min-height: 52px;
            font-size: 15px;
            padding: 0 28px;
        ` : ``
    }

    &:hover{
        transform: translateY(-1px);
        box-shadow: 0 14px 24px rgba(28, 56, 102, 0.2);

        ${
            props => props.white && props.outline ? `
                background: #ffffff;
                color: #1e3656;
            ` : ``
        }
    }
`;

export const Animation = styled(Lottie).attrs( props => ({
    options:{
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        animationData: props.animationData
    },
    width: props.width ? props.width : 320
}))`
    max-width: 100%;
`;
