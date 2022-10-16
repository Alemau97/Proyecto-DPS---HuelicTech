import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';

export const CompsAcs = (props) => {
  return (
    <>
      <View 
        style={styles.buttons}
        >
          <View style={styles.imgContainer}>
            <Image source={props.img} style={styles.img} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1%',
    margin: '2%',
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  imgContainer: {
    width: '31%',
  },  
  img: {
    width: 80,
    height: 80
  },
  titleContainer: {
    width: '63%',
    padding: '1%'
  },
  title: {
    fontSize: 16
  }
});