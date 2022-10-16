import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Homepage } from "../components/Homepage";
import { Componentes } from "../screens/Componentes";
import { Accesorios } from "../screens/Accesorios";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homescreen"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Componentes"
        component={Componentes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Accesorios"
        component={Accesorios}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Contacto"
        component={Homepage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return <HomeTabs />;
}
