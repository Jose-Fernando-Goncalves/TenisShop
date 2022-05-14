import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/home";
import Details from "../screens/detail";
import Acess from "../screens/acess";
import Profile from "../screens/profile";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Acess"
                component={Acess}
                options={{headerShown: false}}
                />

                <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />

                <Stack.Screen 
                name="Detail"
                component={Details}
                options={{}}
                /> 

                <Stack.Screen 
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
                /> 

            </Stack.Navigator>
        </NavigationContainer>
    );
}
