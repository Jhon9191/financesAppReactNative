import React, { useState } from 'react';

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

const Signin = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    console.log(password, email)

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

                <SubmitButton>
                    <SubmitText>Logar</SubmitText>
                </SubmitButton>

                <Link>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>
        </Background>
    )
}

export default Signin;