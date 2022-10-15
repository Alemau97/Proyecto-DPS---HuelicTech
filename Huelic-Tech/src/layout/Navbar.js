import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';
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
          <Icon name='menu' color='white' size={25}/>
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style = {styles.searchBar}
            keyboardType="text"
            placeholder="Buscar..."
          />
        </View>
        <View style={styles.buttons}>
          <View>
            <Icon name='user' type='evilicon' color='black' size={35} style={styles.icons}/>
          </View>
          <View>
            <Icon name='cart' type='evilicon' color='black' size={35} style={styles.icons} />
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
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
    paddingTop: 5,
    paddingBottom: 5,
    padding: 20,
    width: '100%',
  },
  searchBarContainer: {
    padding: 0,
    margin: '1%',
    width: '73%',
    height: 'auto',
    borderRadius: 10,
  },
  searchBar: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(226, 232, 240)'
  },
  buttons: {
    width: '23%',
    padding: 5,
    margin: '1%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    padding: 5,
    margin: '2%',
    borderRadius: 10,
    backgroundColor: 'rgb(248,250,252)'
  },
});