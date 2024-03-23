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
        { title: 'Descubra como podemos adaptar nossos serviços às necessidades específicas de seu filho ou adolescente, oferecendo apoio personalizado para promover seu desenvolvimento emocional e cognitivo.', image: '/images/banner-3.jpg' },
        { title: 'Saiba mais sobre nossos profissionais qualificados e nossa abordagem empática e centrada no cliente, projetada para criar um ambiente acolhedor e seguro para seu filho se abrir e crescer.', image: '/images/banner-1.jpg'  },
        { title: 'Explore nossos horários flexíveis e opções de pagamento para encontrar a melhor solução que se encaixe em sua agenda e orçamento. Não deixe que as barreiras logísticas impeçam seu filho de receber o apoio necessário. Entre em contato hoje mesmo para mais detalhes!', image: '/images/banner-4.jpg'  },
    ]
    return ( 
        <> 
            <MoreInfosContainer> 
                <MoreInfosDecoration />
                <Container>
                    <Row>
                        <Col> 
                            <MoreInfosTitle>
                                Descubra Mais sobre Nossos Serviços de Apoio Psicoeducacional
                            </MoreInfosTitle>
                            <MoreInfosText>
                                Conheça Nossa Abordagem Personalizada, Profissionais Qualificados e Opções Flexíveis para uma Jornada de Crescimento Emocional
                            </MoreInfosText> 
                        </Col>
                    </Row> 
                    <Row>
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