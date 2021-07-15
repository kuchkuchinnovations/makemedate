import { StyleSheet,Dimensions } from "react-native";

const w1 = Dimensions.get('screen').width;
const h1 = Dimensions.get('screen').height;


export const styles = StyleSheet.create({
    container:{
        flex:1,
        width:w1,
        height:h1
        // backgroundColor:'#ffffff'
    }
})

