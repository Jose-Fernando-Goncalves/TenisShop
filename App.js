import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/router/router';
import {useFonts, Rubik_400Regular, Rubik_700Bold} from '@expo-google-fonts/rubik';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [fontsLoaded]= useFonts({Rubik_400Regular, Rubik_700Bold});

  if(!fontsLoaded){
    return <AppLoading />;
  }
 
    return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
        <Routes />
    </>
    );
  }

