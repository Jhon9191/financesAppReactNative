import React, { useState, useContext, useEffect } from 'react';
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


    useEffect(()=>{
        console.log(user);
        console.log(user.name);
    },[user])

    return (
        <Container>
            <Header/>
            <SubContainer>
            <Name>{user && user.name}</Name>
            <Saldo>R$ 167,00 reais</Saldo>
            </SubContainer>
            <Title>Ultimas movimentações</Title>
        </Container>
    )
}

export default Home;