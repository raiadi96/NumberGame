import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/gameScreen';
export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  function onPickedNumberHandler(number){
    console.log("Inside onPickedNumberHanlder", number)
    setPickedNumber(number);
  }

  let gameScreen = <StartGameScreen  onConfirmNumber = {onPickedNumberHandler}/>
  if(pickedNumber != undefined || pickedNumber != null){
    gameScreen = <GameScreen />
  }
  return (
    <LinearGradient colors = {['#4e0329', '#ddb52f']} style = {styles.startGameScreenContainer}>
      <ImageBackground 
      source={require('./assets/dicesBg.jpeg')}
      resizeMode='cover'
      style = {styles.startGameScreenContainer}
      imageStyle = {styles.backgroundImageStyle}>
        {gameScreen}
      </ImageBackground>
      
    </LinearGradient>
      
  )
}

const styles = StyleSheet.create({
  startGameScreenContainer: {
    flex: 1
  },
  backgroundImageStyle:{
    opacity:0.15
  }
});
