import { View, Text, TouchableOpacity } from 'react-native'
import {React, useState} from 'react'

const HeaderTabs = (props) => {

    // Think of button subcomponent, destructuring and passing props 
    // using useState to set a toggle 
    const HeaderButton = (props) => (
        <View >
            {/* Thouchability allows you to add onclick functionality  */}
            <TouchableOpacity
                style={{ 
                    backgroundColor: props.status === props.text ? 'black' : 'white',
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                    borderRadius:40
                }}
                onPress ={()=> 
                  {props.setStatus(props.text)}
                }
            >
                <Text style={{color: props.status === props.text ? "white" : 'black', fontSize: 15, fontWeight: "900"}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )

  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton text ="Delivery"   setStatus={props.setStatus} status={props.status}/>
      <HeaderButton text = "Pickup"    setStatus={props.setStatus} status={props.status}/>
    </View>
  )
}

export default HeaderTabs