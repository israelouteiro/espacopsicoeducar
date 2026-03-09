import React from "react";

import { Row, Col, Container } from 'reactstrap';

import Item from './Item'

import {
    MoreInfosContainer,
    MoreInfosDecoration,
    MoreInfosTitle,
    MoreInfosText
} from './styled'

export default function MoreInfos(){
    const moreInfos = [
        {
            title: 'Atendimento com escuta qualificada, avaliação cuidadosa e estratégias personalizadas para cada fase do desenvolvimento.',
            image: '/images/gpt/pratica-escuta.png'
        },
        {
            title: 'Equipe multidisciplinar com atuação ética, comunicação acolhedora e repertório atual para dialogar com as novas gerações.',
            image: '/images/gpt/pratica-equipe.png'
        },
        {
            title: 'Rotina viável para a família: horários flexíveis, orientações claras e acompanhamento consistente para manter a evolução.',
            image: '/images/gpt/pratica-rotina.png'
        },
    ]
    return (
        <>
            <MoreInfosContainer>
                <MoreInfosDecoration />
                <Container>
                    <Row>
                        <Col>
                            <MoreInfosTitle>
                                Como isso acontece na prática
                            </MoreInfosTitle>
                            <MoreInfosText>
                                Menos fórmulas prontas, mais estratégia personalizada.
                                Estruturamos cada etapa para que os pais tenham segurança no processo e os jovens se sintam parte dele.
                            </MoreInfosText>
                        </Col>
                    </Row>
                    <Row className="g-4 g-lg-5">
                        {
                            moreInfos.map((item, key) =>
                                <Col key={key} md={{ size:4 }}>
                                    <Item variant={key} title={item.title} image={item.image} secondary={ key % 2 !== 0 }/>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </MoreInfosContainer>
        </>
    );
}
