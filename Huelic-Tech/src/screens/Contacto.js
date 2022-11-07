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

const fa = "https://www.facebook.com/profile.php?id=100086685017713";
const wha = "50371470021";
const call = "+503 74241060";
const mail = "huelictech2022@gmail.com";

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
              Linking.openURL(
                `whatsapp://send?text=Hola necesito información&phone=${wha}`
              );
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
              openUrl(`tel: ${call}`);
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
              <Text style={{ color: "black", padding: 5 }}>Llámanos</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              openUrl(`mailto: ${mail}`);
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
    paddingTop: 70
  },
  linking: {
    padding: 10,
  },
});
