import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '@screens/SplashScreen'
import {MainScreen} from '@screens/MainScreen' 
import { RegisterScreen } from '@screens/RegisterScreen'
import Header from '../layout/Header'


const AppNavigation = createStackNavigator({

    Splash:{
        screen: SplashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },

    Main:{
        screen: MainScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
    Header:{
        screen: Header,
        navigationOptions:{
            headerShown: false,
        }
    }

})

export default createAppContainer(AppNavigation)
