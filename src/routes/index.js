import React,{ useContext} from 'react';

import AppRoutes from './appRoutes';
import AuthRoutes from './authRoutes';

import {AuthContext} from "../context/auth"
 
const Routes = () => {
    const { signed } = useContext(AuthContext)
    return(
        signed?  <AppRoutes/> : <AuthRoutes/> 
    )
}

export default Routes;