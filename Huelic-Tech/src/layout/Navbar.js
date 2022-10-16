import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';

export default function Navbar(){
  return (
    <View style={styles.Header}>
      <View style={styles.TopHeader}>
        <View style={styles.imgContainer}>
          <Image 
          source={require('../images/LogoHuelic.png')} 
          style={styles.logo}
          />
        </View>
        <View style={styles.menuContainer}>
          <Icon name='menu' color='white' size={30}/>
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <View style={styles.searchBar}>
          <SearchBar 
            placeholder='Buscar'
            showCancel
            round
            platform='android'
          />
        </View>
        <View style={styles.buttons}>
          <View>
            <Icon name='person' color='black' size={30}/>
          </View>
          <View>
            <Icon name='person' color='black' size={30}/>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  Header:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },  
  TopHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    padding: 20,
    width: '100%',
  },  
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 270,
    height: 70,
  },
  menuContainer: {
    backgroundColor: '#128CB1',
    padding: 8,
    borderRadius: 10
  },
  bottomHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingTop: 5,
    paddingBottom: 5,
    padding: 20,
    width: '100%',
  },
  searchBar: {
    backgroundColor: 'red',
    padding: 2,
    width: '75%'
  },
  buttons: {
    width: '20%',
    padding: 2,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});