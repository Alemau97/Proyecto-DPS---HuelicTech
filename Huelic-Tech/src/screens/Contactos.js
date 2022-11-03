import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Contactos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contactos</Text>
      <StatusBar style="auto" />
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
  }
});

