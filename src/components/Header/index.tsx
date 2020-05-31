import React from 'react'

import Logo from '../../images/logo.png'
import {Container } from './styles'

const Header: React.FC =() =>{

    return (
        <Container>
            <a href="/">
                <img src={Logo} height="130px" alt="Voltar para a Página Inicial"/>
            </a>
        </Container>
    )
}

export default Header;