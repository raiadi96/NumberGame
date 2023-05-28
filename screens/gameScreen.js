import {Text, View, StyleSheet, Alert} from 'react-native';
import Title from '../components/title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/numberContainer';
import PrimaryButton from '../components/primaryButton';
import GameOverScreen from './gameOverScreen';
import Card from '../components/card';
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber, onGameOver}){

    function generateRandomNumber(min, max, exclude){
        const randNm = Math.floor(Math.random() * (max-min)) + min;
        if(randNm === exclude){
            return generateRandomNumber(min, max, exclude);
        }else{
            return randNm;
        }
    }

    useEffect(()=>{
        console.log("Inside useEffect", currentGuess, userNumber)
        if(parseInt(currentGuess) === parseInt(userNumber)){
            console.log("Number found!")
            onGameOver();
        }
        return;
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHanlder(direction){
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text:'Sorry', style:'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess+1;
        }
        else{
            minBoundary = currentGuess;
        }
        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        return;
    }

    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.container}>
            <Title>Opponent's Guess</Title>
            <NumberContainer children={currentGuess}/>
            <Card>
                <View style = {styles.buttonContainer}>
                    <PrimaryButton onPress = {nextGuessHanlder.bind(this, 'lower')}>Lower</PrimaryButton>
                    <PrimaryButton onPress = {nextGuessHanlder.bind(this, 'higher')}>Higher</PrimaryButton>
                </View>
            </Card>
            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>

    );
}

export default GameScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:12,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#ddb52f',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
    }
});
