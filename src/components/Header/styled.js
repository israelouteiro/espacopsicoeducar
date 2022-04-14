import styled from 'styled-components' 

export const HeaderContainer = styled.div.attrs({ 
})`          
    background-color: var(--primary-color);
    min-height: 73px;
    width: 100%; 

    box-shadow: 0px 3px 6px var(--shadow-color);
`;

export const RowCenter = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    height: 73px;

    @media(max-width: 767px){ 
        justify-content: space-between; 
    }
`;

export const RowEnd = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 73px;

    @media(max-width: 767px){ 
        display: none;
    }
`;

export const AppLogo = styled.img.attrs({ 
    src:'/logo1024.png'
})`          
    margin-right: 60px;
    width: 56px;
     
    @media(max-width: 869px){
        margin-right: 20px; 
    }

    @media(max-width: 767px){ 
        margin-right: 60px;
    }
`;

export const HeaderLeftMenu = styled.ul.attrs({ 
})`        
    list-style: none;
    padding:0;
    margin:0; 
    height: 100%;
 
    @media(max-width: 767px){ 
        display: none;
    }

`;

export const HeaderMenuItem = styled.li.attrs({ 
})`    
    display: inline-flex; 
    height: 100%;
    align-items: center;
    padding: 0 15px;
    cursor: pointer; 
    color: var(--white-color);
    font-size: 15px;  

    ${
        props => props.active ? `
            background-color: var(--shadow-color);
            font-weight: bold;
        ` : ``
    }

    :hover{
        opacity: .8;
    }

    @media(max-width: 769px){ 
        padding: 0 12px; 
    }        
`;

export const HeaderMobile = styled.div.attrs({ 
})`           
    display: none;
    position: relative;
    z-index: 1;

    @media(max-width: 767px){ 
        display: block;
        padding: 20px;
    }
`;


export const MenuIcon = styled.img.attrs({ 
    src:'/icons/menu.svg'
})`           
`;

export const HeaderMobileMenu = styled.ul.attrs({ 
})`           
    position: absolute;
    right: 0;
    top: 69px;

    background-color: var(--primary-color);
    list-style: none;
    padding:0;
    margin:0;  
`;

export const HeaderMobileItem = styled.li.attrs({ 
})` 
    display: flex; 
    height: 64px;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
 
    color: var(--white-color);
    font-size: 15px;

    ${
        props => props.active ? `
            background-color: var(--shadow-color);
            font-weight: bold;
        ` : ``
    }
    
    ${
        props => props.centred ? `
            justify-content: center;
        ` : ``
    }

    :hover{
        opacity: .8;
    }
`;
    
    
// li .button-white-outline,
// li .button-white{
//     margin: 0;
// }


// export const Text = styled.div.attrs({ 
// })`         
//     font-family: '${ Theme.FONTS.light }';
//     font-size: 18px; 
//     color: ${ Theme.COLORS.black }; 
//     b{
//         font-family: '${ Theme.FONTS.bold }';
//         text-decoration: underline; 
//         cursor: pointer;
//     }
// `;   