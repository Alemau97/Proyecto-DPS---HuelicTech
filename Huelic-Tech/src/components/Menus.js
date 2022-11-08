import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

export const Menus = () => {

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const closeMenu = () => setVisible(false);
  const openMenu = () => setVisible(true);

  return (
    <Provider>
      <View style={styles.container}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu} mode="outlined">
              Menu
            </Button>
          }>
          <Menu.Item
            onPress={() => {
              navigation.navigate("Home")
            }}
            title="Home"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Home")
            }}
            title="Home"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Home")
            }}
            title="Home"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Home")
            }}
            title="Home"
          />
        </Menu>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
    zIndex: 10000
  },
});
