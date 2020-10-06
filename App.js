import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import ListScreen from "./src/screen/ListScreen";
import SemesterScreen from "./src/screen/SemesterScreen";
import ProfileScreen from "./src/screen/ProfileScreen";

import fstsemScreen from "./src/screen/fstsemScreen";
import secsemScreen from "./src/screen/secsemScreen";
import thirdsemScreen from "./src/screen/thirdsemScreen";
const stack =createStackNavigator();

function Apps(){
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name ="Home" component = {HomeScreen}/>
                <stack.Screen name ="Semesters" component = {SemesterScreen}/>
                <stack.Screen name ="Faculty-List" component = {ListScreen}/>
                <stack.Screen name ="Profile" component = {ProfileScreen}/>
                <stack.Screen name ="Course-list" component = {fstsemScreen}/>
                <stack.Screen name ="Course" component = {secsemScreen}/>
                <stack.Screen name ="Course-List" component = {thirdsemScreen}/>
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Apps;