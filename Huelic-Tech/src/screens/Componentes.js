import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CompsAcs } from '../components/CompAcs';
import { NavigationContext } from "react-navigation";

import Footer from '../layout/Footer';
import Header from '../layout/Header';

const data = [
  {
    img: require("../images/components/motherboard.jpg"),
    title: 'Motherboards'
  },
  {
    img: require("../images/components/procesador.jpg"),
    title: 'Procesadores'
  },
  {
    img: require("../images/components/ram.jpeg"),
    title: 'Memoria RAM'
  },
  {
    img: require("../images/components/ssd.jpg"),
    title: 'Almacenamiento'
  },
  {
    img: require("../images/components/fuente.jpg"),
    title: 'Fuentes de poder'
  },
  {
    img: require("../images/components/tarjeta.jpg"),
    title: 'Tarjetas gráficas'
  },
]

export const Componentes = ({navigation}) => {
  return (
    <>
      <Header />
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView> 
          {
            data.map((data,key) => {
              return(
                <CompsAcs 
                  key={key}
                  img={data.img}
                  title={data.title}
                />
              )
            })
          }
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    flex: 1,
    backgroundColor: 'rgb(226, 232, 240)'
  },
})