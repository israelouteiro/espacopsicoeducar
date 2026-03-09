import React from "react";

import { Row, Col, Container } from 'reactstrap';

import Item from './Item'

import {
    MoreTitle,
    MoreText,
    KnowContent,
    KnowTimeline
} from './styled'

export default function KnowMore(){

    const doctors = [
        {
            image: '/images/books/book-1.png',
            title: 'O que é o que é?',
            subtitle: 'Foco pedagógico: linguagem, lógica, noção espacial e criatividade.',
            rate: 5,
            description: 'Uma proposta lúdica que amplia vocabulário, pensamento simbólico e curiosidade intelectual, com perguntas que convidam crianças e adultos a aprender juntos.',
            available: 'ISBN: 978-85-8415-104-2'
        },
        {
            image: '/images/books/book-2.png',
            title: 'Rápido como foguete',
            subtitle: 'Foco pedagógico: imaginação, números, planetas e sequências.',
            rate: 5,
            description: 'Uma jornada narrativa que incentiva raciocínio matemático e exploração criativa, conectando brincadeira, conhecimento e vínculo familiar.',
            available: 'ISBN: 978-85-8415-101-1'
        },
        {
            image: '/images/books/book-3.png',
            title: 'No Meio Feito Recheio',
            subtitle: 'Foco socioemocional: autoestima, família e pertencimento.',
            rate: 5,
            description: 'A história acolhe sentimentos comuns da infância diante de mudanças familiares e oferece uma linguagem afetiva para conversas importantes em casa.',
            available: 'ISBN: 978-85-7671-303-6'
        },
        {
            image: '/images/books/book-4.png',
            title: 'Marcelo Pipoca',
            subtitle: 'Foco comportamental: rotina, regras e convivência escolar.',
            rate: 5,
            description: 'Um recurso prático para trabalhar limites com leveza, fortalecendo autonomia e organização sem perder afeto e senso de pertencimento.',
            available: 'ISBN: 978-85-9506-066-1',
            link:"https://espacopsicoeducar.com/marcelo-pipoca"
        },
    ]

    const orderedTitles = [
        'Marcelo Pipoca',
        'No Meio Feito Recheio',
        'Rápido como foguete',
        'O que é o que é?'
    ]

    const orderedBooks = orderedTitles
        .map((title) => doctors.find((item) => item.title === title))
        .filter(Boolean)

    return (
        <>
            <KnowContent>
                <Container>
                    <Row>
                        <Col>
                            <MoreTitle>Biblioteca viva: repertório para ler, dialogar e evoluir.</MoreTitle>
                            <MoreText>
                                Curadoria em formato editorial para famílias que desejam aprofundar temas de desenvolvimento
                                e para jovens que aprendem melhor quando o conteúdo faz sentido na vida real.
                            </MoreText>
                        </Col>
                    </Row>
                    <Row className="g-4 g-lg-5">
                        <Col md={{ size: 12 }}>
                            <KnowTimeline>
                                {
                                    orderedBooks.map((item, key) =>
                                        <Item
                                            key={item.title}
                                            {...item}
                                            featured={item.title === 'Marcelo Pipoca'}
                                            index={key}
                                            side={key % 2 === 0 ? 'left' : 'right'}
                                        />
                                    )
                                }
                            </KnowTimeline>
                        </Col>
                    </Row>
                </Container>
            </KnowContent>
        </>
    );
}
