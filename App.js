import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeA } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Firebase from './src/services/firebaseConection';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/index'
import Rota from './src/routes/authRoutes'

export default function App() {
    return (
        <NavigationContainer>
            <Rota/>
        </NavigationContainer>
    );
}
