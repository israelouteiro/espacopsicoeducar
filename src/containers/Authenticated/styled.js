import styled from 'styled-components'  
 
export const DashboardPage = styled.div.attrs({ 
})`            
`;

export const DashboardBody = styled.div.attrs({ 
})`       
    min-height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    background: var(--white-color);

    display: flex;
    align-items: flex-start;     
    overflow:auto;
`;

export const DashboardBodyContent = styled.div.attrs({ 
})`            
    margin: 24px;
    background: var(--white-color);
    padding: 35px 20px;
    width: 100%;
    border-radius: 11px;
    min-height: calc(100vh - 108px);
`;

export const Content = styled.div.attrs({ 
})`           
    overflow:hidden;
`; 