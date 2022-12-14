import React, { Component, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppNavigation } from "../navigation/AppNavigation";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert,
  Animated,
  ImageBackground
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  onAuthStateChanged,
} from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebase, firebaseConfig } from "../../firebase-config";

initializeApp({
  apiKey: "AIzaSyCkFAd0MprrUh2SzUG642koMXimoOV8Kr8",
  authDomain: "huelictechbd.firebaseapp.com",
  projectId: "huelictechbd",
  storageBucket: "huelictechbd.appspot.com",
  messagingSenderId: "1010914003632",
  appId: "1:1010914003632:web:82f024703bc5e021f3c975",
  measurementId: "G-GYQD9C3QDT",
});

WebBrowser.maybeCompleteAuthSession();
//codigo para mensajes - inicio
const getMessage = () => {
  return "No se permiten campos vacios";
};

const Message = (props) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onHide();
    });
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: "red",
        padding: 10,
        borderRadius: 4,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
      }}
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        {" "}
        {props.message}{" "}
      </Text>
    </Animated.View>
  );
};
//codigo para mensajes - FIN

export default function MainScreen({ navigation: { navigate } }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1010914003632-t6q0ln5c5gdossbfquh15l3ijm7toihg.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          let name = user.displayName;
          console.log(name);
          navigate("Tabs");
        } else {
        }
      });
    }
  }, [response]);

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //const para mensajes
  const [messages, setMessages] = React.useState([]);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("Te logeaste");
      const user = userCredential.user;
      console.log(user);
      navigate("Tabs");
    });
  };
  //validaciones de input
  const Validar = () => {
    if ([email, password].includes("")) {
      const message = getMessage();
      setMessages([...messages, message]);
    }
  };
  return (
    <ImageBackground source={require('../images/ImageBackHome.png')} style={{width:"100%", height:"100%"}}>
    <View className="flex flex-1 justify-center px-12">
      <View
        style={{
          position: "absolute",
          top: 45,
          left: 0,
          right: 0,
        }}
      >
        {messages.map((message) => (
          <Message
            key={message}
            message={message}
            onHide={() => {
              setMessages((messages) =>
                messages.filter((currentMessage) => currentMessage !== message)
              );
            }}
          />
        ))}
      </View>

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
              source={require("../images/userLogin.png")}
            />
            <Text className="text-white mt-1.5">Usuario</Text>
          </View>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            keyboardType="text"
            placeholder="Ingresar Correo"
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </View>
        <View className="pb-3">
          <View className="flex flex-row mb-1">
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../images/lockLogin.png")}
            />
            <Text className="text-white mt-1.5">Contrase??a</Text>
          </View>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry={visible}
            keyboardType="text"
            placeholder="Ingresar Contrase??a"
            className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <TouchableOpacity
            className="position absolute ml-60 top-11"
            onPress={() => {
              setVisible(!visible);
              setShow(!show);
            }}
          >
            <MaterialCommunityIcons
              name={show === false ? "eye-outline" : "eye-off-outline"}
              size={26}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Pressable
        onPress={() => {
          handleSignIn();
          Validar();
        }}
        className="bg-[#128CB1] font-bold py-2 px-4 border border-black rounded mt-4 mx-15"
      >
        <Text className="text-white text-center font-bold">Ingresar</Text>
      </Pressable>

      <Pressable
        onPress={() => promptAsync()}
        className="font-bold py-2 px-4 border border-white rounded mt-4 mx-15"
      >
        <View className="flex flex-row justify-center align-middle">
          <Image
            className="mt-1 mx-2"
            style={{ width: 15, height: 15 }}
            source={require("../images/IconGoogle.png")}
          />
          <Text className="text-center text-white m-0.5 font-bold">
            Ingresar con google
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          navigate("Register");
        }}
      >
        <Text className="text-base text-center text-white font-bold pt-10">
          ??No tienes una cuenta? ????nete!
        </Text>
      </Pressable>
    </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 8,
  },
});
