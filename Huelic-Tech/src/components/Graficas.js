import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/components/Graficas/GT710.jpeg"),
    title: 'TARJETA DE VIDEO GIGABYTE GT710 2GB GDDR3'
  },
  {
    img: require("../images/components/Graficas/GTX1630.jpeg"),
    title: 'TARJETA DE VIDEO MSI VENTUS XS GTX1630 4GB GDDR6'
  },
  {
    img: require("../images/components/Graficas/RX6500.jpeg"),
    title: 'TARJETA DE VIDEO BIOSTAR RX6500XT 4GB GDDR6'
  },
  {
    img: require("../images/components/Graficas/GTX1660.jpeg"),
    title: 'TARJETA DE VIDEO ASUS TUF GTX1660TI 6GB GDDR6'
  },
  {
    img: require("../images/components/Graficas/RX6700.jpeg"),
    title: 'TARJETA DE VIDEO AORUS ELITE RX6700XT 12GB GDDR6'
  },
  {
    img: require("../images/components/Graficas/RTX4090.jpeg"),
    title: 'TARJETA DE VIDEO GIGABYTE GAMING RTX4090 24GB GDDR6X'
  },
]

const modal = [
  {
    name: 'TARJETA DE VIDEO GIGABYTE GT710 2GB GDDR3 ',
    brand: 'GIGABYTE',
    descp: 'Alimentado por GPU NVIDIA GeForce GT 710. Integrado con la primera memoria DDR3 de 2048 MB y interfaz de memoria de 64 bits. Reloj central: 954 MHz',
    volver: 'Ver más gráficas',
    precio: '$85.00',
  },
  {
    name: 'TARJETA DE VIDEO MSI VENTUS XS GTX1630 4GB GDDR6',
    brand: 'MSI',
    descp: 'Boost Clock / Memory Speed 1815 MHz / 12 Gbps 4GB GDDR6 DisplayPort x 1(v1.4a). HDMI x 1(Supports 4K@60Hz as specified in HDMI 2.0b) DL-DVI-D x 1',
    volver: 'Ver más gráficas',
    precio: '$219.00',
  },
  {
    name: 'TARJETA DE VIDEO BIOSTAR RX6500XT 4GB GDDR6',
    brand: 'BIOSTAR',
    descp: '16 Unidades de procesamiento y aceleradores de rayos 232 GB/s. Ancho de banda efectivo con AMD Infinity Cache™ 4 GB / 8 GB GDDR6. 2610 MHz/2650 MHz Reloj de juego',
    volver: 'Ver más gráficas',
    precio: '$349.00',
  },
  {
    name: 'TARJETA DE VIDEO ASUS TUF GTX1660TI 6GB GDDR6',
    brand: 'ASUS',
    descp: 'CHIPSET GRAFICO : GTX1660TI. Velocidad de memoria: 12 Gbps. Resolución máxima digital: 7680 x 4320. El GeForce GTX 1660 Ti está construido con el innovador rendimiento gráfico de la galardonada arquitectura NVIDIA Turing.',
    volver: 'Ver más gráficas',
    precio: '$469.00',
  },
  {
    name: 'TARJETA DE VIDEO AORUS ELITE RX6700XT 12GB GDDR6',
    brand: 'AORUS',
    descp: 'CHIPSET GRAFICO : RX6700. Alimentado por AMD RDNA 2 Radeon RX 6700 XT. Integrado con interfaz de memoria GDDR6 de 192 bits de 12 GB. Sistema de refrigeración WINDFORCE 3X con ventiladores giratorios alternativos. Refrigeración de pantalla Nano lubricante de grafeno',
    volver: 'Ver más gráficas',
    precio: '$999.00',
  },
  {
    name: 'TARJETA DE VIDEO GIGABYTE GAMING RTX4090 24GB GDDR6X',
    brand: 'GIGABYTE',
    descp: 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency. 4th Generation Tensor Cores: Up to 2X AI performance. 3rd Generation RT Cores: Up to 2X ray tracing performance. Powered by GeForce RTX® 4090. Integrated with 24GB GDDR6X 384-bit memory interface',
    volver: 'Ver más gráficas',
    precio: '$2199.00',
  },
]

export const Graficas = () => {

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