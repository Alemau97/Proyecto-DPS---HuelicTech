import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Linking,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from '../layout/Header';
import { mobo, procesador, memoria, almacenamiento, fuente, grafica, Case } from '../datos/CotizacionDatos';
import { Picker } from '@react-native-picker/picker';
import { Icon } from "react-native-elements";

const wha = "50371470021";
const mail = "huelictech2022@gmail.com";

const precioMobo = [0,99.00,149.95,399.00,559.00,99.00,225.00];
const precioProc = [0,79.95,229.00,849.00,199.00,369.00,679.00];
const precioRam = [0,45.00,55.00,89.00,399.00,129.00,69.00];
const precioDisco = [0,55.00,129.00,45.00,129.00,59.00,159.95];
const precioFuente = [0,17.95,69.95,89.00,99.00,144.95,569.00];
const precioGraph = [0,85.00,219.00,349.00,469.00,999.00,2199.00];
const precioCase = [0,49.00,59.00,115.00,145.00,235.00,659.00];

export const Cotizacion = () => {

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Link no reconocido");
    }
  }

  const [selectedMobo, setSelectedMobo] = useState('');
  const [selectedProc, setSelectedProc] = useState('');
  const [selectedRAM, setSelectedRAM] = useState('');
  const [selectedDisco, setSelectedDisco] = useState('');
  const [selectedFuente, setSelectedFuente] = useState('');
  const [selectedGrafica, setSelectedGrafica] = useState('');
  const [selectedCase, setSelectedCase] = useState('');
  
  const [moboPrice, setMoboPrice] = useState(0);
  const [procPrice, setProcPrice] = useState(0);
  const [ramPrice, setRamPrice] = useState(0);
  const [discPrice, setDiscPrice] = useState(0);
  const [fontPrice, setFontPrice] = useState(0);
  const [graphPrice, setGraphPrice] = useState(0);
  const [casePrice, setCasePrice] = useState(0);
  
  let total = moboPrice + procPrice + ramPrice + discPrice + fontPrice + graphPrice + casePrice;

  const mensaje = `¡Hola, Huelic-Tech!, quisiera que me ayuden con una cotización, necesito:
  motherboard: ${selectedMobo}, procesador: ${selectedProc}, RAM: ${selectedRAM},
  almacenamiento: ${selectedDisco}, fuente de poder: ${selectedFuente}, gráfica: ${selectedGrafica} y case: ${selectedCase}`;

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.pickerContainer}>
            <Text style={styles.option}>Motherboard (*): </Text>
            <Picker
              selectedValue={selectedMobo}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedMobo(itemValue); 
                  setMoboPrice(precioMobo[itemIndex]);
                }
              }
            >
              {
                mobo.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
            <Text style={styles.option}>Procesador (*): </Text>
            <Picker
              selectedValue={selectedProc}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedProc(itemValue); 
                  setProcPrice(precioProc[itemIndex]);
                }
              }
            >
              {
                procesador.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
            <Text style={styles.option}>Memoria RAM (*): </Text>
            <Picker
              selectedValue={selectedRAM}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedRAM(itemValue); 
                  setRamPrice(precioRam[itemIndex]);
                }
              }
            >
              {
                memoria.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
            <Text style={styles.option}>Almacenamiento (*): </Text>
            <Picker
              selectedValue={selectedDisco}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedDisco(itemValue); 
                  setDiscPrice(precioDisco[itemIndex]);
                }
              }
            >
              {
                almacenamiento.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
            <Text style={styles.option}>Fuente de poder (*): </Text>
            <Picker
              selectedValue={selectedFuente}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedFuente(itemValue); 
                  setFontPrice(precioFuente[itemIndex]);
                }
              }
            >
              {
                fuente.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
            <Text style={styles.option}>Tarjeta gráfica: </Text>
            <Picker
              selectedValue={selectedGrafica}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedGrafica(itemValue); 
                  setGraphPrice(precioGraph[itemIndex]);
                }
              }
            >
              {
                grafica.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
            <Text style={styles.option}>Case: </Text>
            <Picker
              selectedValue={selectedCase}
              style={{ height: 40, width: '100%', backgroundColor: 'white' }}
              onValueChange={
                (itemValue, itemIndex) => {
                  setSelectedCase(itemValue); 
                  setCasePrice(precioCase[itemIndex]);
                }

              }
            >
              {
                Case.map((data,key)=>{
                  return(
                    <Picker.Item 
                      label={data.nombre} 
                      value={data.id}  
                      style={{fontSize: 12}}
                      key= {key}
                    />
                  )
                })
              }
            </Picker>
          </View>
          <Text style={{width: '100%'}}>Precio aprox: ${total}</Text>
          <View style={styles.cotizar}>
            <TouchableHighlight
              onPress={() => {
                if(selectedMobo == '' || selectedProc == '' || selectedRAM == '' || selectedDisco == '' || selectedFuente == '' ){
                  Alert.alert("Debe llenar los campos necesarios")
                }else{
                  Linking.openURL(
                  `whatsapp://send?text=${mensaje}&phone=${wha}`
                  );
                  setSelectedMobo('');
                  setSelectedProc('');
                  setSelectedRAM('');
                  setSelectedDisco('');
                  setSelectedFuente('');
                  setSelectedGrafica('');
                  setSelectedCase('');
                  setMoboPrice(0);
                  setProcPrice(0);
                  setRamPrice(0);
                  setDiscPrice(0);
                  setFontPrice(0);
                  setGraphPrice(0);
                  setCasePrice(0);
                }
              }}
              underlayColor="transparent"
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                  margin: 10,
                  backgroundColor: "#0E5E6F",
                  borderRadius: 10,
                }}
              >
                <Icon
                  name="whatsapp"
                  type="font-awesome"
                  color="white"
                  size={25}
                  style={styles.icons}
                />
                <Text style={{ color: "white", padding: 5 }}>Cotizar</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
            onPress={() => {
              if(selectedMobo == '' || selectedProc == '' || selectedRAM == '' || selectedDisco == '' || selectedFuente == '' ){
                  Alert.alert("Debe llenar los campos necesarios")
                }else{
                  openUrl(`mailto: ${mail}?subject=Cotización&body=${mensaje}`);
                  setSelectedMobo('');
                  setSelectedProc('');
                  setSelectedRAM('');
                  setSelectedDisco('');
                  setSelectedFuente('');
                  setSelectedGrafica('');
                  setSelectedCase('');
                  setMoboPrice(0);
                  setProcPrice(0);
                  setRamPrice(0);
                  setDiscPrice(0);
                  setFontPrice(0);
                  setGraphPrice(0);
                  setCasePrice(0);
                }
            }}
            underlayColor="transparent"
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                margin: 10,
                backgroundColor: "#0E5E6F",
                borderRadius: 10,
              }}
            >
              <Icon
                name="email"
                type="zocial"
                color="white"
                size={25}
                style={styles.icons}
              />
              <Text style={{ color: "white", padding: 5 }}>Cotizar</Text>
            </View>
          </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(226, 232, 240)",
  },
  container: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerContainer: {
    backgroundColor: '#3A8891',
    width: '95%',
    height: 'auto',
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    color: 'white'
  },
  option: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 5,
    width: '100%'
  },
  cotizar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});