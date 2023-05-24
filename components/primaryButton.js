import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton(props){

    function pressHandler(){    
        console.log(props.children);
    }

    return (
        <View style = {styles.buttonOuterContainer}>
        <Pressable style = {styles.inputContainer} onPress={pressHandler} android_ripple={{color:'#640233'}}>
        <Text style = {styles.buttonText}>{props.children}</Text>
        </Pressable></View>);

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'
    },
    inputContainer:{
        backgroundColor:'#72063c',
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:28,
        elevation:2,
        margin:8
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    }
});