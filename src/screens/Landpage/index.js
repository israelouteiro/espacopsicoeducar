import React from "react"; 
 
import Banner from "components/Landpage/Banner";
import HowWorks from 'components/Landpage/HowWorks'
import MoreInfos from 'components/Landpage/MoreInfos'
import CommomCases from 'components/Landpage/CommomCases'
import KnowMore from 'components/Landpage/KnowMore'
import LittleMore from 'components/Landpage/LittleMore' 

import ContainerLandpage from "containers/Landpage";

export default function Landpage(){ 
 
    return ( 
        <ContainerLandpage> 

                <Banner /> 
                <HowWorks /> 
                <MoreInfos />
                <CommomCases /> 
                <KnowMore /> 
                <LittleMore />  
 
        </ContainerLandpage>
    );
}