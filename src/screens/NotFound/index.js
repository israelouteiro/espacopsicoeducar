import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import SEO from "components/SEO";
import Button from "components/Button";
import ContainerLandpage from "containers/Landpage";
import {
    Content,
    ErrorTag,
    ErrorTitle,
    ErrorText,
    ErrorActions,
    ErrorGhost
} from "./styled";

export default function NotFound(){ 
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goHome = () => {
        history.push("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return ( 
        <ContainerLandpage>
            <SEO
                title="Pagina nao encontrada | Espaco PsicoEducar"
                description="A pagina que voce tentou acessar nao foi encontrada. Volte para o inicio e continue navegando pelo site."
                path="/404"
                robots="noindex,follow"
            />

            <Content>
                <Container>
                    <Row className="g-4 g-lg-5 align-items-end">
                        <Col lg={{ size: 8 }}>
                            <ErrorTag>Erro 404</ErrorTag>
                            <ErrorTitle>Essa pagina nao esta disponivel.</ErrorTitle>
                            <ErrorText>
                                O endereco pode ter sido alterado ou removido. Volte para a pagina inicial
                                para continuar a navegacao e acessar as principais secoes do Espaco PsicoEducar.
                            </ErrorText>
                            <ErrorActions>
                                <Button primary onClick={goHome}>
                                    Voltar ao inicio
                                </Button>
                                <Button
                                    primary
                                    outline
                                    onClick={() => window.open("https://wa.me/5561983447457", "whatsapp")}
                                >
                                    Falar no WhatsApp
                                </Button>
                            </ErrorActions>
                        </Col>
                        <Col lg={{ size: 4 }}>
                            <ErrorGhost>404</ErrorGhost>
                        </Col>
                    </Row>
                </Container>
            </Content>
        </ContainerLandpage>
    );
}
