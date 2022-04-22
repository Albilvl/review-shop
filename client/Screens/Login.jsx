
import React, { useState, useEffect } from 'react'
import {Text,View,Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";






const Login = ({navigation}) =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [key, setKey] = useState('')
    const [token, setToken] = useState('')
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    
    async function save(key, value){
        await SecureStore.setItemAsync(key, value)
    }
  


    async function getValuefor(key){
        let result = await SecureStore.getItemAsync(key);
        if (result){
            console.log(result)
        } else {console.log("invalid key")}
    }

    // function setCurrentUser(currentUser){
    //     setUser(currentUser)
    //     // setLoggedIn(true)
    // }



    const dispatch = useDispatch()

    const grabUsername = (username, loggedIn) => 
        dispatch({
            type: "LOGGED_IN",
            payload: {
                username:username,
                token: token
            },
        })

    function router(){
        if (typeof token !== 'undefined' && token.length >1 && token !== 'undefined')
        {navigation.navigate('Home')} else{ console.log("it didnt work")}
    }


    // function currentUser(){
    //     if (typeof token !== 'undefined' && token.length >1 && token !== 'undefined')
    //     {setLoggedIn(true)} else{ console.log("it didnt work")}
    // }

    
    
    function handleLogin(e) {
        const user = {username, password}
        setKey("user"),
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user }),
        })
        .then((r) => r.json())
        .then((response) => {
            setToken(response.jwt)
            save(key, response.jwt);
            // currentUser()
            // setCurrentUser(response.user);
            
        });
        // console.log (token)
        router()
        grabUsername(user.username, token)
    }

    const userInfo= useSelector(
        (state) => state.userReducer.userInfo.token
      );
    

    // const {retrievedToken} = useSelector((state)=> state.userReducer.userInfo.token)
    // console.log (retrievedToken)

    // useEffect(() => {
    //     const secure_token = retrievedToken;
    //     if (typeof secure_token !== 'undefined' && secure_token.length > 1
    //       && secure_token !== 'undefined'
    //     ) {
    //       fetch('http://localhost:3000/auto_login', {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ secure_token }),
    //       })
    //         .then((r) => r.json())
    //         .then((user) => setCurrentUser(user));
    //     } else {
    //       console.log('No token found, try logging in!');
    //     }
    //   }, []);


    
    useEffect(() => {
        getValuefor('user');
      }, []);


function handleLogout(){
    // grabUsername("nada", "")
    save("user", "")
}

    return (
        <>
            {userInfo.length > 1 ? (
                <View style={{backgroundColor:"#FFF",height:"100%"}}>
                    <Image source ={require('../assets/images/shopping-bag.png')}
                    style={{width:"80%",height:"33%", marginLeft:"10%", marginTop:"40%"}}></Image>
                    <Text 
                        onPress={()=>navigation.navigate('Register')}
                        style={{
                        fontSize:25,
                        alignSelf:"center",
                        color:"#00716F",
                        paddingVertical:30
                        }}>
                       WELCOME BACK
                    </Text> 
                    <TouchableOpacity
                        onPress={()=>handleLogout()}
                        style={{
                        color:"white",
                        }}>
                        <Text>
                            LogOut
                        </Text>
                   </TouchableOpacity>
                </View>
            ):(
                
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../assets/images/shopping-bag.png')}
                    style={{width:"80%",height:"33%", marginLeft:"10%", marginTop:"40%"}}></Image>
                    <Text 
                        onPress={()=>navigation.navigate('Register')}
                        style={{
                        fontSize:25,
                        alignSelf:"center",
                        color:"#00716F",
                        paddingVertical:30
                        }}>
                       HEY THERE
                    </Text> 
                    <Text   
                        style={{
                        fontSize:25,

                        alignSelf:"center",
                        marginTop: "-5%"
                        }}>
                        Sign In
                    </Text>
                <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginHorizontal:55,
                        borderWidth:2,
                        marginTop:50,
                        paddingHorizontal:10,
                        borderColor:"#00716F",
                        borderRadius:23,
                        paddingVertical:2
                }}>
                <Icon name="mail" color="#00716F" size={24}
                />
                <TextInput 
                         onChangeText= {(e) =>( setUsername(e),
                            console.log(username))}
                        placeholder="Enter Username" color="#00716F"
                        style={{paddingHorizontal:10}}
                />
                </View>
                <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginHorizontal:55,
                        borderWidth:2,
                        marginTop:30,
                        paddingHorizontal:10,
                        borderColor:"#00716F",
                        borderRadius:23,
                        paddingVertical:2
                }}>
                <Icon name="eye" color="#00716F" size={24}
                />
                <TextInput 
                        onChangeText= {(e) => setPassword(e)}

                        secureTextEntry
                        placeholder="Enter your password" color="#00716F"
                        style={{
                        paddingHorizontal:10}}
                />
                </View>
                <View style={{
                        marginHorizontal:55,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:30,
                        backgroundColor:"#00716F",
                        paddingVertical:10,
                        borderRadius:23
                }}>
                <TouchableOpacity
                        onPress={()=>handleLogin()}
                        style={{
                        color:"white",
                        }}>
                    <Text>
                        Sign In
                    </Text>
                </TouchableOpacity>
                </View>
                    <View style={{
                        marginHorizontal:55,
                        alignItems:"center",
                        justifyContent:"center",
                        marginTop:30,
                        backgroundColor:"#00716F",
                        paddingVertical:10,
                        borderRadius:23}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Register')}
                        style={{
                        color:"white",
                        }}>
                        <Text>
                            Don't Have An Account?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            )}
        </>
      
    )
}

export default Login