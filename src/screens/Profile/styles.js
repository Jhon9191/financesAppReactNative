import styled from 'styled-components/native'
import {Rc} from 'react-native'
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #131313;
    /* justify-content: center; */
    align-items: center;
`;
export const ContainerText = styled.SafeAreaView`
    flex-direction: row;
    margin-bottom: 10px;
    text-align: center;
`;

export const Welcome = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 28px;
`;
export const Name = styled.Text`
    color: #FFF;
    font-size: 28px;
`;

export const NewButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px
`;

export const LogoutButton = styled.TouchableOpacity`
justify-content: center;
    align-items: center;
    background-color: #c62c36;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px
`;

export const TextButton = styled.Text`
    color: #FFF;
    text-align: center;
    font-weight: bold;
`;
