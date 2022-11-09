import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//screens
import SplashScreen from "@screens/SplashScreen";
import MainScreen from "@screens/MainScreen";
import { RegisterScreen } from "@screens/RegisterScreen";

import Tabs from "../layout/Tabs";
import { Componentes } from "../screens/Componentes";
import { Accesorios } from "../screens/Accesorios";
import { Motherboards } from "../components/Motherboards";
import { Procesadores } from "../components/Procesadores";
import { Ram } from "../components/Ram";
import { Discos } from "../components/Discos";
import { Fuentes } from "../components/Fuentes";
import { Graficas } from "../components/Graficas";
import { Perifericos } from "../components/Perifericos";
import { Sillas } from "../components/Sillas";
import { Luces } from "../components/Luces";
import { Mantenimiento } from "../components/Mantenimiento";
import { Audio } from "../components/Audio";
import { Soportes } from "../components/Soportes";
import { NuevosProductos } from "../components/NuevosProductos";
import { Homepage } from "../components/Homepage";
import { Contacto } from "../screens/Contacto";
import { Cotizacion } from "../screens/Cotizacion";
import { Cases } from "../components/Cases";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="Splash">
      <HomeStackNavigator.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Motherboards"
        component={Motherboards}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Procesadores"
        component={Procesadores}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="RAM"
        component={Ram}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Discos"
        component={Discos}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Fuentes"
        component={Fuentes}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Graficas"
        component={Graficas}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Perifericos"
        component={Perifericos}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Sillas"
        component={Sillas}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Luces"
        component={Luces}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Mantenimiento"
        component={Mantenimiento}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Audio"
        component={Audio}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Soportes"
        component={Soportes}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="NuevosProductos"
        component={NuevosProductos}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Componentes"
        component={Componentes}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Accesorios"
        component={Accesorios}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Contacto"
        component={Contacto}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Cotizacion"
        component={Cotizacion}
        options={{
          headerShown: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Cases"
        component={Cases}
        options={{
          headerShown: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
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
