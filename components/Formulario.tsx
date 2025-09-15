import {
    Button,
    StyleSheet, Text,
    TextInput, View
} from "react-native";
import useCustomFonts from "../hooks/use-custom-fonts";


export default function Formulario(){
    const fontsLoaded = useCustomFonts();
    return(
        <View style={estilos.formContainer}>
            <View style={estilos.tituloContainer}>
                <Text style={estilos.titulo}>Calculadora de Gastos</Text>
                <Text style={estilos.descricao}>Calcular gastos para uma viagem com base no consumo e preço da gasolina</Text>
            </View>
            <View style={estilos.labelInputContainer}>
                <Text style={estilos.label}>Distância (Km)</Text>
                <TextInput 
                keyboardType="numeric"
                value=""
                placeholder="?"
                style={estilos.input}/>
            </View>
            <View style={estilos.labelInputContainer}>
                <Text style={estilos.label}>Consumo (L)</Text>
                <TextInput 
                keyboardType="numeric"
                value=""
                placeholder="?"
                style={estilos.input}/>
            </View>
            <View style={estilos.labelInputContainer}>
                <Text style={estilos.label}>Preço (R$)</Text>
                <TextInput 
                keyboardType="numeric"
                value=""
                placeholder="?"
                style={estilos.input}/>
            </View>
            <View style={{marginRight:"40%"}}>
                <Button title="Calcular"/>
            </View>
            <View style={estilos.resultadoContainer}>
                    <Text style={estilos.label}>Resultado: </Text>
                    <Text style={estilos.resultado}>?</Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize:40,
        fontFamily: "ChakraPetch",
        fontWeight:"bold",
        color:"#000000ff",
        width:500,
        textAlign:"center"
    },  
    descricao:{
        fontSize:20,
        fontWeight:"bold",
        color:"#88722aff",
        backgroundColor:"#feffdfff",
        width:400,
        textAlign:"center",
        borderRadius:15,
        borderStyle:"solid",
        borderWidth:2,
        borderColor:"#dfd394ff",
        padding: 15
    },   
    formContainer:{
        alignItems:"flex-end",
        padding:30,
        borderRadius:15,
        backgroundColor:"white",
        gap:45,
        boxShadow: "1px 1px 8px 2px #bebebeff"
    },
    label:{
        fontFamily: "ChakraPetch",
    
        fontSize:26,
        fontWeight:"bold"
    },
    labelInputContainer:{
        flexDirection:"row",
        gap:40,
        marginRight: 90
    },
    imagem:{
        width:80,
        height:80
    },
    input:{
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        borderColor:"#868686ff",
        borderWidth:2,
        borderRadius: 5,
        width:130,
        height:40
    }, 
    tituloContainer:{
        flexDirection:"column",
        gap:10,
        alignItems:"center",
        justifyContent:"center"
    },
    resultadoContainer:{
        flexDirection:"row",
        padding:30,
        borderRadius:15,
        borderStyle:"solid",
        borderWidth:3,
        borderColor:"#62b4e4ff",
        gap:10,
        marginRight: "25%"
    },
    resultado:{
        fontSize: 25,
        fontFamily:"ChakraPetch",
    }
})