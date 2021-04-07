import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import {
    Background, 
    Container, 
    AreaInput, 
    Input, 
    Logo,
    SubmitButton,
    SubmitText,
    Link,
    LinkText 
} from './styles';

import { AuthContext } from "../../context/auth"

const Signin = () => {
    
    const { signin } = useContext(AuthContext)
    const navigator = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        signin(email, password);
    }

    return (
        <Background>
            <Container>
                <Logo source={require('../../../assets/Logo.png')} />

                <AreaInput>
                    <Input
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                   />
                </AreaInput>

                <SubmitButton onPress={handleLogin}>
                    <SubmitText>Logar</SubmitText>
                </SubmitButton>

                <Link onPress={()=> navigator.navigate("Signup")}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>
        </Background>
    )
}

export default Signin;