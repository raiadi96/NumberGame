import  { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/primaryButton';
import {useState} from 'react';
import NumberContainer from '../components/numberContainer';
import Card from '../components/card';

function StartGameScreen(props){

    function inputNumberHandler(enteredNumber){
        setEnteredNumber(enteredNumber);
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function enteredNumberHandler(){
        console.log(enteredNumber);
        const chosenNumber = parseInt(enteredNumber);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number',
            'Entered number must be between 1 and 99',
            [{text: 'Okay', style:'destructive', onPress : resetInputHandler}])
            return;
        }

        props.onConfirmNumber(enteredNumber);
    }

    const [enteredNumber, setEnteredNumber] = useState('');
return (<View>
<View>
<NumberContainer style = {styles.titleContainer} children='Enter a Number '/>
</View>
<Card>
<TextInput style ={styles.numberInput} 
    maxLength={2} 
    keyboardType='number-pad' 
    autoCapitalize='none'
    autoCorrect={false}
    onChangeText={inputNumberHandler}
    value = {enteredNumber}
    />
    <View style={styles.buttonsContainer}>
    <View style = {styles.buttonContainer}>
    <PrimaryButton onPress = {enteredNumberHandler}>Confirm</PrimaryButton>
    </View>
    <View style = {styles.buttonContainer}>
    <PrimaryButton onPress = {resetInputHandler}>Reset</PrimaryButton>
    </View>
    </View>
</Card>
</View>);
}

export default StartGameScreen;

const styles = StyleSheet.create({
    titleContainer:{
        alignItems:'center',
        color:'#ddb52f',
    },
    numberInput:{
        height:50,
        fontSize:32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        width:50,
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1
    }
});