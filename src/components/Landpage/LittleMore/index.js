import React from "react";

import { Row, Col, Container } from 'reactstrap';

import {
    MoreContainer,
    MoreTag,
    MoreTitle,
    MoreText,
    MoreVisual,
    MoreVisualHeader,
    MoreVisualEyebrow,
    MoreVisualTitle,
    MoreVisualList,
    MoreVisualItem,
    MoreVisualImage,
    MoreDecoration
} from './styled'

export default function LittleMore(){

    return (
        <>
            <MoreContainer>
                <Container>
                    <Row className="align-items-center g-4 g-lg-5">
                        <Col md={{size:7}}>
                            <MoreTag>INSTITUCIONAL</MoreTag>
                            <MoreTitle>Quem somos</MoreTitle>
                            <MoreText>
                                <p>
                                    O Espaço PsicoEducar é um núcleo especializado no desenvolvimento emocional e
                                    psicoeducacional de crianças e adolescentes. Nossa atuação combina rigor técnico,
                                    acolhimento e comunicação contemporânea para atender as demandas reais das famílias.
                                </p>
                                <p>
                                    Trabalhamos com planos individualizados, metas claras e acompanhamento contínuo,
                                    valorizando a parceria com responsáveis e escola. Nosso compromisso é formar jovens
                                    mais conscientes, autônomos e preparados para os desafios do presente e do futuro.
                                </p>
                            </MoreText>
                        </Col>
                        <Col md={{size:5}}>
                            <MoreVisual>
                                <MoreVisualHeader>
                                    <div>
                                        <MoreVisualEyebrow>Espaco Psico Educar</MoreVisualEyebrow>
                                        <MoreVisualTitle>Cuidado emocional com metodo e direcao.</MoreVisualTitle>
                                    </div>
                                </MoreVisualHeader>
                                <MoreVisualList>
                                    <MoreVisualItem>Planos individualizados com metas claras.</MoreVisualItem>
                                    <MoreVisualItem>Equipe multiprofissional e linguagem atual.</MoreVisualItem>
                                    <MoreVisualItem>Parceria ativa entre familia, escola e jovem.</MoreVisualItem>
                                </MoreVisualList>
                                <MoreVisualImage />
                            </MoreVisual>
                        </Col>
                    </Row>
                </Container>
                <MoreDecoration />
            </MoreContainer>
        </>
    );
}
