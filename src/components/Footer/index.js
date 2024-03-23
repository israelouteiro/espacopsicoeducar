import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 
import { useHistory } from 'react-router-dom';

import {
    FooterContainer,
    FooterLogo,
    FooterTitle,
    FooterText,
    FooterLink,
    FooterLinkImage,
    FooterSection,
    FooterPhoneContent,
    FooterPhoneIcon,
    FooterCopyright,
    UniLogo
} from './styled' 

export default function Footer(){ 
 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    return ( 
        <> 
            <FooterContainer>
                <Container>
                    <Row>
                        <Col md={{size:5}}>
                            <FooterLogo />
                            <FooterTitle>Espaço Psico Educar</FooterTitle>
                            <FooterText>Quadra 7 - Bloco F, sala 207 - Sobradinho/DF</FooterText>
                            <FooterPhoneContent>
                                <FooterPhoneIcon />
                                <FooterLink>(61) 98344-7457</FooterLink>
                            </FooterPhoneContent>
                        </Col>
                        <Col md={{size:7}}>
                            <Row>
                                <Col md={{size:6}}>
                                    <FooterSection>
                                        <FooterTitle>&nbsp;</FooterTitle>
                                        {/* <FooterLink onClick={() => navigate('')}>Landpage</FooterLink> */}
                                        {/* <FooterLink onClick={() => navigate('about')}>About</FooterLink> */}
                                    </FooterSection>
                                </Col>
                                <Col md={{size:6}}> 
                                    <FooterSection>
                                        <FooterTitle>Follow us</FooterTitle>
                                        <FooterLink onClick={() => window.open('https://instagram.com/espacopsicoeeducar', 'instagram')}>
                                            <FooterLinkImage src={'/icons/insta.svg'} />
                                            Instagram
                                        </FooterLink>
                                        {/* <FooterLink>
                                            <FooterLinkImage src={'/icons/face.svg'} />
                                            Facebook
                                        </FooterLink>  */}
                                    </FooterSection>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col > 
                            <FooterCopyright>
                                Powered by Unicorn Tech House ® 2024
                                <br />
                                <UniLogo onClick={() => window.open('https://unicorntechhouse.com', 'uni')} />
                            </FooterCopyright> 
                        </Col> 
                    </Row>
                </Container>
            </FooterContainer>
        </>
    );
}