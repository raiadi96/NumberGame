import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
export default function App() {
  return (
      <StartGameScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
