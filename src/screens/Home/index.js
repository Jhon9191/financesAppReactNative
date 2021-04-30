import React, { useState, useContext } from 'react';
import Header from '../../components/Header';
import { AuthContext } from "../../context/auth"

import {
    Container,
    SubContainer,
    Name,
    Saldo,  
    Title
} from './styles'

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Header/>
            <SubContainer>
            <Name>João</Name>
            <Saldo>R$ 167,00 reais</Saldo>
            </SubContainer>
            <Title>Ultimas movimentações</Title>
        </Container>
    )
}

export default Home;