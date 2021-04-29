import React, { useState, useContext } from 'react';
import { 
    Text, 
    View, 
    TouchableOpacity,
    SafeAreaView 
} from 'react-native';

import { AuthContext } from "../../context/auth"

const Profile = () => {

    const {  } = useContext(AuthContext)

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => logout()}>
                <Text>Profile</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Profile;