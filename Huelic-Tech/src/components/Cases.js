import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
    {
      img: require("../images/accesorios/Cases/case.jpeg"),
      title: 'CASE MICROTOWER ANTEC VSK10 BLACK'
    },
    {
      img: require("../images/accesorios/Cases/case2.jpeg"),
      title: 'CASE X-LION KX-580B TEMPERED GLASS SIN FAN FRONT RGB STRIP'
    },
    {
      img: require("../images/accesorios/Cases/case3.jpeg"),
      title: 'CASE COOLER MASTER MASTERBOX MINITOWER B311L TEMPERED GLASS'
    },
    {
      img: require("../images/accesorios/Cases/case4.jpeg"),
      title: 'CASE PARA PC NZXT H210i WHITE CA-H210i-W1'
    },
    {
      img: require("../images/accesorios/Cases/case5.jpeg"),
      title: 'CASE MID TOWER LIAN LI DYNAMIC RAZER EDITION 011DXRZ'
    },
    {
      img: require("../images/accesorios/Cases/case6.jpeg"),
      title: 'CASE ASUS ROG STRIX HELIOS GX601 EVA EDITION'
    },
  ]

const modal = [
  {
    name: 'CASE MICROTOWER ANTEC VSK10 BLACK',
    brand: 'Antec',
    descp: 'Soporte de placa base hasta Micro-ATX. 1 ventilador regular de 4.724 in en la parte trasera incluida. Listo para radiadores de hasta 11.024 in en la parte delantera y 4.724 in en la parte trasera. Soporta hasta 2 x 2 5" y 2 x 3 5"/2 5" Panel lateral de la ventana',
    volver: 'Ver más cases',
    precio: '$49.00',
  },
  {
    name: 'CASE X-LION KX-580B TEMPERED GLASS SIN FAN FRONT RGB STRIP',
    brand: 'X-LION',
    descp: 'Tipo  Torre media ATX. Color Negro. Material de la Caja Acero / Plástico / Vidrio templado. Sin fuente de alimentación. Fuente de alimentación montada. Compatibilidad de placa base  Micro ATX / ATX / ITX / E-ATX. Sin Ventana del panel lateral. LED  ARGB',
    volver: 'Ver más cases',
    precio: '$59.00',
  },
  {
    name: 'CASE COOLER MASTER MASTERBOX MINITOWER B311L TEMPERED GLASS',
    brand: 'COOLER MASTER',
    descp: 'Ventiladores ARGB duales: los ventiladores ARGB de 4.724 in preinstalados con divisor pueden ser gestionados por la placa base, para crear un sistema de iluminación ARGB personalizado. Soporte de placa base: Micro ATX, Mini ITX',
    volver: 'Ver más cases',
    precio: '$115.00',
  },
  {
    name: 'CASE PARA PC NZXT H210i WHITE CA-H210i-W1',
    brand: 'NZXT',
    descp: 'Gestión de cables mejorada: Nuestro kit patentado de enrutamiento de cables con canales preinstalados y correas hace que el cableado sea fácil e intuitivo. Soporte para tarjeta madre: Mini-ITX, MicroATX y ATX.',
    volver: 'Ver más cases',
    precio: '$145.00',
  },
  {
    name: 'CASE MID TOWER LIAN LI DYNAMIC RAZER EDITION 011DXRZ',
    brand: 'LIAN LI',
    descp: 'Tipo de caja: chasis de torre. Estructura de doble cámara. Dimensiones: 10.787 x 17.677 x 17.559 pulgadas (274mm x 449mm x 446mm). Puertos I/O USB 3.0 x2, audio HD USB 3.1 tipo C x1, audio HD. Material (frontal/lateral) vidrio templado + aluminio (cuerpo) 0.8 mm SECC.',
    volver: 'Ver más cases',
    precio: '$235.00',
  },
  {
    name: 'CASE ASUS ROG STRIX HELIOS GX601 EVA EDITION',
    brand: 'ASUS',
    descp: 'El ROG Strix Helios EVA Edition es un gabinete gamer mid-tower premium con tres paneles de vidrio templado, marco de aluminio refinado e iluminación RGB integrada en el panel frontal, EATX (12"x10.9"), ATX, Micro-ATX y Mini-ITX.',
    volver: 'Ver más cases',
    precio: '$659.00',
  },
]

export const Cases = () => {
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
    backgroundColor: "#0E0E0E",
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
