import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";
import { Modall } from './Modall';

const icon = [
  {
    img: require("../images/newProd/nuevo1.jpeg"),
    title: 'CASE COOLER MASTER MB520 ARGB MCB-B520-KGNN-RGA'
  },
  {
    img: require("../images/newProd/nuevo2.jpeg"),
    title: 'VENTILADOR COOLER MASTER SICKLEFLOW'
  },
  {
    img: require("../images/newProd/nuevo3.jpeg"),
    title: 'LENTES DE REALIDAD VIRTIUAL VR FUTURE'
  },
  {
    img: require("../images/newProd/nuevo4.jpeg"),
    title: 'MICROSOFT XBOX SERIES X 120FPS 4K 8K HDR 1TB SSD VRR'
  },
  {
    img: require("../images/newProd/nuevo5.jpeg"),
    title: 'MICROSOFT XBOX SERIES S SSD 512GB VRR HDR'
  },
  {
    img: require("../images/newProd/nuevo6.jpeg"),
    title: 'CONTROL INALÁMBRICO XBOX SERIES X/S/ONE BLACK'
  },
  {
    img: require("../images/newProd/nuevo7.jpeg"),
    title: 'CONTROL DUALSHOCK PS4 ROJO MAGMA'
  },
  {
    img: require("../images/newProd/nuevo8.jpeg"),
    title: 'HORIZON ZERO DAWN FORBIDDEN WEST PS5'
  },
  {
    img: require("../images/newProd/nuevo9.jpeg"),
    title: 'ENFRIAMIENTO LIQUIDO COOLER MASTER MASTERLIQUID LITE 120'
  },
  {
    img: require("../images/newProd/nuevo10.jpeg"),
    title: 'LAPTOP ASUS TUF DASH FX516PM-211-TF15-11 PROC.'
  },
  {
    img: require("../images/newProd/nuevo11.jpeg"),
    title: 'MONITOR AOC FULLHD 22P 22B2HM 75Hz VA HDMI'
  },
  {
    img: require("../images/newProd/nuevo12.jpeg"),
    title: 'ROUTER TP-LINK 4G LTE 300MBPS TL-MR100'
  },
]

const modal = [
  {
    name: 'CASE COOLER MASTER MB520 ARGB MCB-B520-KGNN-RGA',
    brand: 'COOLER MASTER',
    descp: 'Tarjetas madre soportadas: ATX, EATX, Micro ATX, Mini-ITX, SSI CEB > Tipo: PC, Peso: 6.9 kg, Peso del paquete: 8 kg, NO INCLUYE FUENTE',
    volver: 'Ver más productos',
    precio: '$125.00'
  },
  {
    name: 'VENTILADOR COOLER MASTER SICKLEFLOW  ARGB FAN MFX-B2DN-183PA-R1 (1212151)',
    brand: 'COOLER MASTER',
    descp: 'VENTILADOR COOLER MASTER SICKLEFLOW ARGB FAN MFX-B2DN-183PA-R1 Tipo de soporte Rodamiento tipo rifle Velocidad de rotación (mín.) 650 RPM Velocidad de rotación (máx.) 1800 RPM Presión máxima de aire 2,5 mmH2O Nivel de ruido (baja velocidad) 8 dB Nivel de ruido (alta velocidad) 27 dB Diámetro de ventilador 12 cm Localización adecuada Carcasa del ordenador ',
    volver: 'Ver más productos',
    precio: '$65.00'
  },
  {
    name: 'LENTES DE REALIDAD VIRTIUAL VR FUTURE',
    brand: 'VR FUTURE',
    descp: 'No descripción',
    volver: 'Ver más productos',
    precio: '$20.00'
  },
  {
    name: 'MICROSOFT XBOX SERIES X 120FPS 4K 8K HDR 1TB SSD VRR',
    brand: 'XBOX',
    descp: 'No descripción',
    volver: 'Ver más productos',
    precio: '$850.00'
  },
  {
    name: 'MICROSOFT XBOX SERIES S SSD 512GB VRR HDR FORTNITE ROCKET LEAGUE BUNDLE M1883',
    brand: 'XBOX',
    descp: 'No descripción',
    volver: 'Ver más productos',
    precio: '$450.00'
  },
  {
    name: 'CONTROL INALÁMBRICO XBOX SERIES X/S/ONE BLACK',
    brand: 'XBOX',
    descp: 'Descripcion 5',
    volver: 'Incluye control + cable USB-C',
    precio: '$89.99'
  },
  {
    name: 'CONTROL DUALSHOCK PS4 ROJO MAGMA',
    brand: 'PLAY STATION',
    descp: 'Da rienda suelta a tu color con la llegada de cuatro nuevos estilos. Cada controlador inalámbrico viene cargado con las mismas características de DUALSHOCK 4 que incluyen panel táctil, sensores de movimiento y batería recargable incorporada. Los sticks analógicos evolucionados y los botones de disparo permiten una precisión sin igual en cada movimiento, mientras que las tecnologías innovadoras ofrecen formas emocionantes de experimentar tus juegos y compartir tus mejores momentos.',
    volver: 'Ver más productos',
    precio: '$75.00'
  },
  {
    name: 'HORIZON ZERO DAWN FORBIDDEN WEST PS5',
    brand: 'GUERRILLA',
    descp: 'La segunda parte de este grandioso juego que nos llevó a un mundo apocalíptico rodeado de máquinas. ',
    volver: 'Ver más productos',
    precio: '$85.00'
  },
  {
    name: 'ENFRIAMIENTO LIQUIDO COOLER MASTER MASTERLIQUID LITE 120 MLW-D12M-A20PW-R1',
    brand: 'COOLER MASTER',
    descp: 'ENFRIAMIENTO LIQUIDO COOLER MASTER MASTERLIQUID LITE MLW-D12M-A20PW-R1 Socket compatibles Intel LGA 2011-v3 / 2011 / 1366 / 1151 / 1150 / 1156 / 1155 / 775 socket AMD AM4 / AM3+ / AM3 / AM2+ / AM2 / FM2+ / FM2 /',
    volver: 'Ver más productos',
    precio: '$72.00'
  },
  {
    name: 'LAPTOP ASUS TUF DASH FX516PM-211-TF15-11 PROC.',
    brand: 'ASUS',
    descp: 'INTEL CORE i7 11370H RAM 16GB ALMACENAMIENTO SSD 512GB RTX3060 6GB PANTALLA FHD 15.6P W11 WIFI6+BT',
    volver: 'Ver más productos',
    precio: '$1625.00'
  },
  {
    name: 'MONITOR AOC FULLHD 22P 22B2HM 75Hz VA HDMI',
    brand: 'AOC',
    descp: 'Pantalla con elegante diseño sin marco que mejora la experiencia de visión, óptimo para setups con múltiples monitores.',
    volver: 'Ver más productos',
    precio: '$200.00'
  },
  {
    name: 'ROUTER TP-LINK 4G LTE 300MBPS TL-MR100',
    brand: 'tp-link',
    descp: 'Red 4G de vanguardia, Inserta una tarjeta SIM , Dos antenas LTE avanzadas desmontables, Modo router Wi-Fi ',
    volver: 'Ver más productos',
    precio: '$92.00'
  },
]

export const NuevosProductos = () => {

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