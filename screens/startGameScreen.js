import  { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/primaryButton';

function StartGameScreen(){
return (<View style = {styles.inputContainer}>
    <TextInput style ={styles.numberInput} 
    maxLength={2} 
    keyboardType='number-pad' 
    autoCapitalize='none'
    autoCorrect={false}
    />
<PrimaryButton>Confirm</PrimaryButton>
<PrimaryButton>Reset</PrimaryButton>
</View>);
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        padding:16,
        marginTop:100,
        marginHorizontal:16,
        borderRadius:8,
        backgroundColor:'#4e0329',
        elevation:4
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
    }
});