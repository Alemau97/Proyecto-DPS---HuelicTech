import React, {Component} from 'react'
import {View, StatusBar} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {imageBackgroundStyle} from '@styles/General'

export default class LoginScreen extends Component{
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    componentDidMount(){
        setTimeout( ()=>{
            this.goToScreen('Main')
        }, 3000, this)
    }

    render(){
        return(
           <View style={imageBackgroundStyle.image}>
               <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
               <Animatable.Image
                   animation="pulse"
                   easing="ease-out"
                   iterationCount="infinite"
                   style={{
                       width: 320,
                       height: 80,
                       margin: 100,
                   }}
                   source={require('@recursos/images/LogoHuelic.png')}
               />
           </View>
        )
        
    }
}