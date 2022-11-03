import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native'

export default function Inicio() {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable 
        style={styles.boton}
        onPress={() => navigation.navigate("Login")}
        >
          <Text>Login</Text>
      </Pressable>
      <Text style={styles.text}>Inicio</Text>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e272e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ecf0f1',
  },
  boton:{
    color: '#ecf0f1',
    backgroundColor: '#2ecc71',
    padding: 5,
    borderRadius: 5,
    margin: 10

  }
});

