import React from "react";
import { View, Image, StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CompsAcs } from "../components/CompAcs";
import { NavigationContext } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

import Footer from "../layout/Footer";
import Header from "../layout/Header";

const data = [
  {
    img: require("../images/components/motherboard.jpg"),
    title: "Motherboards",
  },
  {
    img: require("../images/components/procesador.jpg"),
    title: "Procesadores",
  },
  {
    img: require("../images/components/ram.jpeg"),
    title: "Memoria RAM",
  },
  {
    img: require("../images/components/ssd.jpg"),
    title: "Almacenamiento",
  },
  {
    img: require("../images/components/fuente.jpg"),
    title: "Fuentes de poder",
  },
  {
    img: require("../images/components/tarjeta.jpg"),
    title: "Tarjetas gráficas",
  },
];

const pressable = ["Motherboards", "Procesadores","RAM","Discos","Fuentes","Graficas"];

export const Componentes = () => {

  return (
    <>
      <Header />
      
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView style={{backgroundColor:"#0E0E0E",}}>
        <ImageBackground source={require('../images/ImageBackHome.png')} style={{width:"100%", height:"100%",}}>
          {data.map((data, key) => {
            return <CompsAcs 
                    key={key} 
                    img={data.img} 
                    title={data.title} 
                    dirigir={pressable[key]}
                    />;
          })}
         </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
