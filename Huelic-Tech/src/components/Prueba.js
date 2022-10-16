import React, { useState, useEffect } from "react";
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
import { Text, View, Button, StyleSheet } from "react-native";
import { AppNavigation } from "../navigation/AppNavigation";

initializeApp({
  apiKey: "AIzaSyAnGkSxdldcrDT0zw40JddguEKOXeKi6KY",
  authDomain: "huelictech.firebaseapp.com",
  projectId: "huelictech",
  storageBucket: "huelictech.appspot.com",
  messagingSenderId: "492518106509",
  appId: "1:492518106509:web:cc3c7f76d4cb43aaf589c4",
});

WebBrowser.maybeCompleteAuthSession();

export default function Prueba({ navigation: { navigate } }) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "492518106509-phgcgespc5o85v00rp62t8epsefbhril.apps.googleusercontent.com",
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
        } else {
        }
      });
    }
  }, [response]);

  return (
    <View style={styles.button}>
      <Button disabled={!request} title="Login" onPress={() => promptAsync()} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
  },
});
