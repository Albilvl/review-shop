import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

function Register({navigation}) {
    return (
    <>
        <View>
        <Image source ={require('../assets/images/shopping-bag.png')}
            style={{width:"70%",height:"45%", marginLeft:"15%", marginTop:"20%",}}></Image>
                <Text 
                    onPress={()=>navigation.navigate('Register')}
                    style={{
                    fontSize:25,
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30}}>
                    Join Us</Text>
        <View 
            style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:0,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2
                }}>
                     <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="phone" color="#00716F" size={24}/>
                   <TextInput 
                     
                        placeholder="Phone Number"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    

                </View>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                <Icon name="eye" color="#00716F" size={24}/>

                   <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
                    />
                    


                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="eye" color="#00716F" size={24}/>

                   <TextInput 
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{paddingHorizontal:10}}
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
                    <Text 
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Register</Text>
                </View>

            
        </View>

    </>
    )
}

export default Register
