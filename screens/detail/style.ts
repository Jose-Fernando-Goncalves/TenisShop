import styled from "styled-components/native";
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    checked: {
        backgroundColor: '#000',
      },
      un: {
        backgroundColor: 'gray',
      },

});


export const Container = styled.View`
    flex: 1;
`;
export const Image = styled.Image`
    width: 100%;
    height: 340px;
    
`;
export const SobreImage = styled.Image`
    width: 100%;
    height: 150px;
    
`;
export const ContainerDesc = styled.ScrollView`
     flex: 1;
`;
export const Desc = styled.View`
      width: 100%;
      height: 80px;
      background-color: #000;
      flex-direction: row;
      justify-content: space-between;
`;
export const DescName = styled.View`

`;

export const Price = styled.Text`
      font-family: Rubik_700Bold;
      font-size: 22px;
      padding-top: 10px;
      margin-left: 12px;
      color: white;
`;
export const Name = styled.Text`
      font-family: Rubik_400Regular;
      padding-top: 8px;
      margin-left: 12px;
      font-size: 18px;
      color: white;
`;
export const Buy = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-right: 20px;
    margin-top: 20px;
`;

export const Tamanhos = styled.View`
    width: 100%;
    height: 80px;
    padding-top: 4px;
    padding-left: 14px;
`;
export const Sobre = styled.View`
    width: 100%;
    height: 100%;
    padding-top: 14px;
    padding-left: 14px;
    margin-bottom: 20px;
`;
export const Comprar = styled.View`
    height: 80px;
    margin-top: 30px;
    align-items: center;
    margin-bottom: 10px;
`;
export const ButtonComprar = styled.TouchableOpacity`
    width: 250px;
    height: 50px;
    background-color: black;
    align-items: center;
    border-radius: 12px;

`;
export const SobreText = styled.Text`
      font-family: Rubik_400Regular;
      padding-top: 8px;
      padding-left: 4px;
      font-size: 18px;
      color: black;
`;
export const TamanhosView = styled.ScrollView`
    flex: 1;
    flex-direction: row;
    margin-top: 10px;
    margin-right: 14px;
`;

export const PodeGostar = styled.ScrollView`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
`;

export const ButtonsSelected = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    border-color: #d2dae2;
    border-width: 1px;
`;
export const Buttons = styled.TouchableOpacity`
    width: 100px;
    height: 30px;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    border-color: #d2dae2;
    border-width: 1px;
`;
export const IMGgostar = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    margin-left: 10px;
`;
export const ButtonText = styled.Text`
      font-family: Rubik_700Bold;
      font-size: 22px;
      color: black;
`;
export const ButtonTextTam = styled.Text`
      font-family: Rubik_700Bold;
      font-size: 22px;
      color: #d2dae2;
`;