
import React from 'react'
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';


const Login = ({navigation}) =>{

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
                        Welcome Back</Text>
                
        
 
        <Text   style={{
                    fontSize:25,
                    fontFamily:"SemiBold",
                    alignSelf:"center",
                    marginTop: "-5%"
                }}>Sign In</Text>

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
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                 
                    placeholder="Enter your Email/Username" color="#00716F"
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
                    <Icon name="eye" color="#00716F" size={24}/>
                    <TextInput 
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
                    <Text
                    onPress={()=>navigation.navigate('Register')}
                    style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}>Don't Have An Account?</Text>
                    </View>
                    
        
  
        </View>
        </>
      
    )
}

export default Login