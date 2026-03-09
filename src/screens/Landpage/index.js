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
                <section id="inicio" data-land-section>
                    <Banner />
                </section>
                <section id="metodologia" data-land-section>
                    <HowWorks />
                </section>
                <section id="pratica" data-land-section>
                    <MoreInfos />
                </section>
                <section id="conceito" data-land-section>
                    <CommomCases />
                </section>
                <section id="biblioteca" data-land-section>
                    <KnowMore />
                </section>
                <section id="quem-somos" data-land-section>
                    <LittleMore />
                </section>
 
        </ContainerLandpage>
    );
}
