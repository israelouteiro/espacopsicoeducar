import styled from 'styled-components' 

export const FooterContainer = styled.div.attrs({ 
})`          
    background: var(--secondary-color); 
    padding: 60px 0;
`;
    
export const FooterLogo = styled.img.attrs({ 
    src:'/logo1024.png'
})`          
    width: 184px;
    margin-bottom: 24px;
`;
   
export const FooterTitle = styled.div.attrs({  
})`          
    font-size: 20px;
    font-weight: 600;
    color: var(--white-color);
    margin-bottom: 10px;
`;

   
export const FooterText = styled.div.attrs({  
})`          
    font-size: 20px;
    color: var(--white-color);
`;
   
export const FooterLink = styled.div.attrs({  
})`          
    font-size: 20px;
    color: var(--white-color);
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const FooterLinkImage = styled.img.attrs({  
})`          
    height: 22px;
    width: 22px;
    margin-right: 16px;
`;
   
export const FooterSection = styled.div.attrs({  
})`           
    margin-top: 64px;
`;
    
export const FooterPhoneContent = styled.div.attrs({  
})`           
    display: flex;
    margin-top: 10px;
`;
    
export const FooterPhoneIcon = styled.img.attrs({  
    src:'/icons/phone.svg'
})`           
    width: 24px;
    margin-right: 20px;
`;
   
export const FooterCopyright = styled.div.attrs({  
})`          
    font-size: 20px;
    font-weight: 300;
    color: var(--white-color);
    margin: 60px 0 0;
    text-align: center;
`;
   
export const UniLogo = styled.img.attrs({  
    src:'/icons/unilogo.svg'
})`          
    width: 70px;
    margin: 20px auto 0;
    cursor: pointer;
    &:hover{
        opacity: .9;
    }
`;