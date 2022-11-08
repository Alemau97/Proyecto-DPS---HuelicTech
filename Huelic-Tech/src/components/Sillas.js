import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/accesorios/Sillas/sillaAmarilla.jpeg"),
    title: 'SILLA GAMER AMARILLA PRIMUS THRONOS 100T'
  },
  {
    img: require("../images/accesorios/Sillas/sillaRojaNegra.jpeg"),
    title: 'Silla Gaming Plus Negro-Rojo Nenotech'
  },
  {
    img: require("../images/accesorios/Sillas/sillaCuero.jpeg"),
    title: 'Silla Gaming Pro Vino Nenotech'
  },
  {
    img: require("../images/accesorios/Sillas/sillaNeon.jpeg"),
    title: 'Silla Gaming Negro-Rojo 200Lb Reclinable G112'
  },
  {
    img: require("../images/accesorios/Sillas/sillaScorpio.jpeg"),
    title: 'Silla Gaming Negro 330Lb Reclinable Ch-106 Marvo'
  },
  {
    img: require("../images/accesorios/Sillas/sillaVerde.jpeg"),
    title: 'RadioShack Silla Gaming Estilo Racing'
  },
]

const modal = [
  {
    name: 'SILLA GAMER AMARILLA PRIMUS THRONOS 100T',
    brand: 'PRIMUS',
    descp: 'CAPACIDAD DE CARGA MÁX.: 120KG > CONTROL DE ALTURA: FIABLE MECANISMO NEUMÁTICO DE GAS > ALTURA MÍNIMA DEL ASIENTO: 44CM > ALTURA MÁXIMA DEL ASIENTO: 52,5CM > MATERIAL DEL MARCO: METAL > TIPO DE BASE: BASE DE METAL RESISTENTE DE COLOR NEGRO > MATERIAL DEL FORRO DEL ASIENTO: PVC Y PU DE PRIMERA CALIDAD > MECANISMO DE DESPLAZAMIENTO: RUEDAS GIRATORIAS DE NYLON',
    volver: 'Ver sillas gamer',
    precio: '$300.99'
  },
  {
    name: 'Silla Gaming Plus Negro-Rojo Nenotech',
    brand: 'Nenotech',
    descp: 'Silla Gaming Plus Negro-Rojo 300LB GL4 Con Reposa Pies Nenotech, Material: PU Cuero, Base: Plástica 350 mm Tamaño Llantas: 60 mm, Estructura: 1.5 mm marco acero, Peso soporta: 300 Lbs',
    volver: 'Ver sillas gamer',
    precio: '$360.00'
  },
  {
    name: 'Silla Gaming Pro Vino Nenotech',
    brand: 'NGamer',
    descp: 'Silla Gaming Pro Vino 300LB GL4 Con Reposa Pies Nenotech, Material: PU Cuero, Base: Plástica 350 mm Tamaño Llantas: 60 mm, Estructura: 1.5 mm marco acero, Peso soporta: 300 Lbs',
    volver: 'Ver sillas gamer',
    precio: '$350.00'
  },
  {
    name: 'Silla Gaming Negro-Rojo 200Lb Reclinable G112',
    brand: 'Reclinable',
    descp: 'Silla Gaming Pro Vino 200LB GL4, Material: PU Cuero, Base: Plástica 320 mm Tamaño Llantas: 62 mm, Estructura: 1.6 mm marco acero, Peso soporta: 320 Lbs',
    volver: 'Ver sillas gamer',
    precio: '$289.00'
  },
  {
    name: 'Silla Gaming Negro 330Lb Reclinable Ch-106 Marvo',
    brand: 'Marvo',
    descp: 'Silla Gaming Pro Vino 330LB GL4 ',
    volver: 'Ver sillas gamer',
    precio: '$218.30'
  },
  {
    name: 'RadioShack Silla Gaming Estilo Racing / 2606036',
    brand: 'Radioshack',
    descp: 'Está diseñada con reposacabezas ajustable, almohadas de soporte lumbar y reposapiés extensible. La silla incluye sistema reclinable de 90° a155°, los reposabrazos suaves y acolchados se deslizan con la silla mientras se reclina. Soporta peso máximo hasta 275 lb.',
    volver: 'Ver sillas gamer',
    precio: '$280.20'
  },
]

export const Sillas = () => {

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