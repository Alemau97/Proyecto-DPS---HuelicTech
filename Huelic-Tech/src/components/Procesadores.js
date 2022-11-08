import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/components/procesadores/celeron.jpeg"),
    title: 'PROCESADOR INTEL CELERON G6900'
  },
  {
    img: require("../images/components/procesadores/i5.jpeg"),
    title: 'PROCESADOR INTEL CORE i5 11400f'
  },
  {
    img: require("../images/components/procesadores/i9.jpeg"),
    title: 'PROCESADOR INTEL CORE i9 12900K'
  },
  {
    img: require("../images/components/procesadores/R5.jpeg"),
    title: 'PROCESADOR AMD RYZEN 5 4600G'
  },
  {
    img: require("../images/components/procesadores/R57000.jpeg"),
    title: 'PROCESADOR AMD RYZEN 5 7600X'
  },
  {
    img: require("../images/components/procesadores/R9.jpeg"),
    title: 'PROCESADOR AMD RYZEN 9 7900X'
  },
]

const modal = [
  {
    name: 'PROCESADOR INTEL CELERON G6900 ',
    brand: 'INTEL',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$79.95',
  },
  {
    name: 'PROCESADOR INTEL CORE i5 11400f',
    brand: 'INTEL',
    descp: 'Especificaciones de la CPU Cantidad de núcleos 6 Cantidad de subprocesos 12 Frecuencia básica del procesador 2,60 GHz Frecuencia turbo máxima 4,40 GHz Caché 12 MB Intel® Smart Cache Velocidad del bus 8 GT/s Frecuencia de la Tecnología Intel® Turbo Boost 2.0',
    volver: 'Ver más procesadores',
    precio: '$229.00',
  },
  {
    name: 'PROCESADOR INTEL CORE i9 12900K',
    brand: 'INTEL',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$849.00',
  },
  {
    name: 'PROCESADOR AMD RYZEN 5 4600G',
    brand: 'AMD RYZEN',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$199.00',
  },
  {
    name: 'PROCESADOR AMD RYZEN 5 7600X',
    brand: 'AMD RYZEN',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$369.00',
  },
  {
    name: 'PROCESADOR AMD RYZEN 9 7900X',
    brand: 'AMD RYZEN',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$679.00',
  },
]

export const Procesadores = () => {

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