import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "@screens/SplashScreen";
import  MainScreen  from "@screens/MainScreen";
import  RegisterScreen  from "@screens/RegisterScreen";
import { Homepage } from "@components/Homepage";
import Prueba from "@components/Prueba";

const AppNavigation = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    },
  },

  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      headerShown: false,
    },
    params: {
      name: "Huelic Boss",
    },
  },
  Prueba: {
    screen: Prueba,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigation);
