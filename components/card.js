import {View, StyleSheet} from 'react-native';

function Card({children}){
    return <View style = {styles.inputContainer}>{children}</View>
}
export default Card;

const styles = StyleSheet.create({
    inputContainer:{
        alignItems:'center',
        padding:16,
        marginTop:25,
        marginHorizontal:16,
        borderRadius:8,
        backgroundColor:'#4e0329',
        elevation:4
    }
});