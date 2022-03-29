import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements/dist/image/Image'

const About = (props) => {



  const { name, image, price, reviews, rating, categories } = props.route.params

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  
  const description = `${formattedCategories} ${price ? " • " + price : ""} • 🎫 • ${rating} ⭐ (${reviews}+)`;


  const RestaurantImage = (props) => (
    <Image source ={{uri: props.image}} style={{width: '100%', height:180}}/>
  )

  const RestaurantName= (props) => (
    <Text style={{
      fontSize: 30,
      fontWeight: '600',
      marginTop:10,
      marginHorizontal:15
    }
    }>{props.name}</Text>
  )

  const RestaurantDescription = (props) => (
    <Text style={{
      marginTop:10,
      marginHorizontal:15, 
      fontWeight: '400',
      fontSize:15
    }}>{props.description}
    </Text>
  )

  return (
    <View>
      <RestaurantImage image = {image}/>
      <RestaurantName  name = {name}/>
      <RestaurantDescription  description= {description}/>
    </View>
  )
}

export default About