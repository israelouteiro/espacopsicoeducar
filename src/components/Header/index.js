import React, { useState } from 'react'

import { Row, Col, Container } from 'reactstrap'; 
import { useHistory } from 'react-router-dom';
 
import { 
    HeaderContainer,
    RowCenter,
    RowEnd,
    AppLogo,
    HeaderLeftMenu,
    HeaderMenuItem,
    HeaderMobile,
    MenuIcon,
    HeaderMobileMenu,
    HeaderMobileItem
} from './styled';

import { 
    Touch,
    ButtonWhite
} from 'ui/styled';

export default function Header(){
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const history = useHistory();

    const navigate = to => history.push(`/${ to }`);

    const options = {
        left:[
            { title:'Espaço Psico Educar', active:true, action:() => navigate('') },
            // { title:'About', action:() => navigate('about') }
        ],
        // right:[ 
        //     { title:'Entrar', button:true, action:() => navigate('login') },
        //     { title:'Registre-se', button:true, outline:true, action:() => navigate('register') },
        // ]
    }
    
    return (
        <>
            <HeaderContainer>
                <Container fluid>
                    <Row>
                        <Col md={{ size:7 }}> 
                            <RowCenter>
                                <AppLogo />
                                <HeaderLeftMenu>
                                    {
                                        options?.left?.map((item, key) => item.button ? 
                                            <ButtonWhite key={key} outline={item.outline} onClick={item.action}>{ item.title }</ButtonWhite> 
                                                :
                                            <HeaderMenuItem key={key} active={item.active} onClick={item.action}>{ item.title }</HeaderMenuItem>
                                        )
                                    } 
                                </HeaderLeftMenu>
                                <HeaderMobile>
                                    <Touch className="touch" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                        <MenuIcon />
                                    </Touch>
                                    {
                                        mobileMenuOpen ? 
                                            <HeaderMobileMenu>
                                                {
                                                    [...options?.left, ...options?.right]?.map((item, key) => item.button ? 
                                                        <HeaderMobileItem key={key} centred> 
                                                            <ButtonWhite outline={item.outline} nomargin onClick={item.action}>{ item.title }</ButtonWhite> 
                                                        </HeaderMobileItem>
                                                            :
                                                        <HeaderMobileItem key={key} active={item.active} onClick={item.action}>{ item.title }</HeaderMobileItem>
                                                    )
                                                }  
                                            </HeaderMobileMenu>
                                        : null
                                    }
                                </HeaderMobile>
                            </RowCenter> 
                        </Col>
                        <Col md={{ size:5 }}>
                            <RowEnd>
                                {
                                    options?.right?.map((item, key) => item.button ? 
                                        <ButtonWhite key={key} outline={item.outline} onClick={item.action}>{ item.title }</ButtonWhite> 
                                            :
                                        <HeaderMenuItem key={key} className={item.active ? "active" : ""} onClick={item.action}>{ item.title }</HeaderMenuItem>
                                    )
                                } 
                            </RowEnd>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
        </>
    )
}