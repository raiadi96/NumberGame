import { View, Text, StyleSheet } from "react-native";
import Colors from "./colors";

function NumberContainer({children}){
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.primary500,
        padding:24,
        margin:24,
        alignContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    numberText:{
        padding:12,
        color:Colors.accent500,
        fontSize:36,
        fontWeight:'bold'
    }
});