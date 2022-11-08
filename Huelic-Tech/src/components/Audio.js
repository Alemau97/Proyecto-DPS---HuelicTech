import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';
import { Menus } from './Menus';

const icon = [
  {
    img: require("../images/accesorios/AudioVideo/audio.jpeg"),
    title: 'SISTEMA DE TRANSMISION INALAMBRICA DE MICROFONOS MAONO WM820'
  },
  {
    img: require("../images/accesorios/AudioVideo/audio2.jpeg"),
    title: 'MICROFONO DOBLE MAONO AU-200 3.5MM'
  },
  {
    img: require("../images/accesorios/AudioVideo/audio3.jpeg"),
    title: 'Camara Web Con Led'
  },
  {
    img: require("../images/accesorios/AudioVideo/audio4.jpeg"),
    title: 'PARLANTES FANTECH SONAR GS202 USB 2.0'
  },
]

const modal = [
  {
    name: 'SISTEMA DE TRANSMISION INALAMBRICA DE MICROFONOS MAONO WM820',
    brand: 'MAONO',
    descp: 'Micrófono Lavalier inalámbrico compacto, micrófonos de doble solapa de 2.4 GHz con monitoreo en tiempo real, ajuste de ganancia y silencio para entrevistas, vlogging, transmisión en vivo, teléfono, cámara (WM820 A1)',
    volver: 'Ver audiovisuales',
    precio: '$119'
  },
  {
    name: 'MICROFONO DOBLE MAONO AU-200 3.5MM',
    brand: 'MAONO',
    descp: 'Lavalier Micrófono MAONO Profesional Omnidireccional Doble Cabeza Clip en Entrevista Micrófono para Grabación, Conferencia, Podcast, Compatible con iPhone, iPad, Android, Cámara, PC, Ordenador, AU200',
    volver: 'Ver audiovisuales',
    precio: '$19.95'
  },
  {
    name: 'Camara Web Con Led',
    brand: 'MAONO',
    descp: 'Camara web con microfono HD salida usb y auxiliar',
    volver: 'Ver audiovisuales',
    precio: '$15.00'
  },
  {
    name: 'PARLANTES FANTECH SONAR GS202 USB 2.0',
    brand: 'FANTECH',
    descp: 'Altavoz portátil USB2.0 > Unidad de controlador de 45 mm > Iluminación RGB',
    volver: 'Ver audiovisuales',
    precio: '$21.30'
  },
]

export const Audio = () => {

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