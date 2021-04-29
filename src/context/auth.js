import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import Firebase from "../services/firebaseConection"

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('AUTH_USER');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        console.log(user);
        loadStorage();
    }, []);

    const signUp = async (email, password, name) => {
        console.log(name)
        // await Firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then(async (value) => {
        //         let uid = value.user.uid;
        //         await Firebase.database().ref('users').child(uid).set({
        //             name: name,
        //             balance: 0
        //         })
        //             .then(() => {
        //                 let data = {
        //                     uid: uid,
        //                     name: name,
        //                     email: value.user.email
        //                 };
        //                 setUser(data);
        //                 saveUserStorage(data);
        //             })
        //     })
        //     .catch((error) => {
        //         alert(error.code);
        //     })
    }

    const signin = async (email, password) => {
        await Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await Firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot)=>{
                        let data = {
                            uid : uid,
                            name: snapshot.val().nome,
                            email: value.user.email
                        };
                        setUser(data);
                        saveUserStorage(data);
                    })
            })
            .catch((error)=>{
                alert(error.code)
            })
    }

    const saveUserStorage = async (data) => {
        await AsyncStorage.setItem("AUTH_USER", JSON.stringify(data))
    }

    const logout = async () => {
        await Firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            signUp,
            signin,
            loading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;