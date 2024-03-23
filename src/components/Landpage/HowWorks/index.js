import React, { useState } from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
 
import ToggleTab from 'components/Landpage/Toggle/Tab'
import HowWorksItem from './Item'

import {
    HowWorksContainer,
    HowWorksDecoration,
    HowWorksTitleContent,
    HowWorksTitle,
    HowWorksText
} from './styled'

export default function HowWorks(){

    const [activeTab, setActive] = useState(0)

    const tabOptions = [
        { title:'Construindo Caminhos para o Desenvolvimento Integral' },
        { title:'Fortalecendo Vínculos, Cultivando Resiliência' }
    ]

    const optionsReady = [


        {
            number: '1',
            subtitle: 'Educação Emocional',
            text: 'Priorizamos o desenvolvimento da inteligência emocional, fornecendo ferramentas e técnicas para que as crianças e adolescentes compreendam, expressem e gerenciem suas emoções de forma saudável e construtiva.'
        },
        {
            number: '2',
            subtitle: 'Grupos de Apoio',
            text: 'Facilitamos grupos de apoio onde os participantes podem compartilhar experiências, aprender uns com os outros e construir relações de apoio mútuo em um ambiente seguro e empático.'
        },
        {
            number: '3',
            subtitle: 'Integração Escola-Comunidade',
            text: 'Trabalhamos em estreita colaboração com escolas e comunidades locais para promover uma abordagem holística no apoio ao desenvolvimento das crianças e adolescentes, buscando uma integração harmoniosa entre o ambiente escolar, familiar e social.'
        },
        {
            number: '4',
            subtitle: 'Empoderamento e Autonomia',
            text: 'Nosso objetivo final é capacitar cada jovem a se tornar uma pessoa autônoma, confiante e resiliente, capaz de enfrentar os desafios da vida com coragem e determinação, construindo um futuro promissor e saudável para si mesmos.'
        }

    ]

    const optionsSchedule = [
        
        {
            number: '1',
            subtitle: 'Abordagem Personalizada',
            text: 'Nossa equipe de psicólogos e educadores se dedica a compreender as necessidades individuais de cada criança e adolescente, oferecendo um suporte emocional e estratégias adaptadas para promover seu desenvolvimento integral.'
        },
        {
            number: '2',
            subtitle: 'Workshops e Atividades Lúdicas:',
            text: 'Além das sessões individuais, proporcionamos workshops interativos e atividades lúdicas que estimulam a expressão emocional, o aprendizado e o fortalecimento das habilidades sociais, emocionais e cognitivas dos participantes.'
        },
        {
            number: '3',
            subtitle: 'Espaço de Acolhimento Familiar:',
            text: 'Entendemos a importância do apoio familiar no processo de crescimento e desenvolvimento dos jovens. Por isso, oferecemos um ambiente acolhedor onde as famílias são incentivadas a participar ativamente, recebendo orientações e apoio para promover um ambiente saudável em casa.'
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
                                <HowWorksTitle>Seja bem-vindo!</HowWorksTitle>
                                <HowWorksText>É com imensa alegria e entusiasmo que abrimos as portas do Espaço PsicoEducar, um ambiente dedicado ao bem-estar e ao desenvolvimento emocional das crianças e adolescentes. Aqui, mergulhamos profundamente no universo da psicologia, trazendo consigo o propósito de promover uma jornada de autoconhecimento, crescimento e aprendizado.</HowWorksText>
                            </HowWorksTitleContent>
                            <ToggleTab options={tabOptions} active={activeTab} onClick={setActive} /> 
                        </Col>
                    </Row>
                    <Row>
                        {
                            activeTab === 0 ? 
                                optionsSchedule.map((item, key) => 
                                    <Col key={key} md={{ size:4 }}>
                                        <HowWorksItem number={ item.number } subtitle={ item.subtitle } text={ item.text } variant={key} />
                                    </Col>
                                )
                            : null
                        } 
                        {
                            activeTab === 1 ? 
                                optionsReady.map((item, key) => 
                                    <Col key={key} md={{ size:3 }}>
                                        <HowWorksItem number={ item.number } subtitle={ item.subtitle } text={ item.text } variant={key} />
                                    </Col>
                                )
                            : null
                        } 
                    </Row>
                </Container>
            </HowWorksContainer>
        </>
    );
}