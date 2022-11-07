import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/accesorios/kit.png"),
    title: 'Kits de limpieza'
  },
  {
    img: require("../images/accesorios/kit.png"),
    title: 'Kits de limpieza'
  },
  {
    img: require("../images/accesorios/kit.png"),
    title: 'Kits de limpieza'
  },
  {
    img: require("../images/accesorios/kit.png"),
    title: 'Kits de limpieza'
  },
  {
    img: require("../images/accesorios/kit.png"),
    title: 'Kits de limpieza'
  },
  {
    img: require("../images/accesorios/kit.png"),
    title: 'Kits de limpieza'
  },
]

const modal = [
  {
    name: 'Producto 1',
    brand: 'Marca 1',
    descp: 'Descripcion 1',
    volver: 'Ver kits de limpieza'
  },
  {
    name: 'Producto 2',
    brand: 'Marca 2',
    descp: 'Descripcion 2',
    volver: 'Ver kits de limpieza'
  },
  {
    name: 'Producto 3',
    brand: 'Marca 3',
    descp: 'Descripcion 3',
    volver: 'Ver kits de limpieza'
  },
  {
    name: 'Producto 4',
    brand: 'Marca 4',
    descp: 'Descripcion 4',
    volver: 'Ver kits de limpieza'
  },
  {
    name: 'Producto 5',
    brand: 'Marca 5',
    descp: 'Descripcion 5',
    volver: 'Ver kits de limpieza'
  },
  {
    name: 'Producto 6',
    brand: 'Marca 6',
    descp: 'Descripcion 6',
    volver: 'Ver kits de limpieza'
  },
]

export const Mantenimiento = () => {

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
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
                  />
                </View>
              )
            })
          }
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