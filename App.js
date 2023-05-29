import { StyleSheet, Text, View, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/gameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  function roundsHandler(rounds){
    console.log("Inside roundsHandler", rounds)
    setRounds(rounds+1);
  }

  function startNewGameHandler(){
    console.log("Inside startNewGameHandler")
    setPickedNumber(null);
    setIsGameOver(false);
  }

  function onPickedNumberHandler(number){
    console.log("Inside onPickedNumberHanlder", number)
    setPickedNumber(number);
  }
  
  function gameOverHandler(roundLength){
    console.log("Inside gameOverHandler", roundLength)
    setRounds(roundLength);
    setIsGameOver(true);
  }

  let gameScreen = <StartGameScreen  onConfirmNumber = {onPickedNumberHandler}/>
  if(isGameOver){
    console.log("Inside isGameOver Render")
    gameScreen = <GameOverScreen userNumber = {pickedNumber} totalRounds={rounds} onStartNewGame = {startNewGameHandler} ></GameOverScreen>
  }
  else if(pickedNumber != undefined || pickedNumber != null){
    gameScreen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler}/>
  }
  return (
    <LinearGradient colors = {['#4e0329', '#ddb52f']} style = {styles.startGameScreenContainer}>
      <ImageBackground 
      source={require('./assets/dicesBg.jpeg')}
      resizeMode='cover'
      style = {styles.startGameScreenContainer}
      imageStyle = {styles.backgroundImageStyle}>
        <SafeAreaView style= {styles.rootContainer}>{gameScreen}</ SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  startGameScreenContainer: {
    flex: 1
  },
  backgroundImageStyle:{
    opacity:0.15,
    flex:1
  }
});
