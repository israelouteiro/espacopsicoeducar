import React from "react"; 

import { Row, Col, Container } from 'reactstrap'; 

import Item from './Item'

import {
    MoreTitle,
    MoreText,
    KnowContent
} from './styled' 

export default function KnowMore(){ 

    const doctors = [
        {
            image: '/images/books/book-1.png',
            title: 'O que é o que é?',
            subtitle: 'Temas abordados: adivinhas, noção espacial, noção de grandeza, formas geométricas.',
            rate: 5,
            description: 'Pode ser uma bolinha, ou um bicho qualquer. Parece ser um prendedor, ou um leque. Pode ser grande ou pequeno, alto ou baixo Vamos começar a brincadeira o que é, o que é?',
            available: 'ISBN: 978-85-8415-104-2'
        },
        {
            image: '/images/books/book-2.png',
            title: 'Rápido como foguete',
            subtitle: 'Temas abordados: Imaginação, planetas, números, brincadeiras.',
            rate: 5,
            description: 'Que tal viajar pelo fascinante mundo dos números? Primeiro abrimos este livro e depois... iremos à escola, à rua, ao parque, rumo ao espaço, passando por lugares incríveis. E então... vamos todos juntos nessa aventura?',
            available: 'ISBN: 978-85-8415-101-1'
        },
        {
            image: '/images/books/book-3.png',
            title: 'No Meio Feito Recheio',
            subtitle: 'Temas abordados: relacionamento familiar, autoestima.',
            rate: 5,
            description: '“No Meio Feito Recheio” é uma história deliciosa, que fala dos sentimentos de um menino de quase quatro anos que está prestes a ganhar um irmãozinho. Mil interrogações começam a borbulhar em sua cabeça. E ele, junto com a mamãe, encontrará uma forma para solucionar esse problemão. Você vai amar a maneira afetuosa com que essas questões serão resolvidas.',
            available: 'ISBN: 978-85-7671-303-6'
        },
        {
            image: '/images/books/book-4.png',
            title: 'Marcelo Pipoca',
            subtitle: 'Temas abordados: comportamento, regras, rotina, relacionamento familiar e escolar.',
            rate: 5,
            description: 'Venha conhecer de perto a família Pipoca: especialmente o Marcelo Pipoca. E descubra como regras e rotina podem ajudar na vida de uma criança. Uma deliciosa história com sabor de pipoca e muita aprendizagem!',
            available: 'ISBN: 978-85-9506-066-1',
            link:"https://espacopsicoeducar.com/marcelo-pipoca"
        },
    ]
 
    return ( 
        <> 
            <KnowContent>
                <Container>
                    <Row>
                        <Col>
                            <MoreTitle>Explorando Mentes Curiosas: Nossa Biblioteca de Livros Educativos :)</MoreTitle>
                            <MoreText>Descubra Recursos Cativantes para Estimular o Aprendizado e o Desenvolvimento de Crianças e Adolescentes</MoreText>
                        </Col>
                    </Row> 
                    <Row>
                        {
                            doctors.map((item, key) => 
                                <Col key={key} md={{ size:6 }}> 
                                    <Item {...item} />
                                </Col>
                            )
                        }
                    </Row>  
                </Container> 
            </KnowContent>
        </>
    );
}