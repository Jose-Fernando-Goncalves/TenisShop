import styled from "styled-components/native";
import { StyleSheet} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as Animatable from 'react-native-animatable';
export const styles = StyleSheet.create({

    midCard: {
        flex: 1,
      },
      un: {
        borderTopWidth: 5,
        borderTopColor: '#41c1fb'
      },


});

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background-color: black;
    z-index: 10;
`;

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 150px;
`;


export const Bowl = styled(Animatable.View)`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 15px;
    border-radius: 150px;
    border: 5px solid transparent;
`;

export const BowlTop = styled.View`
    position: absolute;
    left: 75px;
    top: -30px;
    width: 150px;
    height: 80px;
    border: 15px solid #444;
    margin-bottom: 15px;
    border-radius: 80px;
    background-color: #222;
`;
export const BowlShadow = styled.View`
    position: absolute;
    left: 75px;
    top: -20px;
    width: 150px;
    height: 80px;
    margin-bottom: 15px;
    border-radius: 80px;
    background-color: #222;
`;
export const BowlReflex = styled.View`
    position: absolute;
    left: 50px;
    top: 90px;
    width: 120px;
    height: 80px;
    margin-bottom: 15px;
    border-radius: 80px;
    background-color: rgba(255, 255, 255, 0.05);
`;
export const Liquid = styled.View`
    position: absolute;
    top: 120px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    background-color: #41c1fb;
    border-bottom-left-radius: 150px;
    border-bottom-right-radius: 150px;
`;
export const LiquidTop = styled.View`
    position: absolute;
    top: 110px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    height: 20px;
    border-radius: 40px;
    background-color: #1fa4e0;
`;


export const MoneyInput = styled(TextInputMask)`
    width: 200px;
    height: 60px;
    font-family: Rubik_400Regular;
    font-size: 40px;
    color: white;
    margin-bottom: 14px;
    text-align: center;
    position: relative;
    top: -170px;
`;

export const ButtonMoney = styled.TouchableOpacity`
    width: 200px;
    height: 60px;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    margin-bottom: 120px;
`;
export const ButtonText = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 24px;
    color: white;
`;

export const Cube = styled(Animatable.View)`
    position: relative;
    width: 100%;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding-top: 25px;
    margin-bottom: 25px;
`;
export const Moon = styled(Animatable.Image)`
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: 10;
    top: 500px;
`;
export const MountainB = styled(Animatable.Image)`
    position: relative;
    width: 100%;
    height: 515px;
`;
export const MountainF = styled(Animatable.Image)`
    position: absolute;
    width: 100%;
    height: 515px;
    margin-top: 88px;
    z-index: 2;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

`;
export const Stars = styled(Animatable.Image)`
    position: absolute;
    width: 100%;
    height: 100%;
`;
export const MoonText = styled(Animatable.Text)`
    font-family: Rubik_700Bold;
    font-size: 40px;
    color: white;
    position: absolute;
    z-index: 1;
    top: 100px;
    left: 75px;
`;

export const Card = styled(Animatable.View)`
    position: relative;
    width: 90px;
    height: 150px;
    background-color: #41c1fb;
    border-radius: 30px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
`;
export const CardColor = styled(Animatable.View)`
    position: relative;
    width: 90px;
    height: 145px;
    background-color: #2e86de;
    border-radius: 15px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    z-index: 2;
`;

export const CardText = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 10px;
    color: white;
    position: relative;
    width: 80px;
    height: 100px;
    margin-left: 8px;
    margin-right: 10px;
    margin-top: 30px;
    z-index: 1;
`;

export const CardIcon = styled(Animatable.View)`
    position: absolute;
    width: 35px;
    height: 28px;
    background-color: #1fa4e0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: 28px;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;



export const CardShadow = styled.TouchableOpacity`
    position: relative;
    width: 90px;
    height: 160px;
    background-color: #1fa4e0;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const CardsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 100px;
`;


export const ModalContent = styled.TouchableOpacity`
    background-color: #1fa4e0;
    border-bottom-left-radius: 250px;
    border-bottom-right-radius: 250px;

    flex: 1;

`;

export const ModalColor = styled(Animatable.View)`
    width: 100%;
    height: 590px;
    background-color:  #41c1fb;
    border-radius: 50px;
    border-bottom-left-radius: 250px;
    border-bottom-right-radius: 250px;
    margin-top: 10px;
`;

export const ModalColorContent = styled(Animatable.View)`
    width: 100%;
    height: 570px;
    background-color:   #2e86de;
    border-radius: 50px;
    border-bottom-left-radius: 250px;
    border-bottom-right-radius: 250px;
    align-items: center;
`;
export const ModalIcon = styled(Animatable.View)`
    width: 150px;
    height: 120px;
    background-color:   #1fa4e0;
    border-bottom-left-radius: 250px;
    border-bottom-right-radius: 250px;
    align-items: center;
`;
export const ModalText = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 24px;
    color: white;
    position: relative;
    width: 300px;
    height: 520px;
    margin-top: 50px;
    margin-left: 16px;
`;
export const VideoBack = styled(Animatable.View)`
    width: 350px;
    height: 60px;
    align-items: center;
    justify-content: center;
    border: 2px solid #1fa4e0;
    margin-top: 120px;
    margin-bottom: 80px;
`;

