// use rnf to create a react native function 
import { React, useEffect, useState } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import HeaderTabs from '../components/Home/HeaderTabs'
import Searchbar from '../components/Home/Searchbar'
import Categories from '../components/Home/Categories'
import RestaurantItems from '../components/Home/RestaurantItems'

import BottomTabs from '../components/Home/BottomTabs'



export default function Home({navigation}) {
  const [restaurants, setRestaurants] = useState([])
  const [city, setCity] = useState('New York')
  const [status,setStatus] = useState('Delivery')
  const [headerShown, setHeaderShown] = useState(false);



  const YELP_API_KEY = 
  'XOfbkvzZ03OsqOPA4An2yO5dJAGxm0fxhwPtISbWeZcz0VP_iqyFSivGDkFAJbfo2DDPXh7Gd-BISbMKwxO8jvQuqDcX8V2gKPLZsYX4SCungVgigQLkCmrffaJBYnYx'
  
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => 
        setRestaurants(
          json.businesses.filter((business) => 
         business.transactions.includes(status.toLowerCase())
        )
      )
   ); 
  };



  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, status]);
  
  

  return (
    // SafeAreaView is used for viewing in the proper space, 
    <SafeAreaView 
    style={{ backgroundColor:"white",flex: 1, 
      
  }}
    >
      
        <View style={{backgroundColor: 'white', padding: 15}}>
          <HeaderTabs setStatus= {setStatus} status={status}/>
          <Searchbar setCity={setCity}/>
        </View>
        <ScrollView>
          <Categories/>
          <RestaurantItems restaurants={restaurants} navigation={navigation}/>
        </ScrollView>
        <Divider width={1}/>
          <BottomTabs navigation={navigation}/>
    </SafeAreaView>
  )
}