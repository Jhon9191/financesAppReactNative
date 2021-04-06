import React from 'react';
import 'react-native-gesture-handler';

import AuthProvider from "./src/context/auth"

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/index'

console.disableYellowBox = true;

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}
