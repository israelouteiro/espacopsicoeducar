import styled from 'styled-components'  
 
export const FormTitle = styled.div.attrs({ 
})`           
    color: var(--primary-color); 
    font-weight: bold;
    font-size: 20px; 

    margin: 50px 0 10px;
`;
export const FormText = styled.div.attrs({ 
})`           
    font-size: 15px; 
    color: var(--grey-color);

    max-width: 240px;
    margin-bottom: 30px;
`;

export const FormSpacer = styled.div.attrs({ 
})`           
    margin-top: 40px;
`;

export const RegisterForgot = styled.div.attrs({ 
})`           
    margin-top: 40px;
    font-size: 15px; 
    color: var(--grey-color);
    display: flex;
`;

export const ForgotLink = styled.div.attrs({ 
})`           
    margin-left: 6px;
    color: var(--primary-color);
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`;

export const RegisterCall = styled.div.attrs({ 
})`           
    margin: 30px 0 0px;
    color: var(--grey-color);
    font-size: 15;
    font-weight: bold;
`;