import {Text, View, StyleSheet, Alert, FlatList} from 'react-native';
import Title from '../components/title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/numberContainer';
import PrimaryButton from '../components/primaryButton';
import GameOverScreen from './gameOverScreen';
import Card from '../components/card';
import GuessLogItem from '../components/guessLogItem';

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

    function logListItems(){
        console.log("Logging scroll");
    }
    useEffect(()=>{
        console.log("Inside useEffect", currentGuess, userNumber)

        if(parseInt(currentGuess) === parseInt(userNumber)){
            console.log("Number found!")
            onGameOver(guessLog.length);
        }
        return;
    }, [parseInt(currentGuess), parseInt(userNumber), guessLog.length, onGameOver]);

useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
},[]);

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
        setGuessLog((currentGuesses)=>[newRandomNumber, ...currentGuesses]);
        return;
    }
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessLog, setGuessLog] = useState([initialGuess]);
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
            <View style = {styles.listContainer}>
            <FlatList data = {guessLog} 
                renderItem={log => {return <GuessLogItem roundNum={log.index} 
                guess={log.item}></GuessLogItem>}} />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    container:{
        padding:12,    
        flex:1
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
    },
    listContainer:{
        flex:1
    }
});
