import { Image, View, StyleSheet, Text } from 'react-native';
import Title from '../components/title';
import Colors from '../components/colors';
import PrimaryButton from '../components/primaryButton';
function GameOverScreen({userNumber, onStartNewGame, totalRounds}){
return <View styles = {styles.rootContainer}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer}>
    <Image style ={styles.image} source = {require('../assets/success.png')} />
    </View>
    <Text style = {styles.summaryText}>
        Your phone needed <Text style = {styles.highlight}>{totalRounds}</Text> rounds to guess the number <Text style = {styles.highlight}>{userNumber}</Text>
    </Text>
    <PrimaryButton onPress = {onStartNewGame}>Start New Game</PrimaryButton>
</View>
}

export default GameOverScreen;

const styles = StyleSheet.create({
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
      },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
      },
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    imageContainer:{
        borderRadius:200,
        width: '80%',
        height: '60%',
        borderColor: Colors.primary800,
        borderWidth: 3,
        overflow: 'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%',
    }
});