import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/accesorios/Perifericos/audifonos.jpeg"),
    title: 'AUDIFONO GAMING XTRIKE ME GH-509'
  },
  {
    img: require("../images/accesorios/Perifericos/audifonos2.jpeg"),
    title: 'AUDIFONO PARA DJ HP-DJPRO ITEM'
  },
  {
    img: require("../images/accesorios/Perifericos/Teclado.jpeg"),
    title: 'TECLADO MECÁNICO GAMING USB FANTECH MK852'
  },
  {
    img: require("../images/accesorios/Perifericos/microfono.jpeg"),
    title: 'MICROFONO DE TRANSMISION PROFESIONAL FANTECH LEVIOSA MCX01 RGB'
  },
  {
    img: require("../images/accesorios/Perifericos/mousegamer.jpeg"),
    title: 'MOUSE USB OPTICO XTECH XTM-165 NEGRO'
  },
  {
    img: require("../images/accesorios/Perifericos/alexa.jpeg"),
    title: 'PARLANTES AMAZON ECHO DOT (4HT GEN)'
  },
]

const modal = [
  {
    name: 'AUDIFONO GAMING XTRIKE ME GH-509',
    brand: 'XTRIKE ME',
    descp: 'Graves profundos y potentes, Orejeras de cuero acolchado suave, Diadema acolchada ajustable, Control de volumen en la oreja, Tipo de micrófono: omnidireccional,Luz de fondo: RGB *Conectores: 2 conectores de 3,5 mm, USB (para luz LED),2 conectores de 3,5 mm a través del divisor incluido *Longitud del cable: 2,1 m, Compatibilidad: PC, consolas (ps5, PS4, Xbox One).',
    volver: 'Ver periféricos',
    precio: '$20.00'
  },
  {
    name: 'AUDIFONO PARA DJ HP-DJPRO ITEM #348426 (A011362)',
    brand: 'DJ PRO',
    descp: 'Cable de conexion 3.5, Cable retractil de conexion 3.5 (Longitud extendido 3mts), Recto de conexion 3.5mm con MIC, Adaptador de conexion 6.3mm, Bolsa de carga.',
    volver: 'Ver periféricos',
    precio: '$72.00'
  },
  {
    name: 'TECLADO MECÁNICO GAMING USB FANTECH MK852',
    brand: 'FANTECH',
    descp: 'Efectos de iluminación > Todas las llaves anti fantasma > Un interruptor mecánico evolucionado > Control de medios > Cable USB de alta velocidad para juegos',
    volver: 'Ver periféricos',
    precio:'$70.00'
  },
  {
    name: 'MICROFONO DE TRANSMISION PROFESIONAL FANTECH LEVIOSA MCX01 RGB',
    brand: 'FANTECH',
    descp: 'Interfaz USB, Patrón polar cardioid,  Micrófono. Sensibilidad de micrófono. -38 dB. Tipo. ..., Peso y dimensiones. Peso del micrófono. 252 g, Detalles técnicos. Altura. 172 mm. Receptor. Voltaje de entrada AC. 5 V, Color. Color del producto. Negro,Desempeño. Retroiluminación LED. Si. ,Grabacion de voz * Chat de voz - Streamers ,Youtubers, RESPUESTA DE FRECUENCIA DE KARAOKE DE PC: 20Hz-20kHz',
    volver: 'Ver periféricos',
    precio: '$65.40'
  },
  {
    name: 'MOUSE USB OPTICO XTECH XTM-165 NEGRO',
    brand: 'XTECH',
    descp: 'Tipo: Mouse 3D de 3 botones, con cable > Tecnología : Sensor óptico > Resolución : 1000dpi > Interfaz: USB > Estándar de compatibilidad: Configuración automática plug and play > Requisitos del sistema: Familia Windows®, Mac y Linux > Color : Negro > Peso: 75g > Dimensiones (LaxAnxAl): 11,2x 7,3x3,6cm > Longitud del cable: 1,25m ',
    volver: 'Ver periféricos',
    precio: '$6.00'
  },
  {
    name: 'PARLANTES AMAZON ECHO DOT (4HT GEN) SMART WITCH CLOCK CON ALEXA - TWILIGHT BLUE',
    brand: 'AMAZON',
    descp: 'Conectividad Bluetooth El perfil de distribución de audio avanzado (A2DP, por sus siglas en inglés) permite la transmisión de audio desde tu dispositivo móvil a Echo Dot o desde Echo Dot a tu bocina Bluetooth. Perfil de control remoto de audio/video (AVRCP, por sus siglas en inglés) para el control por voz de los dispositivos móviles conectados. El control de voz de manos libres no es compatible con los dispositivos Mac OS X',
    volver: 'Ver periféricos',
    precio:'$82.00'
  },
]

export const Perifericos = () => {

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