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
} from '../Signin/styles.js';

import { AuthContext } from "../../context/auth"

const Signin = () => {
    const { signUp } = useContext(AuthContext)
    const navigator = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleRegister = () => {
        signUp(email, password, name);
    }

    return (
        <Background>
            <Container>
                <Logo source={require('../../../assets/Logo.png')} />
                <AreaInput>
                    <Input
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={(text) => setName(text)}
                   />
                </AreaInput>

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



                <SubmitButton onPress={handleRegister}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

                <Link onPress={()=> navigator.navigate("Signim")} > 
                    <LinkText>Já possuo conta</LinkText>
                </Link>

            </Container>
        </Background>
    )
}

export default Signin;