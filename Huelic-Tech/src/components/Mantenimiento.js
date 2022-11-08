import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/accesorios/mantenimiento/mante1.jpeg"),
    title: 'AIRE COMPRIMIDO BLOW OFF'
  },
  {
    img: require("../images/accesorios/mantenimiento/mante2.jpeg"),
    title: 'LIMPIADOR DE CONTACTOS CRC'
  },
  {
    img: require("../images/accesorios/mantenimiento/mante3.jpeg"),
    title: 'PASTA TERMICA ARCTIC MX-4'
  },
  {
    img: require("../images/accesorios/mantenimiento/mante4.jpeg"),
    title: 'PASTA TERMICA GRIZZLY KYONAUT'
  },
  {
    img: require("../images/accesorios/mantenimiento/mante5.jpeg"),
    title: 'PULSERA ANTIESTATICA LEKO'
  },
  {
    img: require("../images/accesorios/mantenimiento/mante6.jpeg"),
    title: 'CEPILLO ANTIESTATICA ASHATA'
  },
]

const modal = [
  {
    name: 'AIRE COMPRIMIDO BLOW OFF',
    brand: 'Blow Off',
    descp: 'Blow Off es un limpiador todo en uno estirilizado que puede ser utilizado tanto en oficinas como en el hogar. Perfecto para computadoras, impresoras, camaras y más.',
    volver: 'Ver kits de limpieza',
    precio: '$6.95'
  },
  {
    name: 'LIMPIADOR DE CONTACTOS CRC',
    brand: 'CRC',
    descp: 'Presentación en aerosol de 4.5 onzas, elimina aceite, grasa y suciedad. Secado rápido sin dejar marca.',
    volver: 'Ver kits de limpieza',
    precio: '$8.95'
  },
  {
    name: 'PASTA TERMICA ARCTIC MX-4',
    brand: 'Arctic',
    descp: 'Pasta termica Arctic de 4 gramos, durabilidad de 8 años, viscosidad de 870 poise.',
    volver: 'Ver kits de limpieza',
    precio: '$11.00'
  },
  {
    name: 'PASTA TERMICA GRIZZLY KYONAUT',
    brand: 'Grizzly',
    descp: 'Pasta termica Grizzly de 1 gramos, viscosidad 120-170 poise.',
    volver: 'Ver kits de limpieza',
    precio: '$9.50'
  },
  {
    name: 'PULSERA ANTIESTATICA LEKO',
    brand: 'Leko',
    descp: 'Pulsera para enviar las cargas estáticas del cuerpo a tierra física, para manejar sin riesgo componentes electrónicos delicados, tales como circuitos CMOS o tarjetas de computadora y televisión.',
    volver: 'Ver kits de limpieza',
    precio: '$7.99'
  },
  {
    name: 'CEPILLO ANTIESTATICA ASHATA',
    brand: 'Ashata',
    descp: 'Hecho de nailon antiestático para mayor durabilidad, adecuado para placas base y placas PCB, kit de cepillos portátiles.',
    volver: 'Ver kits de limpieza',
    precio: '$14.99'
  },
]

export const Mantenimiento = () => {

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