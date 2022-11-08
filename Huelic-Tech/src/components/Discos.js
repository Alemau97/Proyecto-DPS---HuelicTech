import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/components/Almacenamiento/SEAGATE.jpeg"),
    title: 'DISCO DURO DE PC SEAGATE 1TB ST1000DM010'
  },
  {
    img: require("../images/components/Almacenamiento/SEAGATE2.jpeg"),
    title: 'DISCO DURO DE PC SEAGATE BARRACUDA 4TB ST4000DM004'
  },
  {
    img: require("../images/components/Almacenamiento/KINGSTONDISC.jpeg"),
    title: 'DISCO SOLIDO SSD KINGSTON 480GB A400 2.5 SA400S37'
  },
  {
    img: require("../images/components/Almacenamiento/ADATA.jpeg"),
    title: 'DISCO DE ESTADO SOLIDO SSD ADATA SU650 960GB'
  },
  {
    img: require("../images/components/Almacenamiento/KINGSTONM2.jpeg"),
    title: 'UNIDAD DE ALMACENAMIENTO M.2 KINGSTON 500GB NV1 SNVS/500G'
  },
  {
    img: require("../images/components/Almacenamiento/XPGM2.jpeg"),
    title: 'UNIDAD DE ALMACENAMIENTO M.2 XPG SPECTRIX S20G 1TB RGB'
  },
]

const modal = [
  {
    name: 'DISCO DURO DE PC SEAGATE 1TB ST1000DM010',
    brand: 'SEAGATE',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$55.00',
  },
  {
    name: 'DISCO DURO DE PC SEAGATE BARRACUDA 4TB ST4000DM004',
    brand: 'SEAGATE',
    descp: 'SEAGATE BARRACUDA  4TB Sata  ST4000DM004  56mb cache  5.4krpm  DISCO DURO DE PC',
    volver: 'Ver más procesadores',
    precio: '$129.00',
  },
  {
    name: 'DISCO SOLIDO SSD KINGSTON 480GB A400 2.5 SA400S37',
    brand: 'KINGSTON',
    descp: 'Arranques, cargas y transferencias de archivos todos con mayor rapidez Más fiable y duradera que las unidades de disco duro 500MB/s en lectura, 320MB/s en escritura',
    volver: 'Ver más procesadores',
    precio: '$45.00',
  },
  {
    name: 'DISCO DE ESTADO SOLIDO SSD ADATA SU650 960GB',
    brand: 'ADATA',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$129.00',
  },
  {
    name: 'UNIDAD DE ALMACENAMIENTO M.2 KINGSTON 500GB NV1 SNVS/500G',
    brand: 'KINGSTON',
    descp: 'M.2 2280 PCIe NVMe™ Gen 3.0 de 4 carriles 500 GB 2100/1100MB/s',
    volver: 'Ver más procesadores',
    precio: '$59.00',
  },
  {
    name: 'UNIDAD DE ALMACENAMIENTO M.2 XPG SPECTRIX S20G 1TB RGB',
    brand: 'XPG',
    descp: 'No descripción',
    volver: 'Ver más procesadores',
    precio: '$159.95',
  },
]

export const Discos = () => {

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