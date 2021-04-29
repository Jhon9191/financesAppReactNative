import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/auth"
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Welcome,
    Name,
    NewButton,
    TextButton,
    LogoutButton,
    ContainerText
} from './styles'

const Profile = () => {
    const navigation = useNavigation();
    const { user, logout } = useContext(AuthContext)

    return (
        <Container>
            <ContainerText>
                <Welcome>Olá, </Welcome>
                <Name>{user && user.nome}</Name>
            </ContainerText>
        
            <NewButton onPress ={()=>navigation.navigate("New")}>
                <TextButton>Registrar gastos</TextButton>
            </NewButton>

            <LogoutButton onPress={()=> logout()}>
                <TextButton>Sair</TextButton>
            </LogoutButton>

        </Container>
    )
}

export default Profile;