import React from "react"; 

import { Row, Col, Container } from 'reactstrap';  

import Item from './Item'

import {
    MoreInfosContainer,
    MoreInfosDecoration,
    MoreInfosTitle,
    MoreInfosText
} from './styled'

export default function MoreInfos(){ 
    const moreInfos = [
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', image: '/images/banner-3.jpg' },
        { title: 'Lorem ipsum dolor sit amet, consectetur adipiscing', image: '/images/banner-1.jpg'  },
        { title: 'Lorem ipsum dolor sit amet, consectetur', image: '/images/banner-4.jpg'  },
    ]
    return ( 
        <> 
            <MoreInfosContainer> 
                <MoreInfosDecoration />
                <Container>
                    <Row>
                        <Col> 
                            <MoreInfosTitle>
                                Lorem ipsum dolor sit amet, consectetur
                            </MoreInfosTitle>
                            <MoreInfosText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut congue nisl. Duis lobortis ante vitae
                            </MoreInfosText> 
                        </Col>
                    </Row> 
                    <Row>
                        {
                            moreInfos.map((item, key) => 
                                <Col key={key} md={{ size:4 }}> 
                                    <Item variant={key} title={item.title} image={item.image} secondary={ key % 2 !== 0 }/>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </MoreInfosContainer>
        </>
    );
}