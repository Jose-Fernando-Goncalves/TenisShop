import React, { useRef, useState, useCallback } from 'react';
import { ScrollView, Button, Alert} from 'react-native';
import {ButtonMoney,ScrollContainer,MountainF, ButtonText, Container, MoneyInput, Bowl, Liquid, BowlTop, BowlShadow, BowlReflex, LiquidTop, Cube, Moon, Stars, MountainB, MoonText, Card, CardsContainer, CardShadow, CardColor, CardIcon, CardText, styles, ModalCard, ModalContent, ModalColor, ModalColorContent, ModalIcon, ModalText, VideoBack } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { View } from 'react-native-animatable';


export default function Profile() {
  const [money, setMoney] = useState('R$0,00');
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(true);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const Salvar = async () => {
    AsyncStorage.setItem("money", money);
    navigation.replace('Home')
  }


 return (



  <ScrollContainer>

      <Container>
          <Bowl>
            <BowlShadow />
              <BowlTop />
                <Liquid />
                <LiquidTop />
                  <BowlReflex />
                </Bowl>

          <MoneyInput
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: ''
        }}
        value={money}
        onChangeText={setMoney}
      />
        <ButtonMoney onPress={Salvar}>
          <ButtonText>SALVAR</ButtonText>
        </ButtonMoney>

          <Moon source={require('../../assets/moon.png')} />
        <Cube>
          <Stars source={require('../../assets/stars.png')} />

          <MountainB source={require('../../assets/mountains_behind.png')}/>
        <MoonText animation="fadeInUp" iterationDelay={2000}>MoonLight</MoonText>
          <MountainF source={require('../../assets/mountains_front.png')}/>

        </Cube>

        <CardsContainer>
          <CardShadow onPress={toggleModal}>
            <Card>
              <CardColor>
                <CardIcon><FontAwesome name="leaf" color="white" size={20} style={{marginBottom: 8}}/></CardIcon>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi distinctio pariatur beatae
                </CardText>
              </CardColor>
            </Card>
          </CardShadow>
          
          <CardShadow onPress={toggleModal}>
            <Card>
               <CardColor>
                  <CardIcon><FontAwesome name="heart" color="white" size={20} style={{marginBottom: 8}}/></CardIcon>
                  <CardText>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi distinctio pariatur beatae
                </CardText>
                </CardColor>
            </Card>
          </CardShadow>

          <CardShadow onPress={toggleModal}>
            <Card>
                <CardColor>
                  <CardIcon><FontAwesome name="tint" color="white" size={20} style={{marginBottom: 8}}/></CardIcon>
                  <CardText>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi distinctio pariatur beatae
                </CardText>
                </CardColor>
            </Card>
          </CardShadow>

        </CardsContainer>


        <Modal isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
        >
          <ModalContent onPress={toggleModal}>
            <ModalColor>
              <ModalColorContent>
                <ModalIcon>
                  <FontAwesome name="leaf" color="white" size={90} style={{marginBottom: 8}}/>
                </ModalIcon>

                <ModalText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quam facere assumenda earum reiciendis iusto sed possimus, quas voluptate optio eaque vitae labore? Autem rem debitis hic nesciunt illo ducimus.
                </ModalText>
              </ModalColorContent>
            </ModalColor>
          </ModalContent>
        </Modal>

      
      </Container>

  </ScrollContainer>



  );
}