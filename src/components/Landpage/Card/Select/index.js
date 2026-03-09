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
                <CardBannerTitle>Cuidado emocional com método e linguagem jovem.</CardBannerTitle>
                <CardBannerText>
                    Para pais e responsáveis, oferecemos clareza no acompanhamento e metas objetivas.
                    Para crianças e adolescentes, criamos um espaço de escuta real, repertório emocional
                    e estratégias práticas para escola, casa e convivência.
                </CardBannerText>
                <Button white outline onClick={() => window.open("https://wa.me/61983447457", "new")}>
                    Falar no WhatsApp
                </Button>
            </CardBanner>
        </>
    );
}
