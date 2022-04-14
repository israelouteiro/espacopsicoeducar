import React, { useState } from "react";  

import { 
    InputContainer,
    InputLabel,
    InputInput,
    InputAction,
    InputIcon
} from "./styled"; 

export default function Input(props){ 
    const [visible, setVisible] = useState(false)
    const [focus, setFocus] = useState(false)
    return ( 
        <>  
            <InputContainer>
                
                {
                    ( props.label && ( focus || (props.value && props.value.length > 0)) ) ? 
                        <InputLabel>
                            { props.label }
                        </InputLabel>
                    : null
                } 
                <InputInput {...props} type={ props.type === 'password' && visible ? 'text' : props.type } placeholder={props.placeholder ? props.placeholder : props.label ? props.label : ``} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
                {
                    props.type === 'password' ? 
                    <InputAction onClick={ () => setVisible(!visible) }>
                        <InputIcon src={'/icons/eye.svg'} />
                    </InputAction> : null
                } 
                {
                    props.icon ? 
                    <InputAction onClick={ props.onCLick }>
                        <InputIcon src={props.icon} />
                    </InputAction> : null
                }
            </InputContainer> 
        </>
    );
}