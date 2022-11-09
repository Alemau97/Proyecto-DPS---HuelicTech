import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import { Button, Menu, Provider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  return (
    <View style={styles.Header}>
      <View style={styles.TopHeader}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../images/LogoHuelic.png")}
            style={styles.logo}
          />
          <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate("Main")}
          >
            <Icon name="person" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartContainer}>
            <Icon name="shopping-cart" color="white" size={30} />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  TopHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#1D1D1D",
    paddingTop: 45,
    padding: 20,
    width: "100%",
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: '100%'
  },
  logo: {
    width: 230,
    height: 60,
  },
  bottomHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1D1D1D",
    paddingTop: 0,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
    width: "100%",
  },
  searchBar: {
    width: "70%",
  },
  searchBarInputContainer: {
    height: 45,
    borderColor: "#128CB1",
    borderWidth: 2,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderRadius: 6,
  },
  buttons: {
    paddingLeft: 20,
    width: "28%",
    padding: 2,
    backgroundColor: "#1D1D1D",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginContainer: {
    padding: 20,
  },
  cartContainer: {
    padding: 5,
  },
});
