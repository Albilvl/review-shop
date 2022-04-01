import React, {useState} from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

function Register({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [created, setCreated] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [hide,setHide] = useState(true)
    
    // (text) => this.setUsername(text);

    const user = {
        username,
        email,
        password,
    }
    function createUser () {
        // event.preventDefault();
        // event.target.reset();

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            },
            body: JSON.stringify({user}),

        })
        .then((r) => r.json())
        .then ((response) => {
            if (response.status === 'created') {
            setCreated(true);
            setErrorMessage('');
            }
        })
        .catch((response) => 
            setErrorMessage(
            "Uh-oh! It didn't work...Make sure your server is running!"
            )
        );
    }
    

    return (
    < >
    {created ? (
        <>
            {navigation.navigate('Login')}
        </>
        ) : (
            <View style={{backgroundColor: 'black', height:"100%"}}>
                <Image source ={require('../assets/icons/join-us.gif')}
                    style={{width:"100%",height:"35%", marginRight:"35%", marginTop:"30%"}}>
                </Image>
                    <Text 
                  
                    onPress={()=>navigation.navigate('Register')}
                    style={{
                    fontSize:25,
                    alignSelf:"center",
                    color:"#00716F",
                    fontFamily:"SemiBold",
                    paddingVertical:30}}>
                    
                    </Text>
                <View 
                    style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:"15%",
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    backgroundColor: "black",
                    paddingVertical:2}}>
                <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                    onChangeText= {(e) => setEmail(e)}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#00716F"
                    style={{paddingHorizontal:10}}/>
                </View>
                <View 
                    style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2}}>
            <Icon name="username" color="#00716F" size={24}/>
                <TextInput 
                    onChangeText= {(e) => setUsername(e)}
                    value={username}
                    placeholder="Create Username"
                    placeholderTextColor="#00716F"
                    style={{paddingHorizontal:10}}/>
            </View>
            <View 
                    style={{
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
                <Icon  onPress={() => setHide(!hide)} name="eye" color="#00716F" size={24}/>
                <TextInput 
                    secureTextEntry={hide}
                    onChangeText= {(e) => setPassword(e)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="#00716F"
                    style={{paddingHorizontal:10}}
                    />
            </View>
            <View 
                    style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23}}>
                <Text 
                    onPress={()=>createUser()}
                    style={{
                    color:"white",
                    fontFamily:"SemiBold"
                    }}>
                    Register
                </Text>
                </View>
            </View>
        )}
    </>
    )
}

export default Register
