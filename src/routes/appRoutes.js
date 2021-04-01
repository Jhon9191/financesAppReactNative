import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const Routes = () => {

    const RoutesStack = createStackNavigator();

  return(
     <RoutesStack.Navigator>
         <RoutesStack.Screen name="Home" component={Home}/>
     </RoutesStack.Navigator>
  )
}

export default Routes;