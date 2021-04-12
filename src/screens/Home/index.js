import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { AuthContext } from "../../context/auth"

const Home = () => {

    const { logout } = useContext(AuthContext)

    return (
        <View>
            <TouchableOpacity onPress={()=> logout()}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;