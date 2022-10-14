import React from "react";
import {createDrawerNavigator} from 'react-navigation-drawer';
import ArtScreen from "../screens/ArtScreen";
import GrammarScreen from "../screens/GrammarScreen";
import HistoryScreen from "../screens/HistoryScreen";
import MathScreen from "../screens/MathScreen";
import OportunityScreen from "../screens/OpportunityScreen";
import ReadingScreen from "../screens/ReadingScreen";
import ScienceScreen from "../screens/ScienceScreen";

const Drawer = createDrawerNavigator();

export default class DrawerNavigation extends Component{
    render(){
        return(
            <Drawer.Navigator>
               <Drawer.Screen
               name = "Art"
               component = {ArtScreen}
               options={{ unmountOnBlur: true }}
                />
                <Drawer.Screen
               name = "Grammar"
               component = {GrammarScreen}
               options={{ unmountOnBlur: true }}
                />
                <Drawer.Screen
               name = "History"
               component = {HistoryScreen}
               options={{ unmountOnBlur: true }}
                />
                <Drawer.Screen
               name = "Math"
               component = {MathScreen}
               options={{ unmountOnBlur: true }}
                />
                <Drawer.Screen
               name = "Opportunity Areas"
               component = {OportunityScreen}
               options={{ unmountOnBlur: true }}
                />
                <Drawer.Screen
               name = "Reading"
               component = {ReadingScreen}
               options={{ unmountOnBlur: true }}
                />
                <Drawer.Screen
               name = "Science"
               component = {ScienceScreen}
               options={{ unmountOnBlur: true }}
                />
            </Drawer.Navigator>
        )
        
    }
}
