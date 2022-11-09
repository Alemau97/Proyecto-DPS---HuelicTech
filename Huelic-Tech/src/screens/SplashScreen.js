import React, { Component, useState } from "react";
import { View, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { imageBackgroundStyle } from "@styles/General";
import { withNavigation } from "react-navigation";

class LoginScreen extends Component {
  goToScreen(routeName) {
    this.props.navigation.navigate(routeName);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen("Tabs");
      },
      2000,
      this
    );
  }

  render() {
    return (
      <View style={imageBackgroundStyle.image}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
        <Animatable.Image
          animation="slideInDown"
          easing="ease-out"
          iterationCount={1}
          style={{
            width: 320,
            height: 80,
            margin: 100,
          }}
          source={require("@recursos/images/LogoHuelic.png")}
        />
      </View>
    );
  }
}

export default withNavigation(LoginScreen)
