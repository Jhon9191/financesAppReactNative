import React,{ useContext} from 'react';

import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

import {AuthContext} from "../context/auth"
import { ActivityIndicator, View } from 'react-native';
 
const Routes = () => {
    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color="#121212"/>
            </View>
        );
    }

    return(
        signed?  <AppRoutes/> : <AuthRoutes/> 
    )
}

export default Routes;