import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useHistory, useLocation } from 'react-router-dom'

import { Row, Col, Container } from 'reactstrap';

import {
    HeaderContainer,
    RowCenter,
    AppLogo,
    HeaderLeftMenu,
    HeaderMenuItem,
    HeaderMobile,
    MenuIcon,
    HeaderMobileOverlay,
    HeaderMobileMenu,
    HeaderMobileAction,
    HeaderMobileClose,
    HeaderMobileCloseIcon,
    HeaderMobileItem
} from './styled';

import {
    Touch
} from 'ui/styled';

const sections = [
    { id: 'inicio', title: 'Inicio' },
    { id: 'psicologa-link', title: 'Psicóloga', type: 'route', path: '/psicologa' },
    { id: 'metodologia', title: 'Metodologia' },
    { id: 'pratica', title: 'Pratica' },
    { id: 'conceito', title: 'Conceito' },
    { id: 'biblioteca', title: 'Biblioteca' },
    { id: 'quem-somos', title: 'Quem Somos' },
    { id: 'contato', title: 'Contato' }
]

const landSections = sections.filter((item) => item.type !== 'route')

export default function Header(){
    const history = useHistory()
    const location = useLocation()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('inicio')
    const [scrolled, setScrolled] = useState(false)

    const scrollToSection = (id, closeMenu = true) => {
        const target = document.getElementById(id)

        if(id === 'inicio'){
            window.scrollTo({ top: 0, behavior: 'smooth' })
            if(closeMenu){
                setMobileMenuOpen(false)
            }
            return
        }

        if(target){
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }

        if(closeMenu){
            setMobileMenuOpen(false)
        }
    }

    const handleLogoClick = () => {
        if(location.pathname !== '/'){
            history.push('/')
            setMobileMenuOpen(false)
            return
        }

        scrollToSection('inicio')
    }

    const handleMenuClick = (item) => {
        if(item.type === 'route' && item.path){
            if(location.pathname !== item.path){
                history.push(item.path)
            }
            setMobileMenuOpen(false)
            return
        }

        const targetOnCurrentPage = document.getElementById(item.id)
        if(targetOnCurrentPage){
            scrollToSection(item.id)
            return
        }

        if(location.pathname !== '/'){
            sessionStorage.setItem('pending-land-section', item.id)
            history.push('/')
            setMobileMenuOpen(false)
            return
        }

        scrollToSection(item.id)
    }

    useEffect(() => {
        if(location.pathname !== '/'){
            setActiveSection(location.pathname === '/psicologa' ? 'psicologa-link' : '')
            setScrolled(true)
            return undefined
        }

        const onScroll = () => {
            const y = window.scrollY || 0
            const marker = y + 150

            setScrolled(y > 24)

            let current = 'inicio'
            landSections.forEach(({ id }) => {
                const element = document.getElementById(id)
                if(element && marker >= element.offsetTop){
                    current = id
                }
            })

            setActiveSection(current)
        }

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [location.pathname])

    useEffect(() => {
        if(!mobileMenuOpen){
            return undefined
        }

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [mobileMenuOpen])

    useEffect(() => {
        const onResize = () => {
            if(window.innerWidth > 1100){
                setMobileMenuOpen(false)
            }
        }

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <>
            <HeaderContainer scrolled={scrolled}>
                <Container fluid>
                    <Row>
                        <Col>
                            <RowCenter>
                                <AppLogo onClick={handleLogoClick} />

                                <HeaderLeftMenu>
                                    {
                                        sections.map((item) => (
                                            <HeaderMenuItem
                                                key={item.id}
                                                active={activeSection === item.id}
                                                onClick={() => handleMenuClick(item)}
                                            >
                                                { item.title }
                                            </HeaderMenuItem>
                                        ))
                                    }
                                </HeaderLeftMenu>

                                <HeaderMobile>
                                    <Touch className="touch" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                        <MenuIcon
                                            opened={mobileMenuOpen}
                                            dark={scrolled || activeSection !== 'inicio'}
                                        />
                                    </Touch>
                                </HeaderMobile>
                            </RowCenter>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
            {
                mobileMenuOpen && typeof document !== 'undefined'
                    ? createPortal(
                        <HeaderMobileOverlay onClick={() => setMobileMenuOpen(false)}>
                            <HeaderMobileMenu onClick={(e) => e.stopPropagation()}>
                                <HeaderMobileAction>
                                    <HeaderMobileClose
                                        onClick={() => setMobileMenuOpen(false)}
                                        aria-label="Fechar menu"
                                        title="Fechar menu"
                                    >
                                        <HeaderMobileCloseIcon />
                                    </HeaderMobileClose>
                                </HeaderMobileAction>
                                {
                                    sections.map((item) => (
                                        <HeaderMobileItem
                                            key={item.id}
                                            active={activeSection === item.id}
                                            onClick={() => handleMenuClick(item)}
                                        >
                                            { item.title }
                                        </HeaderMobileItem>
                                    ))
                                }
                            </HeaderMobileMenu>
                        </HeaderMobileOverlay>,
                        document.body
                    ) : null
            }
        </>
    )
}
