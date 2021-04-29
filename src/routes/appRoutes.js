import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import New from '../screens/New';

const Routes = () => {

    const RoutesStack = createDrawerNavigator();

    return (
        <RoutesStack.Navigator
            drawerStyle={{
                backgroundColor: "#171717",
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: "#FFF",
                activeBackgroundColor: "#00b94a",
                inactiveTintColor: "#DDD",
                inactiveBackgroundColor: "#000",
                itemStyle:{
                    marginVertical: 5
                }
            }}
        >
            <RoutesStack.Screen name="Home" component={Home} />
            <RoutesStack.Screen name="Profile" component={Profile} />
            <RoutesStack.Screen name="New" component={New} />
        </RoutesStack.Navigator>
    )
}

export default Routes;