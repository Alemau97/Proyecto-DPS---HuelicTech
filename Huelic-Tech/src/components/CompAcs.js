import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CompsAcs = (props) => {

  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity 
        style={styles.buttons}
        onPress={()=>navigation.navigate(`${props.dirigir}`)}
        >
        <View style={styles.imgContainer}>
          <Image source={props.img} style={styles.img} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
    margin: "2%",
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 10,
  },
  imgContainer: {
    width: "31%",
    marginLeft: 4,
  },
  img: {
    width: 90,
    height: 80,
  },
  titleContainer: {
    width: "63%",
    padding: "1%",
  },
  title: {
    fontSize: 16,
  },
});
