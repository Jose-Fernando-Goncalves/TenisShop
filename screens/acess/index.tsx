
import React from "react";
import {Container, Image, ImgContainer,TextAcess, ButtonAcess, Name, DescInput} from "./style";
import Logo from '../../assets/logo.png';
import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { styles } from "./style";


export default function Acess(){
    const navigation = useNavigation();
    const [disable, setDisable] = useState(true);
    const [nameSetted, setNameSetted] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
            if(name === ''){
                setDisable(true); 
                  
            }else{
                setDisable(false);
            }
        },[name]) 

        useEffect(() => {
            const value =  AsyncStorage.getItem("@nameSetted")
                if(value !== null) {


                        navigation.navigate('Home')
                  }
              
            },[nameSetted]) 


        const Salvar = async () => {
            setNameSetted(true);
            AsyncStorage.setItem("name", name);
            const jsonValue = JSON.stringify(nameSetted)
            await AsyncStorage.setItem('@nameSetted', jsonValue)
            navigation.navigate('Home')
          }

    return(
        <Container>
      
        <ImgContainer animation="slideInUp">
        <DescInput><FontAwesome name="sign-in" color="white" size={20}/> Qual seu nome?</DescInput>
            <Name onChangeText={setName} value={name}></Name>

            <ButtonAcess onPress={Salvar} disabled={disable}                 style={[styles.start_button,
                    disable ? styles.start_button_disabled : ''
                ]}>
                <TextAcess>
                    Entrar
                </TextAcess>
            </ButtonAcess>

        </ImgContainer>

          <Image source={Logo} animation="flipInY"/>
        </Container>
    );
}

