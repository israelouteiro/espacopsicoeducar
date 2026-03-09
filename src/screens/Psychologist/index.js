import React, { useEffect, useMemo } from "react";

import { Container, Row, Col } from "reactstrap";

import ContainerLandpage from "containers/Landpage";
import SEO from "components/SEO";
import { getSiteUrl } from "utils/seo";

import {
    Page,
    HeroSection,
    HeroTag,
    HeroTitle,
    HeroText,
    HeroPhotoFrame,
    HeroPhoto,
    HeroPhotoCaption,
    HeroAside,
    HeroAsideTitle,
    HeroAsideText,
    Section,
    SectionTag,
    SectionTitle,
    SectionText,
    Emphasis,
    SpecsList,
    SpecsItem,
    FlowList,
    FlowItem,
    FlowTitle,
    FlowText,
    Signature
} from "./styled";

const specialties = [
    "Psicopedagogia",
    "Neuropsicologia",
    "Terapia Cognitivo-Comportamental (TCC) para crianças e adolescentes",
    "Orientação parental e fortalecimento de vínculos familiares"
];

const experienceFlow = [
    {
        title: "Atendimento clínico com base científica",
        text: "Acompanhamento psicológico para crianças e adolescentes, com escuta qualificada e estratégias estruturadas para desenvolvimento emocional e cognitivo."
    },
    {
        title: "Orientação parental para decisões mais seguras",
        text: "Suporte às famílias para construir relações consistentes, com limites claros, diálogo saudável e maior previsibilidade no dia a dia."
    },
    {
        title: "Intervenções integradas entre educação e saúde mental",
        text: "Ações que conectam escola, rotina familiar e desenvolvimento socioemocional, promovendo crescimento integral em cada fase da infância e adolescência."
    }
];

export default function Psychologist(){
    const siteUrl = getSiteUrl();

    const structuredData = useMemo(() => ([
        {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Regina Mendes",
            jobTitle: "Pedagoga e Psicologa",
            description: "Pedagoga e psicologa com atuacao dedicada ao desenvolvimento emocional, educacional e cognitivo de criancas e adolescentes.",
            worksFor: {
                "@type": "Organization",
                name: "Espaco PsicoEducar",
                url: `${siteUrl}/`
            },
            knowsAbout: [
                "Psicopedagogia",
                "Neuropsicologia",
                "Terapia Cognitivo-Comportamental para criancas e adolescentes",
                "Orientacao parental"
            ],
            url: `${siteUrl}/psicologa`
        },
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Regina Mendes | Espaco PsicoEducar",
            url: `${siteUrl}/psicologa`,
            inLanguage: "pt-BR",
            description: "Conheca a trajetoria e a atuacao da psicologa Regina Mendes no Espaco PsicoEducar."
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Inicio",
                    item: `${siteUrl}/`
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Psicologa",
                    item: `${siteUrl}/psicologa`
                }
            ]
        }
    ]), [siteUrl]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ContainerLandpage>
            <Page>
                <SEO
                    title="Regina Mendes | Psicologa e Pedagoga | Espaco PsicoEducar"
                    description="Apresentacao profissional de Regina Mendes: psicologa, pedagoga, psicopedagoga e orientadora parental no Espaco PsicoEducar."
                    path="/psicologa"
                    image="/images/gpt/psicologa-regina.png"
                    type="profile"
                    structuredData={structuredData}
                />
                <HeroSection>
                    <Container>
                        <Row>
                            <Col>
                                <HeroTag>Apresentação</HeroTag>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <HeroTitle>Regina Mendes</HeroTitle>
                            </Col>
                        </Row>
                        <Row className="gy-5 align-items-start">
                            <Col lg={{ size: 2 }}>
                                <HeroPhotoFrame>
                                    <HeroPhoto />
                                </HeroPhotoFrame>
                                <HeroPhotoCaption>Psicóloga e pedagoga</HeroPhotoCaption>
                            </Col>
                            <Col lg={{ size: 10 }}>
                                <HeroText>
                                    Pedagoga e psicóloga com atuação dedicada ao desenvolvimento emocional,
                                    educacional e cognitivo de crianças e adolescentes.
                                </HeroText>
                                <HeroAside>
                                    <HeroAsideTitle>Espaço Psicoeducar</HeroAsideTitle>
                                    <HeroAsideText>
                                        Idealizadora de um espaço de cuidado com a saúde emocional, apoio ao
                                        desenvolvimento educacional e fortalecimento das relações familiares.
                                    </HeroAsideText>
                                </HeroAside>
                            </Col>
                        </Row>
                    </Container>
                </HeroSection>

                <Section>
                    <Container>
                        <Row className="gy-5 align-items-start">
                            <Col lg={{ size: 7 }}>
                                <SectionTag>Trajetória</SectionTag>
                                <SectionTitle>
                                    Educação e psicologia conectadas para apoiar cada etapa do desenvolvimento.
                                </SectionTitle>
                                <SectionText>
                                    Ao longo da trajetória profissional, Regina Mendes construiu ampla experiência
                                    na interface entre educação e saúde mental, realizando atendimentos clínicos,
                                    orientação a pais e intervenções que favorecem o desenvolvimento integral de
                                    crianças e jovens.
                                </SectionText>
                                <SectionText>
                                    Seu trabalho integra <Emphasis>conhecimento científico, prática educativa e
                                    sensibilidade no cuidado</Emphasis>, oferecendo suporte consistente para crianças,
                                    adolescentes e suas famílias.
                                </SectionText>
                            </Col>
                            <Col lg={{ size: 5 }}>
                                <SectionTag>Formação e Especialidades</SectionTag>
                                <SpecsList>
                                    {
                                        specialties.map((item) => (
                                            <SpecsItem key={item}>{item}</SpecsItem>
                                        ))
                                    }
                                </SpecsList>
                            </Col>
                        </Row>
                    </Container>
                </Section>

                <Section soft>
                    <Container>
                        <SectionTag>Como é o cuidado</SectionTag>
                        <SectionTitle>
                            Uma atuação próxima, técnica e humana com crianças, adolescentes e famílias.
                        </SectionTitle>
                        <FlowList>
                            {
                                experienceFlow.map((item) => (
                                    <FlowItem key={item.title}>
                                        <FlowTitle>{item.title}</FlowTitle>
                                        <FlowText>{item.text}</FlowText>
                                    </FlowItem>
                                ))
                            }
                        </FlowList>
                    </Container>
                </Section>

                <Section>
                    <Container>
                        <Row className="gy-4">
                            <Col lg={{ size: 9 }}>
                                <SectionTag>Literatura Infantil</SectionTag>
                                <SectionTitle>
                                    Escrita como ferramenta de vínculo, reflexão e desenvolvimento socioemocional.
                                </SectionTitle>
                                <SectionText>
                                    Além da prática clínica, Regina Mendes também é escritora de livros infantis,
                                    utilizando a literatura como recurso para promover aprendizado emocional,
                                    reflexão e desenvolvimento de habilidades socioemocionais.
                                </SectionText>
                                <Signature>
                                    A proposta é clara: unir afeto, direção e ciência para que crianças e jovens
                                    cresçam com mais autonomia emocional, e para que as famílias se fortaleçam nesse
                                    processo.
                                </Signature>
                            </Col>
                        </Row>
                    </Container>
                </Section>
            </Page>
        </ContainerLandpage>
    );
}
