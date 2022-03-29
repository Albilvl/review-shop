import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from 'react-native-vector-icons'

const BottomTabs = ({navigation}) => {
    const Icon =(props) =>(
        <TouchableOpacity onPress={props.goToPlace}>
            <View>
            <FontAwesome5 name={props.name} size={25} style={{marginBottom: 3, alignSelf:'center', marginTop:3}}/>
            <Text>{props.text}</Text>
        </View> 
        </TouchableOpacity>
       
    )
  return (
    <View style={{
        flexDirection: 'row',
        marging: 10, 
        marginHorizontal:30,
        justifyContent: 'space-between'
    }}>
        <Icon name= 'home' text= 'Home' />
        <Icon name= 'star' text= 'Favorites' goToPlace={()=> navigation.navigate('Favorites')}/>
        <Icon name= 'receipt' text= 'Orders' goToPlace={()=> navigation.navigate('Orders')}/>
        <Icon name= 'user' text= 'Account' />
    
    </View>
  )
}

export default BottomTabs