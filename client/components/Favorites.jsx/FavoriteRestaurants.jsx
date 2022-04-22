import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'

const FavoriteRestaurants = ({navigation, favRestaurants}) => {

    const RestaurantImage = (props) => (
        <>
            <Image  
                source = {{uri: props.image}}
                style ={{width: "100%", height: 180}}
            />
            <TouchableOpacity style={{position: "absolute", right:20}}>
                <MaterialCommunityIcons name ="heart-outline" size = {25} color = "red"/>
            </TouchableOpacity>
        </>
        
    )

    const RestaurantInfo = (props) => (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
        }}>
            <View>
                <Text style={{fontSize:15, fontWeight: "bold"}}>{props.name}</Text>
            </View>
                <View
                    style={{
                        backgroundColor: '#eee', 
                        height: 30,
                        width:30,
                        alignItems: 'center',
                        borderRadius: 50,
                        justifyContent: 'center'
                    }}
                >
                   <Text>{props.rating}</Text> 
                </View>
                
        </View>
    )



  return (
    <>
    {favRestaurants.map((restaurant, id) => (
         <TouchableOpacity 
           key = {id} 
           activeOpacity={1 }
            style={{marginBottom: 30}}
            // onPress={() =>
            //    navigation.navigate("RestaurantDetail", {
            //      name: restaurant.name,
            //      image: restaurant.image_url,
            //      price: restaurant.price,
            //      reviews: restaurant.review_count,
            //      rating: restaurant.rating,
            //      categories: restaurant.categories,
            //    })
            //  }
           >
                   <View style={{marginTop:20, padding: 15, backgroundColor:'white'}}>
                           <RestaurantImage image= {restaurant.restaurant_image}/>
                           <RestaurantInfo name= {restaurant.restaurant_name} rating = {restaurant.rating}/>
                   </View> 
        </TouchableOpacity>  
       ))}
   </>
  )
}

export default FavoriteRestaurants