import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = () => {

  return (
    <View>
      <Image source ={{uri:'https://www.thebalancesmb.com/thmb/kectf9d4azgI8yVnBuoB0h2Z8zA=/3865x2174/smart/filters:no_upscale()/overhead-view-of-smiling-female-friends-sharing-lunch-in-restaurant-928010348-5b4abe8f46e0fb003712c478.jpg' }} style={{width: '100%', height:180}}/>
      <Text style={{
          fontSize: 30,
          fontWeight: '600',
          marginTop:10,
          marginHorizontal:15
        }
        }>Your Favorite Places</Text>
    </View>
  )
}

export default Header