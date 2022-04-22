import { View, Text,  } from 'react-native'g
import React from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import{ Ionicons, AntDesign} from 'react-native-vector-icons'


const Searchbar = ({setCity}) => { 
  return (
      
    
    <View style={{marginTop:15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete 
            placeholder='Search'
            styles ={{
                textInput: {
                    backgroundColor: '#eee', 
                    borderRadius: 30,
                    fontWeight:'700',
                    marginTop: 5
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems:'center'
                }
            }}

            query={{
                    key: 'AIzaSyBXxmCnfDKvP2XriwNcQTb6zz-MkpHFPyY',
                    language: 'en',
            }}


        onPress={(data, details = null) => {
          console.log(data.description)
          const city = data.description.split(',')[0];
            setCity(city)
        }}
            renderLeftButton = {() => (
                <View style={{marginLeft:10}}>
                    <Ionicons name="location-sharp" size={20} />
                </View>
            )} 

            renderRightButton = {() =>(
                <View style={{
                    flexDirection: 'row',
                    marginRight:8,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius:30,
                    alignItems: 'center'
                }}>
                    <AntDesign name="clockcircle" size={10} style={{marginRight:10}}/>
                    <Text>Search </Text>
                </View>
            )}
        />
    </View>
  )
}

export default Searchbar 


        // onPress={(data, details = null) => {
        //   // 'details' is provided when fetchDetails = true
        //   console.log(data, details);
        // }}
       