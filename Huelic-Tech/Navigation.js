import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

//Screens

import Inicio from './src/screens/Inicio';
import Accesorios from './src/screens/Accesorios'
import Componentes from './src/screens/Componentes'
import Contactos from './src/screens/Contactos'
import Login from './src/screens/Login'

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();


function MyStack() {
  return (
    <StackNavigator.Navigator initialRouteName='HomeScreen'>
      <StackNavigator.Screen name='HomeHomeScreen' component={Inicio}
        options={{ headerShown: false, }}
      />
      <StackNavigator.Screen name='Login' component={Login}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2f3640',
          },
          headerTintColor: '#3498db',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      />
    </StackNavigator.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#718093',
        tabBarActiveBackgroundColor: '#1e272e',
        tabBarInactiveBackgroundColor: '#2f3640',
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={MyStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Components" component={Componentes}
        options={{
          tabBarLabel: 'Componentes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="desktop-outline" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen name="Accessories" component={Accesorios}
        options={{
          tabBarLabel: 'Accesorios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-headset-outline" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen name="contacts" component={Contactos}
        options={{
          tabBarLabel: 'Contactos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}