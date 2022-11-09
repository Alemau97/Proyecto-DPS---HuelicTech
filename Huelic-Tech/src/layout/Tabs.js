import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";

import { Homepage } from "../components/Homepage";
import { Componentes } from "../screens/Componentes";
import { Accesorios } from "../screens/Accesorios";
import { Contacto } from "../screens/Contacto";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFF",
        tabBarActiveBackgroundColor: "#0C901B",
        tabBarStyle:{
          height: 55,
          backgroundColor: "#1D1D1D",
        },
        tabBarLabelStyle: {
          color: "#E5E5E5",
          fontSize: 14,
          marginBottom: 8,
        },
        tabBarIconStyle: {
          
        },
      }}
    >
      <Tab.Screen
        name="Homescreen"
        component={Homepage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Componentes"
        component={Componentes}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="monitor" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Accesorios"
        component={Accesorios}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="keyboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contacto"
        component={Contacto}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return <HomeTabs />;
}

const styles = StyleSheet.create({});
