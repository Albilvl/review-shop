
import React, { useState } from 'react'
import {Text,View,Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import * as SecureStore from 'expo-secure-store';






const Login = ({navigation}) =>{


const [token, setToken] = useState('')
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
        

function handleLogin(e) {
            const user = { username, password }
             SecureStore.getItemAsync("secure_token").then(SecureStore.setItemAsync("secure_token",token));
             if(token !== null) { 
                fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                }   ,
                body: JSON.stringify({user})
                })
                .then((r) => r.json())
                .then((response) => {
                setToken(response.JWT);
        })} 
        console.log(token);
    }

   
    return (
        <>
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../assets/images/shopping-bag.png')}
                    style={{width:"80%",height:"33%", marginLeft:"10%", marginTop:"40%"}}></Image>
                    <Text 
                        onPress={()=>navigation.navigate('Register')}
                        style={{
                        fontSize:25,
                        alignSelf:"center",
                        color:"#00716F",
                        fontFamily:"SemiBold",
                        paddingVertical:30
                        }}>
                        Welcome Back
                    </Text> 
                    <Text   
                        style={{
                        fontSize:25,
                        fontFamily:"SemiBold",
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
                         onChangeText= {(e) => setUsername(e)}
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
                        fontFamily:"SemiBold"}}>
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
                        fontFamily:"SemiBold"}}>
                        <Text>
                            Don't Have An Account?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
      
    )
}

export default Login