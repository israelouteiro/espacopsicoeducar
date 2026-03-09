import React from "react";
import {
    HowWorkStep,
    HowWorkStepNumber,
    HowWorkScope,
    HowWorkStepTitle,
    HowWorkStepText,
    HowWorkDot,
    HowWorkConnector
} from "./styled";

export default function HowWorksItem(props){
    return (
        <>
            <HowWorkStep side={props.side}>
                <HowWorkDot side={props.side} />
                <HowWorkConnector side={props.side} />
                <HowWorkStepNumber>{props.number}</HowWorkStepNumber>
                <HowWorkScope>{props.scope}</HowWorkScope>
                <HowWorkStepTitle>{props.subtitle}</HowWorkStepTitle>
                <HowWorkStepText dangerouslySetInnerHTML={{ __html:props.text }} />
            </HowWorkStep>
        </>
    );
}
