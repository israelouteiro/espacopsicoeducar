import React from "react";  
 
import { 
    CardBanner,
    CardBannerTitle,
    CardBannerText 
} from "./styled";

import Button from "components/Button";

export default function CardSelect(){ 

    return ( 
        <> 
            <CardBanner>
                <CardBannerTitle>Conecte-se Conosco</CardBannerTitle>
                <CardBannerText>
                    {/* Quer saber mais sobre como podemos ajudar no desenvolvimento emocional e cognitivo de seu filho ou adolescente? Entre em contato conosco hoje mesmo e junte-se à nossa comunidade de apoio e crescimento! Estamos aqui para ajudar a construir um futuro mais saudável e promissor para sua família. Ligue agora ou envie-nos um e-mail para agendar sua consulta inicial. */}
                    Estamos prontos para ouvir e ajudar. Agende sua consulta inicial hoje mesmo para dar o primeiro passo rumo ao bem-estar emocional de seu filho. Entre em contato agora!
                </CardBannerText> 
                <Button secondary onClick={() => window.open("https://wa.me/61983447457", "new")}>
                    Entrar em contato
                </Button>
            </CardBanner> 
        </> 
    );
}