import react from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreeen = () => {
    return <View style={styles.parentStyle}>
        <View style = {styles.viewOneStyle}/>
        <View style = {styles.viewTwoStyle}/>
        <View style = {styles.viewThreeStyle}/>
    </View>
}

const styles = StyleSheet.create({
    parentStyle:{
        borderWidth: 3,
        borderColor:'black',
        height: 100 ,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    viewOneStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwoStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'blue',
        alignSelf: 'flex-end'//para que el cuadro no se salga del recuadro
    },
    viewThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'green'

    }
});

export default BoxScreeen;