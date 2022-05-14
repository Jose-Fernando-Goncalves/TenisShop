import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;
export const Header = styled.View`
    width: 100%;
    height: 60px;
    border-bottom-width: 2px;
    border-color: #d1d8e0;
    flex-direction: row;
`;
export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ImageProducts = styled.Image`
    width: 100%;
    height: 100%;

    border-radius: 14px;
`;

export const ImgContainer = styled.View`
    width: 100%;
    height: 200px;
`;
export const ProductsList = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 14px;
    padding-left: 12px;
    padding-right: 12px;
`;
export const Icon = styled.TouchableOpacity`
    right: -86px;
    padding-top: 20px;
`;

export const ProductsContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
`;
export const Products = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 24px;
    padding-top: 16px;
    padding-left: 5px;
`;
export const SubTitle = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 18px;
    color: gray;
    padding-top: 20px;
`;
export const ProductsText = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 14px;
    color: gray;
    margin-top: 2px;
`;
export const ProductsSubText = styled.Text`
    font-family: Rubik_400Regular;
    font-size: 14px;
    color: gray;
`;
export const HomeGrettings = styled.Text`
    font-family: Rubik_700Bold;
    font-size: 24px;
    color: white;
    position: absolute;
    top: 160px;
    margin-left: 14px;
    left: 45px;
`;
export const SubHomeGrettings = styled.Text`
    font-family: Rubik_400Regular;
    font-size: 24px;
    color: white;
    position: absolute;
    top: 160px;
    margin-left: 14px;
`;
export const IconAtt = styled.TouchableOpacity`
    position: absolute;
    top: 145px;
    right: 24px;

`;
export const Saldo = styled.Text`
    font-family: Rubik_400Regular;
    font-size: 20px;
    color: white;
    position: absolute;
    top: 164px;
    right: 20px;
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