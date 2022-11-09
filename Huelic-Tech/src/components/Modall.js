import React, {useState} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Modal, Pressable, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { Card } from "react-native-elements";



export const Modall = ({nombre,marca,descp,img,title,volver,precio}) => {

    const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <ImageBackground source={require('../images/ImageBackHome.png')} style={{width:"100%", height:"100%"}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalTextTitulo}>Nombre: {nombre}</Text>
              <Text style={styles.modalText}>Marca: {marca}</Text>
              <Text style={styles.modalText}>Descripción: {descp}</Text>
              <Image source={img} style={styles.ModalImage} />
              <Text style={styles.modalText2}>Precio: {precio}</Text>
              
            </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>{volver}</Text>
              </Pressable>
            </View>
          </View>
          </ImageBackground>
      </Modal>
        <Pressable
          onPress={() => setModalVisible(true)}
        >
          <Card containerStyle={styles.cardItem}>
            <Image
              source={img}
              style={styles.cardImage}
            />
            <Text style={styles.cardLabel}>{title}</Text>
          </Card>
        </Pressable>   
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    flex: 1,
    
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
  ModalImage:{
    width:"50%",
    height:150,
    borderRadius:10,
    padding:5,
    marginLeft:"auto",
    marginRight:"auto",
    marginVertical:20,
  },
  cardLabel: {
    textAlign: "justify",
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
    padding: 20
  },
  button: {
    backgroundColor: '#0C901B',
    padding: 10,
    borderRadius: 10,
  },
  modalText: {
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: "white",
  },
  modalText2: {
    padding: 5,
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },  
  modalTextTitulo: {
    padding: 5,
    marginBottom:30,
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },   
  textStyle: {
    textAlign: 'center',
    color: 'white'
  }
})