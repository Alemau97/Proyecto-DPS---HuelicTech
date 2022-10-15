import React from "react";
import AppNavigation from "@navigation/AppNavigation";
import Header from "./src/layout/Header";
import { Accesorios } from "./src/screens/Accesorios";
import { Componentes } from "./src/screens/Componentes";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from "./src/layout/Footer";

export default function App() {
  return (
    <>
      <Accesorios />
    </>
    
  )
}
