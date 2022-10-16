import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { NavigationContext } from "react-navigation";
import { Card } from "react-native-elements";
import Header from "../layout/Header";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export const Homepage = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <ScrollView>
        <View className=" flex flex-row flex-wrap py-6 bg-slate-200">
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Componentes")}
          >
            <Card containerStyle={styles.cardItem}>
              <Image
                source={require("../images/compo2Menu.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardLabel}>Componentes</Text>
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Accesorios")}
          >
            <Card containerStyle={styles.cardItem}>
              <Image
                source={require("../images/accesoriosMenu.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardLabel}>Accesorios</Text>
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Card containerStyle={styles.cardItem}>
              <Image
                source={require("../images/cotizacionMenu.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardLabel}>Cotización</Text>
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Card containerStyle={styles.cardItem}>
              <Image
                source={require("../images/newIcon.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: "-14%",
                  left: "-22%",
                  position: "absolute",
                  zIndex: 5,
                }}
              />
              <Image
                source={require("../images/nuevoMenu.jpg")}
                style={styles.cardImage}
              />
              <Text style={styles.cardLabel}>Nuevos Productos</Text>
            </Card>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    width: "41%",
    padding: 10,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 12,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 5,
  },
  cardLabel: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "600",
  },
});
