import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/accesorios/Soporte/soporte1.jpeg"),
    title: 'SOPORTE DOBLE PARA MONITOR CON TORNILO DE PRESION TV KLIP XTREME KPM310'
  },
  {
    img: require("../images/accesorios/Soporte/soporte2.jpeg"),
    title: 'SOPORTE PARA MONITOR Y LAPTOP CON TORNILO DE PRESION KLIP XTREME KMM-301'
  },
  {
    img: require("../images/accesorios/Soporte/soporte3.jpeg"),
    title: 'SOPORTE PARA MONITOR TV CON TORNILO DE PRESION KLIP XTREME KPM300'
  },
  {
    img: require("../images/accesorios/Soporte/soporte4.jpeg"),
    title: 'SOPORTE GAMING PARA AURICULARES MAXELL'
  },
]

const modal = [
  {
    name: 'SOPORTE DOBLE PARA MONITOR CON TORNILO DE PRESION TV KLIP XTREME KPM310 VESA 13-32',
    brand: 'XTREME',
    descp: 'Soporta 50kg, Soporta pulgadas 13-32',
    volver: 'Ver soportes',
    Precio: '$45'
  },
  {
    name: 'SOPORTE PARA MONITOR Y LAPTOP CON TORNILO DE PRESION KLIP XTREME KMM-301',
    brand: 'XTREME',
    descp: 'Para laptop y monitor, soporta 48kg',
    volver: 'Ver soportes',
    Precio: '$67'
  },
  {
    name: 'SOPORTE PARA MONITOR TV CON TORNILO DE PRESION KLIP XTREME KPM300 VESA 13-32',
    brand: 'XTREME',
    descp: 'Para un único monitor, 13-32", soporta 30kg',
    volver: 'Ver soportes',
    Precio: '$40'
  },
  {
    name: 'SOPORTE GAMING PARA AURICULARES MAXELL W/USB HUB CA-HS ',
    brand: 'MAXELL',
    descp: 'SOPORTE PARA AURICULARES GAMING RGB Compacto y ligero para una facil portabilidad, Iluminacion RGB con 7 tipos de efectos, 4 Puertos USB ',
    volver: 'Ver soportes',
    Precio: '$20'
  },
]

export const Soportes = () => {

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