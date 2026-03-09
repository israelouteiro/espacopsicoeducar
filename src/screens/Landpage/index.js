import React, { useEffect, useMemo } from "react";
 
import Banner from "components/Landpage/Banner";
import HowWorks from 'components/Landpage/HowWorks'
import MoreInfos from 'components/Landpage/MoreInfos'
import CommomCases from 'components/Landpage/CommomCases'
import KnowMore from 'components/Landpage/KnowMore'
import LittleMore from 'components/Landpage/LittleMore' 
import SEO from "components/SEO";

import ContainerLandpage from "containers/Landpage";
import { getSiteUrl } from "utils/seo";

export default function Landpage(){ 
    const siteUrl = getSiteUrl();

    const structuredData = useMemo(() => {
        const sections = [
            { id: "metodologia", name: "Metodologia" },
            { id: "pratica", name: "Como isso acontece na pratica" },
            { id: "conceito", name: "Psicoeducacao contemporanea" },
            { id: "biblioteca", name: "Biblioteca" },
            { id: "quem-somos", name: "Quem somos" },
            { id: "contato", name: "Contato" }
        ];

        return [
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Espaco PsicoEducar",
                url: `${siteUrl}/`,
                logo: `${siteUrl}/logo1024.png`,
                sameAs: [
                    "https://instagram.com/espacopsicoeeducar"
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Espaco PsicoEducar",
                url: `${siteUrl}/`,
                inLanguage: "pt-BR"
            },
            {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "Espaco PsicoEducar",
                url: `${siteUrl}/`,
                inLanguage: "pt-BR",
                description: "Psicologia e psicoeducacao para criancas, adolescentes e familias com metodo, afeto e direcao.",
                hasPart: sections.map((item) => ({
                    "@type": "WebPageElement",
                    name: item.name,
                    url: `${siteUrl}/#${item.id}`
                }))
            },
            {
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Secoes principais da pagina inicial",
                itemListElement: sections.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: item.name,
                    url: `${siteUrl}/#${item.id}`
                }))
            }
        ];
    }, [siteUrl]);

    useEffect(() => {
        const pendingSection = sessionStorage.getItem('pending-land-section')

        if(!pendingSection){
            return undefined
        }

        sessionStorage.removeItem('pending-land-section')
        const timer = window.setTimeout(() => {
            const target = document.getElementById(pendingSection)

            if(pendingSection === 'inicio'){
                window.scrollTo({ top: 0, behavior: 'smooth' })
                return
            }

            if(target){
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }, 120)

        return () => window.clearTimeout(timer)
    }, [])
 
    return ( 
        <ContainerLandpage> 
                <SEO
                    title="Espaco PsicoEducar | Psicologia e Psicoeducacao para criancas e adolescentes"
                    description="Atendimento psicologico e psicoeducacional para criancas, adolescentes e familias. Metodo, acolhimento e direcao para o desenvolvimento emocional."
                    path="/"
                    image="/images/gpt/hero-therapy.png"
                    structuredData={structuredData}
                />
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
