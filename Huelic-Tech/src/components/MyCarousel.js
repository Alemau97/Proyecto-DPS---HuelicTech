import React from "react";
import { View } from "react-native";
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
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={CarouselItem}
        inactiveSlideShift={0}
        useScrollView={true}
        sliderWidth={360}
        itemWidth={360}
      />
    </View>
  );
};

export default MyCarousel;
