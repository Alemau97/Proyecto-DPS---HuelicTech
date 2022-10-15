import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, Button, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Footer(){
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.footer}>
          <TouchableHighlight onPress={() => {}}>
            <View 
              style={{flexDirection: 'column', padding: 5}}
              >
                <Icon 
                name='home' 
                type='font-awesome' 
                color='white' 
                size={25} 
                style={styles.icons} 
                />
                <Text style={{color: 'white'}}>Home</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View 
              style={{flexDirection: 'column', padding: 5}}
              >
                <Icon 
                name='desktop' 
                type='font-awesome' 
                color='white' 
                size={25} 
                style={styles.icons} 
                />
                <Text style={{color: 'white'}}>Componentes</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View 
              style={{flexDirection: 'column', padding: 5}}
              >
                <Icon 
                name='keyboard' 
                type='entypo' 
                color='white' 
                size={25} 
                style={styles.icons} 
                />
                <Text style={{color: 'white'}}>Accesorios</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}}>
            <View 
              style={{flexDirection: 'column', padding: 5}}
              >
                <Icon 
                name='chat' 
                type='entypo' 
                color='white' 
                size={25} 
                style={styles.icons} 
                />
                <Text style={{color: 'white'}}>Contáctanos</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#128CB1'
  },
});
