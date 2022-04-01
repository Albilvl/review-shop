import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'



const RestaurantItems = ({navigation, ...props}) => {

    const [visible,setVisible] = useState(false)

    const RestaurantImage = (props) => (
        <View>
            <Image 
                source = {{uri: props.image}}
                style ={{width: "100%", height: 180, backgroundColor: 'rgba(255,255,255,0.8)', shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 10
                },
                shadowOpacity: 1,
                shadowRadius: 20
            }}
            />
                   <TouchableOpacity onPress={() => setVisible(!visible)} style={{position: "absolute", right:10, top:10, marginTop:"1%"}}>
                {visible ? (
                    <MaterialCommunityIcons  name ="heart" size = {35} color = "red" /> ) :
                (              
                   
                <MaterialCommunityIcons  name ="heart-outline" size = {35} color = "red" />)
                }
            </TouchableOpacity>      
      
            
    </View>
    
        
    )

    const RestaurantInfo = (props) => (
        <View style={{
            
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}>
            <View>
                <Text style={{fontSize:22, fontWeight: "bold"}}>{props.name}</Text>
                <Text style={{fontSize:13, color: 'green'}}>30-45 • min </Text>
            </View>
                <View
                    style={{
                        backgroundColor: '', 
                        height: 30,
                        width:30,
                        alignItems: 'center',
                        borderRadius: 50,
                        justifyContent: 'center'
                    }}
                >
                <Text style={{backgroundColor:"#fff"}} >
                    {props.rating}
                </Text> 
                <TouchableOpacity  style={{position: "absolute", right:30, marginTop:"5%"}}>
                <MaterialCommunityIcons  name ="star" size = {20} color = "gold" marginLeft="50%" />
                </TouchableOpacity>   
                </View>
                
        </View>
    )

 
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