import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  styled from 'styled-components/native'

import Firebase from './src/services/firebaseConection';

export default function App() {
    return (
        <View>
            <Text>Hello Firebase</Text>
        </View>
    );
}
