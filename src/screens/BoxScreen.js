import react from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreeen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Hijo #1</Text>
        <Text style={styles.textTwoStyle}>Hijo #2</Text>
        <Text style={styles.textThreeStyle}>Hijo #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        height:200 ,
        //flexDirection: 'row',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end'
    },
    textOneStyle:{
        borderWidth: 3,
        borderColor: 'red',
        flex: 4

    },
    textTwoStyle:{
        borderWidth: 3,
        borderColor: 'red',
        flex: 4

    },
    textThreeStyle:{
        borderWidth: 3,
        borderColor: 'red',
        flex: 2

    }
});

export default BoxScreeen;