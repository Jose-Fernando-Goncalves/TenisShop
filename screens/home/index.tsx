
import React from "react";
import {Container, Title, Header, Image, ImageProducts, ProductsList, ProductsText, ProductsSubText, ImgContainer, SubTitle, Icon, Products, ProductsContainer, HomeGrettings, ButtonAcess, SubHomeGrettings, Saldo, IconAtt} from "./style";
import HeaderIMG from '../../assets/topHeader.jpg'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View } from "react-native-animatable";
import { styles } from "../detail/style";


export default function Home(){
    const navigation = useNavigation();
    const [grettings, setGrettings] = useState('');
    const [money, setMoney] = useState('');
    const [nameSetted, setNameSetted] = useState(true);


    
 useEffect(() => {
    AsyncStorage.getItem("name").then((value) => {
        setGrettings(value);
     }).done();
      
    },[]) 

    useEffect(() => {
        Att();
        },[]) 


    function Detalhes(){
        AsyncStorage.setItem("image", 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
        navigation.navigate('Detail')
    }

    async function  Att() {
        await AsyncStorage.getItem("money").then((dinheiro) => {
             setMoney(dinheiro);})
     }

     async function Exit() {
         setNameSetted(false);
        const jsonValue = JSON.stringify(nameSetted)
        await AsyncStorage.setItem('@nameSetted', jsonValue)
        navigation.navigate('Acess')
    }
  


    function Detalhes2(){
        AsyncStorage.setItem("image", 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
        navigation.navigate('Detail')
    }
    
    
    function Detalhes3(){
        AsyncStorage.setItem("image", 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
        navigation.navigate('Detail')
    }
    function Detalhes4(){
        AsyncStorage.setItem("image", 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
        navigation.navigate('Detail')
    }

    function NavProfile(){
        navigation.navigate('Profile')
    }

    return(
        <Container>
        <ImgContainer>
            <Image source={HeaderIMG}/>
        </ImgContainer>

       <SubHomeGrettings>Olá, </SubHomeGrettings>
       <HomeGrettings>{grettings}</HomeGrettings>
       <Saldo>Saldo {money}</Saldo>
    <IconAtt onPress={Exit}><FontAwesome name="sign-out" color="gray" size={18} /></IconAtt>

        <Header>
            <Title> BUNDLE </Title>
            <SubTitle> | </SubTitle>
            <SubTitle> MASCULINO </SubTitle>

            <Icon onPress={NavProfile}>
                <FontAwesome name="gear" color="gray" size={18} />
            </Icon>
        </Header>

        
        <ProductsContainer>
        <Title> LANÇAMENTOS </Title>
            <ProductsList>

                <Products onPress={Detalhes} >
                    <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                    <ProductsText>Summer</ProductsText>
                    <ProductsSubText>R$ 349,99</ProductsSubText>
                </Products>

                <Products onPress={Detalhes2}>
                    <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                    <ProductsText>Summer</ProductsText>
                    <ProductsSubText>R$ 349,99</ProductsSubText>
                </Products>

            </ProductsList>

            <ProductsList>

            <Products onPress={Detalhes3}>
                <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                <ProductsText>Summer</ProductsText>
                <ProductsSubText>R$ 349,99</ProductsSubText>
            </Products>

            <Products onPress={Detalhes4}>
                    <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                <ProductsText>Summer</ProductsText>
                <ProductsSubText>R$ 349,99</ProductsSubText>
            </Products>
        </ProductsList>

        <ProductsList>

        <Products onPress={Detalhes} >
                    <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                    <ProductsText>Summer</ProductsText>
                    <ProductsSubText>R$ 349,99</ProductsSubText>
                </Products>

                <Products onPress={Detalhes2}>
                    <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                    <ProductsText>Summer</ProductsText>
                    <ProductsSubText>R$ 349,99</ProductsSubText>
                </Products>

            </ProductsList>

            <ProductsList>

            <Products onPress={Detalhes3}>
                <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                <ProductsText>Summer</ProductsText>
                <ProductsSubText>R$ 349,99</ProductsSubText>
            </Products>

            <Products onPress={Detalhes4}>
                    <ImageProducts source={{
          uri: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/>
                <ProductsText>Summer</ProductsText>
                <ProductsSubText>R$ 349,99</ProductsSubText>
            </Products>
        </ProductsList>

        </ProductsContainer>
        </Container>


);
}