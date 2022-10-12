import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <View className="flex flex-1 bg-white justify-center items-center">
      <Image style={{ width: 200, height: 50 }} source={require('./src/images/LogoHuelic.png')} />
      <View className="pt-12">
        <View>
          <View className="flex flex-row w-full">
            <Image style={{ width: 20, height: 20 }} source={require('./src/images/UsuarioLogin.png')} />
            <Text className="text-[#128CB1]">Usuario</Text>
          </View>
          <TextInput keyboardType='text' placeholder='Correo' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </View>
        <View>
          <View className="flex flex-row">
            <Image style={{ width: 20, height: 20 }} source={require('./src/images/ContraseñaLogin.png')} />
            <Text className="text-[#128CB1]">Contraseña</Text>
          </View>
          <TextInput keyboardType='text' placeholder='Contraseña' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </View>
      </View>
      <Pressable className="bg-[#128CB1] hover:bg-[#128CB1] font-bold py-2 px-4 border border-black rounded mt-4">
        <Text className="text-white" > Ingresar</Text>
      </Pressable>
      <Pressable>
        <Text className="text-center pt-3 text-[#128CB1]"> ¿No tienes una cuenta? {"\n"} ¡Únete! </Text>
      </Pressable>


    </View>
  );
}


