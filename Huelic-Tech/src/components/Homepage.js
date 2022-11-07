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
import { Card } from "react-native-elements";
import Header from "../layout/Header";
import { useNavigation } from "@react-navigation/native";
import MyCarousel from "./MyCarousel";

export const Homepage = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View style={styles.mainContainer}>
        <View className=" flex flex-row flex-wrap py-2 bg-slate-200" style={{height: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
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
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("NuevosProductos")}
          >
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
          <MyCarousel />
        </View>
      </View>
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
  mainContainer: {
    flex: 1
  }
});
