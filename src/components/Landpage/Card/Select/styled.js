import styled from 'styled-components' 

export const CardBanner = styled.div.attrs({ 
})`           
    background: var(--white-color);
    border-radius: 17px;
    padding: 24px 25px 30px;
    margin: 100px 0 50px;

    @media(max-width: 767px){
        margin: 30px 0 50px;
    }
`; 
 

export const CardBannerTitle = styled.div.attrs({ 
})`           
    font-size: 32px;
    line-height: 43px;
    font-weight: bold;
    color: var(--secondary-color);

    @media(max-width: 767px){ 
        font-size: 28px;
        line-height: 32px;
    }
`; 
 

export const CardBannerText = styled.div.attrs({ 
})`           
    font-size: 15px;
    color: var(--grey-color);
    margin: 12px 0 20px;
    padding-right: 30px;
    b{
        color: var(--primary-color);
    }
`; 
 