import { View, Text } from 'react-native'
import {React, useState, useEffect} from 'react'
import Header from '../components/Favorites.jsx/Header'
import { Divider } from 'react-native-elements'
import FavoriteRestaurants from '../components/Favorites.jsx/FavoriteRestaurants'

const Favorites = ({navigation}) => {
    const[favRestaurants, setFavRestaurants]= useState([])

    


  return (
    <></>
    // <View>
    //   <Header/>
    //   <Divider/>
    //   <FavoriteRestaurants navigation={navigation} favRestaurants={favRestaurants}/>
    // </View>
  )
}

export default Favorites