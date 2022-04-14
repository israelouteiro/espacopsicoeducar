import styled from 'styled-components'  

export const InputContainer = styled.div.attrs({ 
})`          
    border-bottom: 1px solid var(--primary-color);
    max-width: 325px;
    position: relative;
`;

export const InputLabel = styled.div.attrs({ 
})`          
    font-size: 12px; 
    color: var(--primary-color);
`;

export const InputInput = styled.input.attrs({ 
})`          
    border: 0;
    height: 36px;
    color: var(--lightgrey-color);
    outline: none;
    width: 100%;
    padding: 0 8px;
    &::placeholder{
        color: var(--lightgrey-color);
    }
`;

export const InputAction = styled.div.attrs({ 
})`          
    height: 36px;
    width: 36px; 
    background-color: var(--white-color);

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    right: 0;
`;

export const InputIcon = styled.img.attrs({ 
})`
`;