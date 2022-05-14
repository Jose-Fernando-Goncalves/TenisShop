
import React, { useState } from "react";
import {Container, Image,ContainerDesc, Desc, DescName, Price, Name, Comprar, Buy, Tamanhos, TamanhosView, Sobre, Buttons,ButtonsSelected, ButtonText, ButtonTextTam, SobreText, ButtonComprar, PodeGostar, IMGgostar, SobreImage} from "./style";
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from "react";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Details({navigation}){
    navigation.setOptions({
        headerTitle: 'Summer Set all' 
    })

    const [selectedP, useSelectedP] = useState(false);
    const [selectedM, useSelectedM] = useState(false);
    const [selectedG, useSelectedG] = useState(false);
    const [selectedGG, useSelectedGG] = useState(false);

    const [imagem, useImagem] = useState();


    useEffect(() => {
        AsyncStorage.getItem("image").then((value) => {
            useImagem(value);
            console.log(value)
         }).done();
         
        },[]) 

    useEffect(() => {
        if(!selectedP == true){
            useSelectedM(false)
            useSelectedG(false)
            useSelectedGG(false)
            useSelectedP(true)
        }
    },[SelectP]) 

    useEffect(() => {
        if(selectedM == true){
            useSelectedP(false)
            useSelectedG(false)
            useSelectedGG(false)
            useSelectedM(true)
        }
    },[SelectM]) 

    useEffect(() => {
        if(selectedG == true){
            useSelectedM(false)
            useSelectedP(false)
            useSelectedGG(false)
            useSelectedG(true)
        }
    },[SelectG]) 

    useEffect(() => {
        if(selectedGG == true){
            useSelectedM(false)
            useSelectedG(false)
            useSelectedP(false)
            useSelectedGG(true)
        }
    },[SelectGG]) 

    function SelectP(){
        if(selectedP == false){
            useSelectedP(true)
        }else{
            useSelectedP(false)
        }
    }
    function SelectM(){
        if(selectedM == false){
            useSelectedM(true)
        }else{
            useSelectedM(false)
        }
    }
    function SelectG(){
        if(selectedG == false){
            useSelectedG(true)
        }else{
            useSelectedG(false)
        }
    }
    function SelectGG(){
        if(selectedGG == false){
            useSelectedGG(true)
        }else{
            useSelectedGG(false)
        }
    }
    

    return(
        <Container>
            <ContainerDesc>
                <Image source={{
          uri: imagem,
        }}/>
            <Desc>
                <DescName>
                    <Price>R$ 349,99</Price>
                    <Name>Summer Set all</Name>
                </DescName>

                <Buy><FontAwesome name="shopping-cart" color="white" size={30} /></Buy>
            </Desc>
            <Tamanhos>
                <ButtonText>Tamanhos</ButtonText>
                <TamanhosView horizontal={true} showsHorizontalScrollIndicator={false}>

                <Buttons onPress={SelectP} style={[styles.unchecked, selectedP ? styles.checked : '']}>
                    <ButtonTextTam>P</ButtonTextTam>
                </Buttons>
                
                <Buttons onPress={SelectM} style={[styles.unchecked, selectedM ? styles.checked : '']}>
                    <ButtonTextTam>M</ButtonTextTam>
                </Buttons>

                <Buttons onPress={SelectG} style={[styles.unchecked, selectedG ? styles.checked : '']}>
                    <ButtonTextTam>G</ButtonTextTam>
                </Buttons>

                <Buttons onPress={SelectGG} style={[styles.unchecked, selectedGG ? styles.checked : '']}>
                    <ButtonTextTam>GG</ButtonTextTam>
                </Buttons>

                </TamanhosView>
            </Tamanhos>

            <Sobre>
                <ButtonText>Summer Set All</ButtonText>
                <SobreText>Summer Set All é um conjunto preparado para servir o melhor dos dois mundos conforto e estilo.</SobreText>
                <SobreText>Adquira o seu conjunto de edição especial agora mesmo.</SobreText>

                  <Comprar>
                      <ButtonComprar>
                         <Price>Comprar</Price>  
                      </ButtonComprar> 
                    </Comprar>


                    <ButtonText>Pode gostar</ButtonText>
                    <PodeGostar horizontal={true} showsHorizontalScrollIndicator={false}>
                        <IMGgostar>
                           <SobreImage source={{
          uri: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/> 
                        </IMGgostar>

  

                        <IMGgostar>
                           <SobreImage source={{
          uri: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/> 
                        </IMGgostar>

                        <IMGgostar>
                           <SobreImage source={{
          uri: 'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        }}/> 
                        </IMGgostar>
                    </PodeGostar>
            </Sobre>


            </ContainerDesc>
        </Container>
    );
}