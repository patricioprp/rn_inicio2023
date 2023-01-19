import react from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreeen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Hijo verde #1</Text>
        <Text style={styles.textTwoStyle}>Hijo rojo #2</Text>
        <Text style={styles.textThreeStyle}>Hijo azul #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        height:300 ,
        alignItems: 'flex-start',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'flex-end'
    },
    textOneStyle:{
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red'

    },
    textTwoStyle:{
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'blue',
        alignSelf: 'center',
        position: 'absolute',
        alignSelf: 'flex-end'
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right :  0
        //las lineas de arriba equivalen a 
        // ...StyleSheet.absoluteFillObject

    },
    textThreeStyle:{
        height: 100,
        width: 100,
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        alignSelf: 'center'

    }
});

export default BoxScreeen;