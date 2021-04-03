import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../screens/Signup/index'
import Signin from '../screens/Signin/index';
import { Text, View } from 'react-native';

export default function AuthRoutes() {

    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="Signim"
                component={Signin}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="Signup"
                component={Signup}
                options={{
                    headerStyle:{
                        backgroundColor: "#131313",
                    },
                    headerTintColor: "#FFF",
                    headerTitle: "Voltar"
                }}
            />
        </AuthStack.Navigator>
    )
}
