import React from "react";

import { Row, Col, Container } from 'reactstrap';

import {
    FooterContainer,
    FooterSurface,
    FooterBottom,
    FooterBrand,
    FooterLogo,
    FooterTitle,
    FooterSubtitle,
    FooterText,
    FooterLink,
    FooterSection,
    FooterStack,
    FooterLabel,
    FooterCopyright,
    UniLogo
} from './styled'

export default function Footer(){

    return (
        <>
            <FooterContainer>
                <Container>
                    <FooterSurface>
                        <Row className="g-4 g-lg-5 align-items-start">
                            <Col lg={{size:6}}>
                                <FooterBrand>
                                    <FooterLogo />
                                    <div>
                                        <FooterSubtitle>Espaco Psico Educar</FooterSubtitle>
                                        <FooterTitle>Psicoeducacao com metodo, afeto e visao de futuro.</FooterTitle>
                                    </div>
                                </FooterBrand>
                                <FooterText>Quadra 7 - Bloco F, sala 207 - Sobradinho/DF</FooterText>
                            </Col>
                            <Col sm={{size:6}} lg={{size:3}}>
                                <FooterSection>
                                    <FooterLabel>Contato</FooterLabel>
                                    <FooterStack>
                                        <FooterLink onClick={() => window.open('https://wa.me/5561983447457', 'whatsapp')}>
                                            WhatsApp: (61) 98344-7457
                                        </FooterLink>
                                        <FooterText>Atendimento para familias, criancas e adolescentes.</FooterText>
                                    </FooterStack>
                                </FooterSection>
                            </Col>
                            <Col sm={{size:6}} lg={{size:3}}>
                                <FooterSection>
                                    <FooterLabel>Canais</FooterLabel>
                                    <FooterStack>
                                        <FooterLink onClick={() => window.open('https://instagram.com/espacopsicoeeducar', 'instagram')}>
                                            Instagram
                                        </FooterLink>
                                        <FooterText>Conteudos, novidades e orientacoes em linguagem acessivel.</FooterText>
                                    </FooterStack>
                                </FooterSection>
                            </Col>
                        </Row>
                    </FooterSurface>

                    <FooterBottom>
                        <FooterCopyright>Powered by Unicorn Tech House ® 2026</FooterCopyright>
                        <UniLogo onClick={() => window.open('https://unicorntechhouse.com', 'uni')} />
                    </FooterBottom>
                </Container>
            </FooterContainer>
        </>
    );
}
