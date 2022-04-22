import { View, Text, TouchableOpacity } from 'react-native'
import {React, useState, useEffect} from 'react'
import Header from '../components/Favorites.jsx/Header'
import { Divider } from 'react-native-elements'
import FavoriteRestaurants from '../components/Favorites.jsx/FavoriteRestaurants'
import * as SecureStore from 'expo-secure-store';
import { useSelector } from "react-redux";


const URL = 'http://localhost:3000/favorites'

const Favorites = ({navigation, route}) => {
    const[favRestaurants, setFavRestaurants]= useState([])
    const[secure, setSecure]= useState('')



    const userInfo= useSelector(
      (state) => state.userReducer.userInfo.token
    );
  

    const foods = [
      {
        title: "Lasagna",
        rating: 1.5,
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
      {
        title: "Tandoori Chicken",
        rating: 1,
        description:
          "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
        price: "$19.20",
        image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
      },
      {
        title: "Chilaquiles",
        rating: 2,
        description:
          "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
        price: "$14.50",
        image:
          "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
      },
      {
        title: "Chicken Caesar Salad",
        rating: 4,
        description:
          "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
        price: "$21.50",
        image:
          "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
      },
      {
        title: "Lasagna",
        rating: 3,
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
      },
    ];



    async function getValuefor(key){
      let token = await SecureStore.getItemAsync(key);
      if (token){
        console.log ('it worked here')
        setSecure(token);
        console.log (secure)
      } else {console.log("invalid key")}
    }
    
    

    // console.log(getValuefor('user'))

    function authorizedFetch() {
      getValuefor("user");
        fetch(URL, {
        headers: {
          Authorization: `Bearer ${secure}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((favs) => 
        // console.log (favs),
        setFavRestaurants(favs));
        console.log (favRestaurants)
      
    }

    useEffect(()=>{
      authorizedFetch()
    }, [])

    


  return (
    <>
    <View>
      <Header/>
      <Divider/>
      <FavoriteRestaurants navigation={navigation} favRestaurants={favRestaurants}/>
      {/* <TouchableOpacity onPress={()=>authorizedFetch()}>
        <Text>yooooooo</Text>

      </TouchableOpacity> */}
    </View>
    </>
  )
}

export default Favorites