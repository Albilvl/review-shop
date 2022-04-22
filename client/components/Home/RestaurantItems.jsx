import { View, Text,Image, TouchableOpacity } from 'react-native'
import {React,useState} from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import * as SecureStore from 'expo-secure-store';

const RestaurantItems = ({navigation, ...props}) => {
    const[secure, setSecure] = useState("")


    async function getValuefor(key){
        let token = await SecureStore.getItemAsync(key);
        if (token){
          console.log ('it worked here')
          setSecure(token);
          console.log (secure)
        } else {console.log("invalid key")}
      }
      

    const RestaurantImage = (props) => (
        <>
            <Image 
                source = {{uri: props.image}}
                style ={{width: "100%", height: 180}}
            />
            <TouchableOpacity style={{position: "absolute", right:20}} onPress={()=> handlePost()} >
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
                <Text style={{fontSize:13, color: 'green'}}>30-45 • min </Text>
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

 

    function handlePost(restaurant) {

        getValuefor("user");
          fetch("http://localhost:3000/favorites", {
          Method: "POST",
          headers: {
            Authorization: `Bearer ${secure}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ restaurant}),
         })
          .then((res) => res.json())
        //   .then((favs) => 
        //   // console.log (favs),
        //   setFavRestaurants(favs));
        //   console.log (favRestaurants)
        
      }





  return (
        <>
         {props.restaurants.map((restaurant, id) => (
              <TouchableOpacity 
                key = {id} 
                activeOpacity={1 }
                 style={{marginBottom: 30}}
                 onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      name: restaurant.name,
                      image: restaurant.image_url,
                      price: restaurant.price,
                      reviews: restaurant.review_count,
                      rating: restaurant.rating,
                      categories: restaurant.categories,
                    })
                  }
                >
                        <View style={{marginTop:20, padding: 15, backgroundColor:'white'}}>
                                <RestaurantImage image= {restaurant.image_url}/>
                                <RestaurantInfo name= {restaurant.name} rating = {restaurant.rating}/>
                        </View> 
             </TouchableOpacity>  
            ))}
        </>
   )
}

export default RestaurantItems