import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/components/motherboards/H510-GYGA.jpeg"),
    title: 'MOTHERBOARD GIGABYTE H510M H LGA1200 11VA GEN'
  },
  {
    img: require("../images/components/motherboards/B560-ASUS.jpeg"),
    title: 'MOTHERBOARD ASUS PRIME B560M-A LGA1200 INTEL 11TH GEN 90MB17A0'
  },
  {
    img: require("../images/components/motherboards/X570-ASUS.jpeg"),
    title: 'MOTHERBOARD ASROCK X670E PRO RS AM5 DDR5'
  },
  {
    img: require("../images/components/motherboards/X670-ASROCK.jpeg"),
    title: 'MOTHERBOARD ASUS ROG STRIX Z690-F GAMING WIFI LGA1700 DDR5'
  },
  {
    img: require("../images/components/motherboards/Z690-ASUS.jpeg"),
    title: 'MOTHERBOARD GIGABYTE B450M DS3H AM4'
  },
  {
    img: require("../images/components/motherboards/B450-GYGA.jpeg"),
    title: 'MOTHERBOARD ASUS PRIME X570-P AM4 AURA'
  },
]

const modal = [
  {
    name: 'MOTHERBOARD GIGABYTE H510M H LGA1200 11VA GEN',
    brand: 'GIGABYTE',
    descp: 'Chipset: Intel® H510 Express Chipset. Capacidad máxima soportada de la memoria RAM: Hasta 64gb 3200mhz',
    volver: 'Ver más motherboard',
    precio: '$99.00',
  },
  {
    name: 'MOTHERBOARD ASUS PRIME B560M-A LGA1200 INTEL 11TH GEN 90MB17A0',
    brand: 'ASUS',
    descp: 'Chipset: Intel® H510 Express Chipset. Capacidad máxima soportada de la memoria RAM: Hasta 64gb 3200mhz',
    volver: 'Ver más motherboard',
    precio: '$149.95',
  },
  {
    name: 'MOTHERBOARD ASROCK X670E PRO RS AM5 DDR5',
    brand: 'ASROCK',
    descp: 'No descripción',
    volver: 'Ver más motherboard',
    precio: '$399.00',
  },
  {
    name: 'MOTHERBOARD ASUS ROG STRIX Z690-F GAMING WIFI LGA1700 DDR5',
    brand: 'ASUS',
    descp: 'Intel® Socket LGA1700 for 13th Gen Intel® Core™ Processors & 12th Gen Intel® Core™, Pentium® Gold and Celeron® Processors. Supports Intel® Turbo Boost Technology 2.0 and Intel® Turbo Boost Max Technology 3.0**',
    volver: 'Ver más motherboard',
    precio: '$559.00',
  },
  {
    name: 'MOTHERBOARD GIGABYTE B450M DS3H AM4',
    brand: 'GIGABYTE',
    descp: 'Placa madre AMD B450 Ultra Durable con LAN Realtek ® GbE con cFosSpeed, PCIe Gen3 x4 M.2, soporte de tiras de LED RGB de 7 colores, resistencia anti-azufre, listo para CEC 2019',
    volver: 'Ver más motherboard',
    precio: '$99.00',
  },
  {
    name: 'MOTHERBOARD ASUS PRIME X570-P AM4 AURA',
    brand: 'ASUS',
    descp: 'LA placa base AMD AM4 ATX con PCIe 4.0, 12 etapas de potencia DrMOS, DDR4 4400MHz, doble M.2, HDMI, SATA 6Gb / s, USB 3.2 Gen 2 y encabezado Aura Sync RGB',
    volver: 'Ver más motherboard',
    precio: '$225.00',
  },
]

export const Motherboards = () => {

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