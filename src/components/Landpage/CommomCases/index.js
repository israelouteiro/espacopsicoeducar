import React from "react";

import { Row, Col, Container } from 'reactstrap';

import {
    CommomContainer,
    CommomDecoration,
    CommomTag,
    CommomTitle,
    CommomLead,
    CommomManifesto,
    CommomManifestoItem,
    CommomPillar,
    CommomPillarTitle,
    CommomPillarText
} from './styled'

export default function CommomCases(){

    const manifesto = [
        'Um ambiente de escuta ativa, presença e respeito às singularidades.',
        'Intervenções alinhadas entre família, escola e rotina social.',
        'Desenvolvimento emocional com responsabilidade, criatividade e direção.',
        'Resultados percebidos no comportamento, na autoestima e na convivência.'
    ]

    const pillars = [
        {
            title: 'Espaço de Escuta',
            text: 'Cada atendimento começa com acolhimento real e leitura técnica do contexto de vida da criança ou adolescente.'
        },
        {
            title: 'Espaço de Método',
            text: 'Planejamos metas claras, indicadores de evolução e estratégias aplicáveis dentro e fora do consultório.'
        },
        {
            title: 'Espaço de Futuro',
            text: 'Fortalecemos autonomia, repertório emocional e visão de projeto de vida para escolhas mais maduras.'
        }
    ]

    return (
        <>
            <CommomContainer>
                <CommomDecoration />
                <Container>
                    <Row className="g-4 g-lg-5 align-items-start">
                        <Col md={{size:7}}>
                            <CommomTag>ABORDAGEM CONCEITUAL</CommomTag>
                            <CommomTitle>Um ecossistema de desenvolvimento para crescer com equilíbrio.</CommomTitle>
                            <CommomLead>
                                Nosso trabalho integra psicologia, educação e cultura contemporânea para apoiar
                                crianças e adolescentes em momentos de transição, desafio e descoberta.
                            </CommomLead>
                            <CommomManifesto>
                                {
                                    manifesto.map((item, key) =>
                                        <CommomManifestoItem key={key}>{ item }</CommomManifestoItem>
                                    )
                                }
                            </CommomManifesto>
                        </Col>
                        <Col md={{size:5}}>
                            {
                                pillars.map((item, key) =>
                                    <CommomPillar key={key}>
                                        <CommomPillarTitle>{ item.title }</CommomPillarTitle>
                                        <CommomPillarText>{ item.text }</CommomPillarText>
                                    </CommomPillar>
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </CommomContainer>
        </>
    );
}
