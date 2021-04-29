import React, { useState, useContext } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity,
    SafeAreaView 
} from 'react-native';

import { AuthContext } from "../../context/auth"

const New = () => {

    const {  } = useContext(AuthContext)

    return (
        <SafeAreaView>
           <Text>New</Text> 
        </SafeAreaView>
    )
}

export default New;