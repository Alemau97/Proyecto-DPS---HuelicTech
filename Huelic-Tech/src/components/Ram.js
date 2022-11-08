import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/components/RAM/GIGABYTE.jpeg"),
    title: 'MEMORIA RAM DDR4 GIGABYTE 8GB 2666MHz'
  },
  {
    img: require("../images/components/RAM/KINGSTON.jpeg"),
    title: 'MEMORIA RAM DDR4 KINGSTON FURY BEAST 8GB RGB 3200MHz'
  },
  {
    img: require("../images/components/RAM/CORSAIR.jpeg"),
    title: 'MEMORIA RAM DDR4 CORSAIR VENGEANCE RGB PRO 16GB 3600MHz'
  },
  {
    img: require("../images/components/RAM/CORSAIR2.jpeg"),
    title: 'KIT MEMORIA RAM DDR5 CORSAIR VENGEANCE 4800MHz 2X16GB'
  },
  {
    img: require("../images/components/RAM/XPG.jpeg"),
    title: 'MEMORIA RAM DDR5 XPG LANCER 16GB RGB 5200MHz'
  },
  {
    img: require("../images/components/RAM/CORSAIR3.jpeg"),
    title: 'MEMORIA RAM DDR4 8GB 3000MHz CORSAIR VENGEANCE'
  },
]

const modal = [
  {
    name: 'MEMORIA RAM DDR4 GIGABYTE 8GB 2666MHz',
    brand: 'GIGABYTE',
    descp: 'Memory Size: 8GB Frequency:DDR4-2666 MT/s Timing:16-16-16-35 Voltage:1.2V',
    volver: 'Ver más procesadores',
    precio: '$45.00',
  },
  {
    name: 'MEMORIA RAM DDR4 KINGSTON FURY BEAST 8GB RGB 3200MHz',
    brand: 'KINGSTON',
    descp: 'Mejora tanto el rendimiento como la estética, con velocidades de hasta 3200 MT/s y 3600 MT/s*, un exclusivo disipador térmico blanco y una atractiva iluminación RGB.',
    volver: 'Ver más procesadores',
    precio: '$55.00',
  },
  {
    name: 'MEMORIA RAM DDR4 CORSAIR VENGEANCE RGB PRO 16GB 3600MHz',
    brand: 'CORSAIR',
    descp: 'La memoria DDR4 de alto rendimiento ilumina tu sistema con iluminación vívida y animada de diez LED RGB ultrabrillantes y direccionables individualmente por módulo.',
    volver: 'Ver más procesadores',
    precio: '$89.00',
  },
  {
    name: 'KIT MEMORIA RAM DDR5 CORSAIR VENGEANCE 4800MHz 2X16GB',
    brand: 'CORSAIR',
    descp: 'Regulación de voltaje integrada: hace que el overclocking sea más fácil, ajustado y estable a través del software CORSAIR iCUE que el control de la placa base de generación anterior.',
    volver: 'Ver más procesadores',
    precio: '$399.00',
  },
  {
    name: 'MEMORIA RAM DDR5 XPG LANCER 16GB RGB 5200MHz',
    brand: 'XPG',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$129.00',
  },
  {
    name: 'MEMORIA RAM DDR4 8GB 3000MHz CORSAIR VENGEANCE',
    brand: 'CORSAIR',
    descp: 'Marca CORSAIR  Memory Series VENGEANCE LPX  Tested Speed 3000MHz Tested Voltage 1.35V SPD Latency 15-15-15-36 Tested Latency 16-20-20-38  Pines 288',
    volver: 'Ver más procesadores',
    precio: '$69.00',
  },
]

export const Ram = () => {

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
      <View>
          <ScrollView contentContainerStyle={styles.container}>
            {
              icon.map((data, key)=>{
                return(
                  <View style={styles.sections} key={key}>
                    <Modall 
                      img = {data.img}
                      title = {data.title}
                      nombre = {modal[key].name}
                      marca = {modal[key].brand}
                      descp = {modal[key].descp}
                      volver = {modal[key].volver}
                      precio = {modal[key].precio}
                    />
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    flex: 1,
    backgroundColor: "rgb(226, 232, 240)",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sections: {
    width: '50%',
    display: 'flex'
  },
  cardItem: {
    width: 'auto',
    borderRadius: 10
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
  cardLabel: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "600",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "rgb(226, 232, 240)",
    padding: 20
  },
  button: {
    backgroundColor: 'teal',
    padding: 10,
    borderRadius: 10,
  },
  modalText: {
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'justify'
  },  
  textStyle: {
    textAlign: 'center',
    color: 'white'
  }
})