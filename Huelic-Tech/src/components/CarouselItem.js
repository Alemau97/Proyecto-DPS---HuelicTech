import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CarouselItem = ({ item, index }) => {
  return (
    <View style={styles.container}>
      <Image source={item.imgUrl} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 160,
  },
});

export default CarouselItem;
