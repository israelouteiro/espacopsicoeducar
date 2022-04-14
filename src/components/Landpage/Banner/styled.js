import styled from 'styled-components' 

export const BannerImage = styled.div.attrs({ 
})`           

    position: relative;
    min-height: 770px;
    width: 100%;

    background: white url(/images/banner-2.jpg) no-repeat top +35% right / cover;

    border-bottom-left-radius: 50% 80px;
    border-bottom-right-radius: 50% 80px;
    overflow: hidden;
`; 

export const BannerOut = styled.div.attrs({ 
})`            
    min-height: 770px;
    width: 100%;

    background: var(--shadow-color); 
    mix-blend-mode: multiply;
`; 

export const BannerContent = styled.div.attrs({ 
})`           
    min-height: 770px;
    width: 100%; 

    background: -moz-linear-gradient(90deg, var(--secondary-color) -10%, rgba(41,28,68,0) 110%);
    background: -webkit-linear-gradient(90deg, var(--secondary-color) -10%, rgba(41,28,68,0) 110%);
    background: linear-gradient(90deg, var(--secondary-color) -10%, rgba(41,28,68,0) 110%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="var(--secondary-color)",endColorstr="rgba(41,28,68,0)",GradientType=1);
    position: absolute;
    top: 0;
    left: 0;
`; 

export const BannerCard = styled.div.attrs({ 
})`           
`; 