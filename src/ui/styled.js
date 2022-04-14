import styled from 'styled-components' 
import ReactLoading from 'react-loading';
import Lottie from 'react-lottie';

export const hexToRgb = (hex) => {
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return [(c>>16)&255, (c>>8)&255, c&255].join(',') ;
    }
    return `255,255,255`
} 

export const PrimaryColor = hexToRgb('#06346b')

export const Touch = styled.div.attrs({ 
})`         
    cursor: pointer;
    &:hover{
        box-shadow: 0px 1px 3px var(--shadow-color);
    }
`;

export const Load = styled(ReactLoading).attrs({ 
    type:'spin',
    color:'#ffffff',
    height:20,
    width:20
})`         
    cursor: pointer;
    &:hover{
        box-shadow: 0px 1px 3px var(--shadow-color);
    }
`;

export const ButtonWhite = styled.div.attrs({ 
})`     
    min-width: 176px;
    height: 41px;
    padding: 0 12px;
    border-radius: 2px;
    margin-left: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    ${
        props => props.outline ? `
            border: 1px solid var(--white-color);
            color: var(--white-color);
        ` : `
            background-color: var(--white-color);
            color: var(--primary-color);
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
        ` : ` 
        `
    }
 
    font-size: 15px;
    font-weight: 600;
    text-align: center; 

    @media(max-width: 869px){ 
        margin-left: 12px; 
    }

    @media(max-width: 809px){
        ${
            props => props.outline ? `
                min-width: 120px;
            ` : `
                margin-left: 0;
            `
        }
    }
 
    @media(max-width: 767px){  
        margin-left: 30px; 
    }
    
`;
    
export const ButtonColor = styled.div.attrs({ 
})`      

    ${
        props => props.outline ? `
            border: 1px solid var(--lightgrey-color);
            color: var(--lightgrey-color);
        ` : `
            background: var(--lightgrey-color);
            color: var(--white-color);
        `
    } 
    height: 45px;
    max-width: 325px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    margin-top: 12px;

    cursor: pointer;
    box-shadow: 0px 2px 2px var(--shadow-color);
    ${
        props => props.primary ? `
            ${
                props.outline ? `
                    border: 1px solid var(--primary-color);
                    color: var(--primary-color);
                ` : `
                    background: var(--primary-color);
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
                    background: var(--secondary-color);
                    color: var(--white-color);
                `
            }
        ` : ``
    }
    ${
        props => props.centred ? `
            margin: 12px auto;
        ` : ` 
        `
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