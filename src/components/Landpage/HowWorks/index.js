import React from "react";

import { Row, Col, Container } from 'reactstrap';

import HowWorksItem from './Item'

import {
    HowWorksContainer,
    HowWorksDecoration,
    HowWorksTitleContent,
    HowWorksTitle,
    HowWorksText,
    HowWorksTimeline
} from './styled'

export default function HowWorks(){

    const timelineItems = [
        {
            scope: 'Familias',
            subtitle: 'Diagnostico sensivel e objetivo',
            text: 'Iniciamos com uma leitura tecnica da rotina familiar, escolar e emocional da crianca ou adolescente, identificando prioridades com olhar humano e precisao clinica.'
        },
        {
            scope: 'Jovens',
            subtitle: 'Educacao emocional aplicada',
            text: 'Trabalhamos emocoes com linguagem acessivel, atividades praticas e conversas guiadas para transformar sentimentos em decisoes mais conscientes no dia a dia.'
        },
        {
            scope: 'Familias',
            subtitle: 'Plano de acao com metas claras',
            text: 'Organizamos objetivos mensuraveis para comportamento, vinculo e desenvolvimento socioemocional, garantindo que a familia compreenda cada etapa do processo.'
        },
        {
            scope: 'Jovens',
            subtitle: 'Grupos criativos e colaborativos',
            text: 'Os encontros em grupo fortalecem pertencimento, escuta e cooperacao, criando um ambiente seguro para construir repertorio social com autenticidade.'
        },
        {
            scope: 'Familias',
            subtitle: 'Acompanhamento continuo',
            text: 'Mantemos comunicacao estrategica com responsaveis e, quando necessario, com a escola, para alinhar intervencoes e sustentar avancos consistentes.'
        },
        {
            scope: 'Jovens',
            subtitle: 'Autonomia com responsabilidade',
            text: 'Acompanhamos o jovem na construcao de rotina, autoestima e senso de responsabilidade, sem perder identidade, curiosidade e protagonismo.'
        },
        {
            scope: 'Jovens',
            subtitle: 'Projeto de vida e futuro',
            text: 'Ajudamos cada adolescente a organizar metas pessoais e academicas com clareza, para que escolhas importantes sejam feitas com mais seguranca.'
        }
    ]

    return (
        <>
            <HowWorksContainer>
                <HowWorksDecoration />
                <Container>
                    <Row>
                        <Col>
                            <HowWorksTitleContent>
                                <HowWorksTitle>Psicoeducacao contemporanea, com afeto e direcao.</HowWorksTitle>
                                <HowWorksText>
                                    Unimos ciencia, escuta qualificada e linguagem atual para apoiar o desenvolvimento emocional
                                    de criancas e adolescentes. O resultado e um processo estruturado para tranquilizar as familias
                                    e, ao mesmo tempo, inspirar jovens a crescer com presenca, repertorio e confianca.
                                </HowWorksText>
                            </HowWorksTitleContent>
                        </Col>
                    </Row>

                    <HowWorksTimeline>
                        {
                            timelineItems.map((item, key) => (
                                <HowWorksItem
                                    key={key}
                                    number={String(key + 1).padStart(2, '0')}
                                    subtitle={item.subtitle}
                                    text={item.text}
                                    scope={item.scope}
                                    side={key % 2 === 0 ? 'left' : 'right'}
                                />
                            ))
                        }
                    </HowWorksTimeline>
                </Container>
            </HowWorksContainer>
        </>
    );
}
