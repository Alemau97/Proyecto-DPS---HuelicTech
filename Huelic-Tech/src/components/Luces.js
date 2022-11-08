import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/accesorios/Luces/Luz.jpeg"),
    title: 'Tira Led Usb'
  },
  {
    img: require("../images/accesorios/Luces/Luz2.jpeg"),
    title: 'Aro Led Multicolor'
  },
  {
    img: require("../images/accesorios/Luces/Luz3.jpeg"),
    title: 'Tiras Led Smart Marca Nitebird'
  },
  {
    img: require("../images/accesorios/Luces/Luz4.jpeg"),
    title: '2 Pack Bombillo Led Nexxt Inteligente Br 30 Blanco'
  },
]

const modal = [
  {
    name: 'Tira Led Usb',
    brand: 'Cas',
    descp: 'Tira led rgb 50/50, 5 metros, salida usb',
    volver: 'Ver luces led',
    precio: '$18.00'
  },
  {
    name: 'Aro Led Multicolor',
    brand: 'Ars',
    descp: 'Aro led 10 pulgadas, Multicolor, soporte para celular, tripode incluido ',
    volver: 'Ver luces led',
    precio: '$25.00'
  },
  {
    name: 'Tiras Led Smart Marca Nitebird',
    brand: 'Ars',
    descp: 'Luces led multi color de 5 mts marca nitebird. controla las luces desde tu celular, programa horarios automatizados o controla por medio de comandos de voz utilizando alexa o google.',
    volver: 'Ver luces led',
    precio: '$35.00'
  },
  {
    name: '2 Pack Bombillo Led Nexxt Inteligente Br 30 Blanco',
    brand: 'Nexxt',
    descp: 'Crea espacios cautivantes al seleccionar el nivel óptimo de luminosidad a cualquier hora del día. controla las luces de tu hogar en forma remota con el sonido de voz, o con tu dispositivo inteligente, desde dondequiera que estés.',
    volver: 'Ver luces led',
    precio: '$33.50'
  },
]

export const Luces = () => {

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