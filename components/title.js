import {Text, StyleSheet} from 'react-native';
function Title(props){
    return (
        <Text style = {styles.title}>{props.children}</Text>
    );
}
export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        fontWeight:'bold',
        color:'#ddb52f',
        textAlign:'center',
        borderWidth:2,
        borderColor:'#ddb52f',
        padding:12
    }
});