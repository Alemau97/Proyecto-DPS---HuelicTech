import React from "react";
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
import { Icon } from "react-native-elements";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const fa = "https://www.google.com/?hl=es";
const wha = "https://www.google.com/?hl=es";
const call = "https://www.google.com/?hl=es";
const mail = "https://www.google.com/?hl=es";

export const Contacto = () => {
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Link no reconocido");
    }
  };

  return (
    <>
      <Header />
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            padding: 10,
          }}
        >
          Contáctate con nosotros
        </Text>
        <View style={styles.linking}>
          <TouchableHighlight
            onPress={() => {
              openUrl(fa);
            }}
            underlayColor="transparent"
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                margin: 10,
                backgroundColor: "rgb(226, 232, 240)",
                borderRadius: 10,
              }}
            >
              <Icon
                name="facebook"
                type="brandico"
                color="black"
                size={25}
                style={styles.icons}
              />
              <Text style={{ color: "black", padding: 5 }}>Facebook</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              openUrl(wha);
            }}
            underlayColor="transparent"
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                margin: 10,
                backgroundColor: "rgb(226, 232, 240)",
                borderRadius: 10,
              }}
            >
              <Icon
                name="whatsapp"
                type="font-awesome"
                color="black"
                size={25}
                style={styles.icons}
              />
              <Text style={{ color: "black", padding: 5 }}>WhatsApp</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              openUrl(call);
            }}
            underlayColor="transparent"
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                margin: 10,
                backgroundColor: "rgb(226, 232, 240)",
                borderRadius: 10,
              }}
            >
              <Icon
                name="call"
                type="zocial"
                color="black"
                size={25}
                style={styles.icons}
              />
              <Text style={{ color: "black", padding: 5 }}>LLámanos</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              openUrl(mail);
            }}
            underlayColor="transparent"
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
                margin: 10,
                backgroundColor: "rgb(226, 232, 240)",
                borderRadius: 10,
              }}
            >
              <Icon
                name="email"
                type="zocial"
                color="black"
                size={25}
                style={styles.icons}
              />
              <Text style={{ color: "black", padding: 5 }}>Escríbenos</Text>
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linking: {
    padding: 10,
  },
});
