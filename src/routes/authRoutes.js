import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/Signin/index';
import { Text, View } from 'react-native';

export default function AuthRoutes(){

    const AuthStack = createStackNavigator();

  return(
     <AuthStack.Navigator>
       <AuthStack.Screen name="Signim" component={Signin}/>
     </AuthStack.Navigator>
  )
}
