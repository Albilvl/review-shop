import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import RestaurantDetails from "./Screens/RestaurantDetails";
import configureStore from "./redux/store"
import { Provider as ReduxProvider } from "react-redux";
import OrderCompleted from "./Screens/OrderCompleted";
import Favorites from "./Screens/Favorites";
import Orders from "./Screens/Orders";
import Login from "./Screens/Login";
import Register from "./Screens/Register";





function RootNavigation(){
    const Stack = createStackNavigator();
    const store = configureStore()

    const screenOptions = {
        headerShown: false,
      };
    
    return (
      <ReduxProvider store={store}>
           <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="RestaurantDetail" component={RestaurantDetails} />
              <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
              <Stack.Screen name="Favorites" component={Favorites} />
              <Stack.Screen name="Orders" component={Orders} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />



            </Stack.Navigator>
          </NavigationContainer>
      </ReduxProvider>
       
    )
}

export default RootNavigation