import styled from 'styled-components' 
 
 
export const KnowItem = styled.div.attrs({ 
})`           
    display: flex;
    background: var(--white-color);
    margin-top: 30px;
    border-radius: 5px;
    box-shadow: 0px 2px 6px var(--shadow-color);

    ${
        props => props.linked ? `
            cursor:pointer;
            transition: all .3s ease;
            &:hover{
                transform: scale(1.05);
            }
        ` : ``
    }
`; 
 
export const KnowItemImage = styled.div.attrs({ 
})`   
    height: 250px;
    width: 200px;
    min-width: 80px;
    min-width: 200px;
    border-bottom-right-radius: 43px; 
    overflow: hidden;        
    ${ props => props.image ? `background: rgba(112,112,112,.4) url(${ props.image }) center center / cover;` : `` }
`; 
 
export const KnowItemContent = styled.div.attrs({ 
})`   
    padding: 20px 30px 10px;
`; 
 
export const KnowItemContentTitle = styled.div.attrs({ 
})`   
    color: var(--secondary-color);
    font-size: 24px;
    font-weight: 600;   
`; 
export const KnowItemContentText = styled.div.attrs({ 
})`   
    color: var(--grey-color);
    font-size: 15px; 
`; 
export const KnowItemContentRate = styled.div.attrs({ 
})`   
    display: flex;
    align-items: center;
    margin: 6px 0;
`; 
export const KnowItemContentRateText = styled.div.attrs({ 
})`   
    color: var(--grey-color);
    font-size: 13px; 
`; 
export const KnowItemContentRateIcon = styled.img.attrs(props => ({ 
    src: `/icons/star-${ props.rated ? `on` : `off` }.svg`
}))`   
    margin-right: 8px ;
`; 
export const KnowItemContentDescription = styled.div.attrs({ 
})`   
    color: var(--lightgrey-color);
    font-size: 14px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    line-clamp: 4;
    overflow: hidden;
    max-height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
`; 
export const KnowItemContentAvailable = styled.div.attrs({ 
})`   
    margin-bottom: 10px;
    color: var(--lightgrey-color);
    font-size: 10px;
`; 