import React from "react";  

import Header from 'components/Header'
import Footer from 'components/Footer' 

import { 
    Content
} from "./styled"; 

export default function ContainerLandpage({ children }){ 
 
    return ( 
        <Content>
            <Header />
                { children }
            <Footer /> 
        </Content>
    );
}