import React, { Component,useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {MaterialIcons} from '@expo/vector-icons'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Animated
} from "react-native";
import { NavigationContext } from "react-navigation";
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
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {firebase, firebaseConfig} from '../../firebase-config'


initializeApp({
  apiKey: "AIzaSyAnGkSxdldcrDT0zw40JddguEKOXeKi6KY",
  authDomain: "huelictech.firebaseapp.com",
  projectId: "huelictech",
  storageBucket: "huelictech.appspot.com",
  messagingSenderId: "492518106509",
  appId: "1:492518106509:web:cc3c7f76d4cb43aaf589c4",
});

WebBrowser.maybeCompleteAuthSession();
//codigo para mensajes - inicio
const getMessage = () => {
  return 'No se permiten campos vacios';
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
        transform: [{
          translateY: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, 0],
          })
        }],
        margin: 10,
        marginBottom: 5,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6
      }}
    >
      <Text style={{textAlign:"center",color: "white"}}> {props.message} </Text>

    </Animated.View>
  )
}
//codigo para mensajes - FIN


export const RegisterScreen = ({navigation}) => {

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //const para mensajes
  const [messages, setMessages] = React.useState([]);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
   const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('cuenta creada');
      const user = userCredential.user;
      console.log(user)
      navigation.navigate("Homepage")
    })
    .catch(err => {
      console.log(err)
      Alert.alert(err.message)
    })
  }

   //validaciones de input
   const  Validar = () => {
    if ([email,password].includes('')) {
      const message = getMessage();
      setMessages([...messages, message]);
  }
     
  }

  return (
    <View className="flex flex-1 bg-white justify-center px-12">
      <View
        style={{
          position: 'absolute',
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
                messages.filter(
                  (currentMessage) =>
                    currentMessage !== message
                )
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
            source={require("../images/UsuarioLogin.png")}
          />
          <Text className="text-[#128CB1] mt-1.5">Usuario</Text>
        </View>
        <TextInput
        onChangeText={(text) => setEmail(text)}
        style = {styles.input}
          keyboardType="text"
          placeholder="Ingresar Correo"
          className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </View>
      <View className="pb-3">
        <View className="flex flex-row mb-1">
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../images/ContraseñaLogin.png")}
          />
          <Text className="text-[#128CB1] mt-1.5">Contraseña</Text>
        </View>
        <TextInput
        onChangeText={(text) => setPassword(text)}
        style = {styles.input}
          secureTextEntry={visible}
          keyboardType="text"
          placeholder="Ingresar Contraseña"
          className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <TouchableOpacity className="position absolute ml-60 top-11" onPress={()=> {
          setVisible(!visible) 
          setShow(!show)}
          }>
         <MaterialCommunityIcons name={show === false ? 'eye-outline' : 'eye-off-outline'} size={26}/>
        </TouchableOpacity>
      </View>
    </View>
    <Pressable onPress={() => {
      handleCreateAccount();
      Validar();
      }} className="bg-[#128CB1] font-bold py-2 px-4 border border-black rounded mt-4 mx-15">
      <Text className="text-white text-center font-bold">Registrarse</Text>
    </Pressable>
    <Pressable onPress={() => {navigation.navigate("Main")}}>
      <Text className="text-base text-center text-[#128CB1] font-bold pt-10">
        ¿Ya tienes una cuenta? ¡Ingresa ya!
      </Text>
    </Pressable>
  </View>
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
    backgroundColor: 'white',
    borderRadius: 8,
  }
});
