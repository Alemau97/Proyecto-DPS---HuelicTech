import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/components/Fuentes/FUENTE1.jpeg"),
    title: 'FUENTE PODER PARA PC SUINTEK 550W'
  },
  {
    img: require("../images/components/Fuentes/FUENTE2.jpeg"),
    title: 'FUENTE DE PODER THERMALTAKE SMARTH 500W 80+'
  },
  {
    img: require("../images/components/Fuentes/FUENTE3.jpeg"),
    title: 'FUENTE PODER EVGA 600W 80+BRONCE'
  },
  {
    img: require("../images/components/Fuentes/FUENTE4.jpeg"),
    title: 'FUENTE PODER CORSAIR 650W 80+BRONCE CX650F RGB WHITE FULL MODULAR CP-9020226-NA'
  },
  {
    img: require("../images/components/Fuentes/FUENTE5.jpeg"),
    title: 'FUENTE PODER EVGA 850W BQ SEMI MODULAR 110-BQ-0850-V1 80+BRONCE'
  },
  {
    img: require("../images/components/Fuentes/FUENTE6.jpeg"),
    title: 'FUENTE PODER EVGA 1600W G+ FULL MODULAR 80+GOLD'
  },
]

const modal = [
  {
    name: 'FUENTE PODER PARA PC SUINTEK 550W',
    brand: 'SUINTEK',
    descp: 'No descripción',
    volver: 'Ver más fuentes de poder',
    precio: '$17.95',
  },
  {
    name: 'FUENTE DE PODER THERMALTAKE SMARTH 500W 80+',
    brand: 'THERMALTAKE',
    descp: 'No descripción',
    volver: 'Ver más fuentes de poder',
    precio: '$69.95',
  },
  {
    name: 'FUENTE PODER EVGA 600W 80+BRONCE',
    brand: 'EVGA',
    descp: 'No descripción',
    volver: 'Ver más fuentes de poder',
    precio: '$89.00',
  },
  {
    name: 'FUENTE PODER CORSAIR 650W 80+BRONCE CX650F RGB WHITE FULL MODULAR CP-9020226-NA',
    brand: 'CORSAIR',
    descp: 'No descripción',
    volver: 'Ver más fuentes de poder',
    precio: '$99.00',
  },
  {
    name: 'FUENTE PODER EVGA 850W BQ SEMI MODULAR 110-BQ-0850-V1 80+BRONCE',
    brand: 'EVGA',
    descp: 'Potencia nominal: 850 W Diámetro de ventilador: 14 cm Factor de forma: ATX Alimentador de energía: 24-pin ATX Número de conectores SATA: 10 Certificación 80 PLUS: 80 PLUS Bronze',
    volver: 'Ver más fuentes de poder',
    precio: '$144.95',
  },
  {
    name: 'FUENTE PODER EVGA 1600W G+ FULL MODULAR 80+GOLD',
    brand: 'EVGA',
    descp: 'No descripción',
    volver: 'Ver más fuentes de poder',
    precio: '$569.00',
  },
]

export const Fuentes = () => {

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