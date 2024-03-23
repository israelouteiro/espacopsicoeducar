import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 

import {
    MoreContainer,
    MoreRow,
    MoreTitle,
    MoreLine,
    MoreText,
    MoreLogoCircle,
    MoreLogo,
    MoreDecoration
} from './styled' 

export default function LittleMore(){ 
 
    return ( 
        <> 
            <MoreContainer>
                <MoreRow>
                    <Container>
                        <Row>
                            <Col md={{size:7}}>
                                <MoreTitle>Sobre</MoreTitle>
                                <MoreLine /> 
                                <MoreText>
                                    <p>
                                        No Espaço PsicoEducar, estamos comprometidos em fornecer um ambiente seguro e acolhedor onde crianças e adolescentes possam florescer emocionalmente. Compreendemos que cada jovem é único, com suas próprias experiências, desafios e potenciais, e é por isso que nossa abordagem é completamente personalizada.
                                    </p>
                                    <p>
                                        Nossos profissionais altamente qualificados e empáticos trabalham em estreita colaboração com os jovens e suas famílias, oferecendo suporte emocional, orientação e estratégias práticas para ajudá-los a enfrentar os desafios da vida cotidiana. Acreditamos que a educação emocional é fundamental para o crescimento saudável, e é por isso que integramos atividades lúdicas, workshops interativos e grupos de apoio em nossos serviços.
                                    </p>
                                </MoreText> 
                            </Col>
                            <Col md={{size:5}}>
                                <MoreLogoCircle>
                                    <MoreLogo />
                                </MoreLogoCircle>
                            </Col>
                        </Row>
                    </Container>
                </MoreRow>
                <MoreDecoration />
            </MoreContainer>
        </>
    );
}