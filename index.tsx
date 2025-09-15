import { StyleSheet, View } from "react-native";
import Formulario from "./components/Formulario";
import LogoTitulo from "./components/LogoTitulo";
import useCustomFonts from "./hooks/use-custom-fonts";

export default function Index() {
  const fontsLoaded = useCustomFonts();
  return (
    <View style={estilos.pagina}>
        <View style={{top:"5%", left:"35%"}}>
          <LogoTitulo/>
        </View>
        <View style={estilos.viewPrincipal}>
          <Formulario/>
        </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  pagina:{
    flex:1
  },
  viewPrincipal:{
    position:"absolute",
    left:"25%",
    top:"15%",
    backgroundColor: "#dee4e7ff",
    alignItems:"center",
    justifyContent:"center",
    boxShadow: "1px 1px 10px 1px #ccccccff"
  }
});