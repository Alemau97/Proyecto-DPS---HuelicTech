import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";

export const MainScreen = () => {
  return (
    <View className="flex flex-1 bg-white justify-center px-10">
      <View className="flex justify-center items-center">
        <Image
          className=""
          style={{ width: 250, height: 62.5 }}
          source={require("../images/LogoHuelic.png")}
        />
      </View>
      <View className="pt-12">
        <View className="pb-5">
          <View className="flex flex-row w-full mb-1">
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../images/UsuarioLogin.png")}
            />
            <Text className="text-[#128CB1] mt-1.5">Usuario</Text>
          </View>
          <TextInput
            keyboardType="text"
            placeholder="Correo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </View>
        <View className="pb-3">
          <View className="flex flex-row">
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../images/ContraseñaLogin.png")}
            />
            <Text className="text-[#128CB1] mt-1.5">Contraseña</Text>
          </View>
          <TextInput
            keyboardType="text"
            placeholder="Contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </View>
      </View>
      <Pressable className="bg-[#128CB1] font-bold py-2 px-4 border border-black rounded mt-4 mx-28">
        <Text className="text-white text-center font-bold">Ingresar</Text>
      </Pressable>
      <Pressable>
        <Text className="text-base text-center text-[#128CB1] font-bold pt-10">
          ¿No tienes una cuenta? ¡Únete!
        </Text>
      </Pressable>
    </View>
  );
};

/*export default class MainScreen extends Component {
  render() {
    return (
      <View className="flex flex-1 bg-white justify-center items-center">
        <Image
          style={{ width: 200, height: 50 }}
          source={require("../images/LogoHuelic.png")}
        />
        <View className="pt-12">
          <View>
            <View className="flex flex-row w-full">
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../images/UsuarioLogin.png")}
              />
              <Text className="text-[#128CB1]">Usuario</Text>
            </View>
            <TextInput
              keyboardType="text"
              placeholder="Correo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </View>
          <View>
            <View className="flex flex-row">
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../images/ContraseñaLogin.png")}
              />
              <Text className="text-[#128CB1]">Contraseña</Text>
            </View>
            <TextInput
              keyboardType="text"
              placeholder="Contraseña"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </View>
        </View>
        <Pressable className="bg-[#128CB1] hover:bg-[#128CB1] font-bold py-2 px-4 border border-black rounded mt-4">
          <Text className="text-white"> Ingresar</Text>
        </Pressable>
        <Pressable>
          <Text className="text-center pt-3 text-[#128CB1]">
            {" "}
            ¿No tienes una cuenta? {"\n"} ¡Únete!{" "}
          </Text>
        </Pressable>
      </View>
    );
  }
}*/
