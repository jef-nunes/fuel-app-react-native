import { Image, StyleSheet, View } from "react-native";

export default function LogoTitulo(){
  return (
        <View style={estilos.container}>
            <Image source={require("../img/logo_titulo.png")}/>
        </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flexDirection:"row",
    backgroundColor: "#ffffffff",
    alignItems:"center",
    justifyContent:"center",
    boxShadow: "1px 1px 8px 2px #bebebeff",
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop:20,
    paddingBottom:20,
    width:300,
    height: 90
  },
});