import styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';
import { StyleSheet} from 'react-native';
import { RectButton } from "react-native-gesture-handler";

export const styles = StyleSheet.create({

    start_button: {
        
      },
      start_button_disabled: {
        backgroundColor: 'gray',
      },

});

export const Container = styled.View`
    width: 100%;
    height: 700px;
    background-color: white;
`;

export const Image = styled(Animatable.Image)`
    width: 120px;
    height: 120px;
    align-self: center;
    bottom: 320px;
    border-radius: 70px;
    border-width: 2px;
    border-color: white;
    position: absolute;
`;

export const ImgContainer = styled(Animatable.View)`
    width: 100%;
    height: 500px;
    margin-top: 300px;
    background-color: black;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    align-items: center;
`;
export const TextAcess = styled(Animatable.Text)`
      font-family: Rubik_700Bold;
      color: black;
      font-size: 18px;
`;
export const ButtonAcess = styled.TouchableOpacity`
    width: 220px;
    height: 60px;
    border-radius: 12px;
    margin-top: 250px;
    background-color: white;
    align-items: center;
    justify-content: center;
`;
export const Name = styled.TextInput`
    width: 270px;
    height: 60px;
    border-radius: 12px;
    top: 150px;
    background-color: black;
    align-items: center;
    justify-content: center;
    font-family: Rubik_700Bold;
      color: white;
      font-size: 20px;
      text-align: center;
      border-bottom-width: 1px;
      border-color: white;
    
`;
export const DescInput = styled.Text`
    top: 140px;
    right: 60px;
    font-family: Rubik_700Bold;
      color: white;
      font-size: 22px;
    
`;

