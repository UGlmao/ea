import React, { Component } from "react";
import { Text, View } from 'react-native';
import DrawerNavigation from "../navigator/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native"

export default class HomeScreen extends Component{
    render(){
        return(
        <NavigationContainer>
           <DrawerNavigation/> 
        </NavigationContainer>
        )
    }
   
}

