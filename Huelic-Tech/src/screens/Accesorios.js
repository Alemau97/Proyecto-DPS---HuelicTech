import React from "react";
import { View, Image, StyleSheet, Text, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CompsAcs } from "../components/CompAcs";
import { NavigationContext } from "react-navigation";

import Footer from "../layout/Footer";
import Header from "../layout/Header";

const data = [
  {
    img: require("../images/accesorios/mouse.png"),
    title: "Periféricos",
  },
  {
    img: require("../images/accesorios/silla.jpg"),
    title: "Sillas Gamer",
  },
  {
    img: require("../images/accesorios/luces.jpg"),
    title: "Luces Led",
  },
  {
    img: require("../images/accesorios/kit.png"),
    title: "Limpieza y Mantenimiento",
  },
  {
    img: require("../images/accesorios/webcam.jpg"),
    title: "Audio y Video",
  },
  {
    img: require("../images/accesorios/soporte.jpg"),
    title: "Soportes",
  },
];

const pressable = ["Perifericos", "Sillas","Luces","Mantenimiento","Audio","Soportes"];

export const Accesorios = ({ navigation }) => {
  return (
    <>
      <Header />
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          {data.map((data, key) => {
            return <CompsAcs 
                      key={key} 
                      img={data.img} 
                      title={data.title} 
                      dirigir={pressable[key]} 
                      />;
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    flex: 1,
    backgroundColor: "rgb(226, 232, 240)",
  },
});
