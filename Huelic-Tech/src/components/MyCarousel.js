import React from "react";
import { View, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";

const data = [
  {
    imgUrl: require("../images/Banner1.jpeg"),
  },
  {
    imgUrl: require("../images/Banner2.jpeg"),
  },
  {
    imgUrl: require("../images/Banner3.jpeg"),
  },
];

const MyCarousel = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        inactiveSlideShift={0}
        useScrollView={true}
        sliderWidth={400}
        itemWidth={400}
        style = {styles.carousel}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 'auto',
    paddingLeft: 'auto'
  },
})