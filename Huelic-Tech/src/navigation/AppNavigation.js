import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//screens
import SplashScreen from "@screens/SplashScreen";
import  MainScreen  from "@screens/MainScreen";
import  {RegisterScreen}  from "@screens/RegisterScreen";
import { Homepage } from "@components/Homepage";
 
const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
  return(
    <HomeStackNavigator.Navigator
      initialRouteName="Splash"
    >
      <HomeStackNavigator.Screen 
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown:false
        }}
        />
         <HomeStackNavigator.Screen 
        name="Main"
        component={MainScreen}
        options={{
          headerShown:false
        }}
        />
         <HomeStackNavigator.Screen 
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown:false
        }}
        />
         <HomeStackNavigator.Screen 
        name="Homepage"
        component={Homepage}
        options={{
          headerShown:false
        }}
        />
        
    </HomeStackNavigator.Navigator>

  )
}
export default function AppNavigation(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
/*
Splash: {
  screen: SplashScreen,
  navigationOptions: {
    headerShown: false,
  },
},

Main: {
  screen: MainScreen,
  navigationOptions: {
    headerShown: false,
  },
},
Register: {
  screen: RegisterScreen,
  navigationOptions: {
    headerShown: false,
  },
},
Homepage: {
  screen: Homepage,
  navigationOptions: {
    headerShown: false,
  },
  params: {
    name: "Huelic Boss",
  },
},
Prueba: {
  screen: Prueba,
  navigationOptions: {
    headerShown: false,
  },
},*/