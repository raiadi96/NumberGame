import {View, Text, StyleSheet} from 'react-native';
import Colors from './colors';
function GuessLogItem({roundNum, guess}){
    console.log("Inside GuessLogItem", roundNum, guess);
    return <View style = {styles.listItem}>
        <Text style = {styles.text}>#{roundNum}</Text>
        <Text style={styles.text}>Oponent's Guess: {guess}</Text>
    </View>

}
 export default GuessLogItem;

 const styles = StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 400,
    },
    text:{
        color: Colors.primary800,
        fontFamily: 'open-sans',
    }
 });