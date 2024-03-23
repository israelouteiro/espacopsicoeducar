import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
  
import {
    CommomContainer,
    CommomDecoration,
    CommomTitle,
    CommomList,
    CommomListItem,
    CommomAnimation
} from './styled'

export default function CommomCases(){ 

    const commomLeft = [
        { title:"Um refúgio para mentes jovens." },
        { title:"Acolhimento e crescimento." },
        { title:"Onde a curiosidade floresce." },
        { title:"Cuidado e compreensão em cada sessão." },
        { title:"Promovendo um ambiente de aprendizado positivo." },
        { title:"Cada criança é única, cada jornada é valorizada." },
        { title:"Construindo confiança, cultivando resiliência." },
        { title:"Aqui, o bem-estar emocional vem em primeiro lugar." },
        { title:"Explorando emoções, nutrindo habilidades." },
        { title:"Um espaço seguro para expressão e descoberta." },
        { title:"Criando conexões que inspiram crescimento." },

        { title:"Juntos, construímos um caminho para um amanhã melhor." },
    ]

    const commomRight = [ 
        { title:"Onde os desafios se transformam em oportunidades." },
        { title:"Aprendendo juntos, crescendo juntos." },
        { title:"Incentivando a autonomia e a autoestima." },
        { title:"Construindo um futuro mais brilhante, um passo de cada vez." },
        { title:"Valorizamos cada sorriso, cada lágrima, cada conquista." },
        { title:"Um lugar onde os sonhos ganham asas." },
        { title:"Desenvolvendo mentes criativas e corações compassivos." },
        { title:"Nosso compromisso é com o seu bem-estar." },
        { title:"Aqui, todos são bem-vindos e ouvidos." },
        { title:"Transformando desafios em oportunidades de crescimento." },
    ]

    return ( 
        <> 
            <CommomContainer> 
                <CommomDecoration />
                <Container>
                    <Row>
                        <Col>
                            <CommomTitle> Imersão no Mundo do Desenvolvimento Infantil e Adolescente </CommomTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:7}}>
                            <Row>
                                <Col md={{size:6}}>
                                    <CommomList>
                                        {
                                            commomLeft.map((item, key) => 
                                                <CommomListItem key={key}>
                                                    { item.title }
                                                </CommomListItem>
                                            )
                                        }
                                    </CommomList>
                                </Col>
                                <Col md={{size:6}}>
                                    <CommomList>
                                        {
                                            commomRight.map((item, key) => 
                                                <CommomListItem key={key}>
                                                    { item.title }
                                                </CommomListItem>
                                            )
                                        }
                                    </CommomList>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={{size:5}}>
                            <CommomAnimation animationData={require('assets/lotties/particles.json')} />
                            {/* <img src={'/images/taon-illustration1.svg'} className="commom-cases-image"/> */}
                        </Col>
                    </Row>
                </Container>
            </CommomContainer>
        </>
    );
}