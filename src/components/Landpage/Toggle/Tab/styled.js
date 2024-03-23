import styled from 'styled-components' 

export const CentredRow = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
    margin-bottom: 30px;
`;
    

export const TabsContainer = styled.div.attrs({ 
})`          
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
    margin-bottom: 30px;
`;

export const TabItem = styled.div.attrs({ 
})`          
    width: 100%;
    max-width: 500px; 
    min-height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    font-size: 17px;
    color: var(--grey-color);
    cursor: pointer;

    background: var(--backgroundgrey-color);

    ${
        props => props.active ? `
            background: var(--primary-color);
            color: var(--white-color);
        ` : ``
    }
`;
    