import react from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreeen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Text BoxScreeen</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:10,
        borderColor:'black'
    },
    textStyle:{
        borderWidth: 1,
        borderColor: 'red',
        margin: 20

    }
});

export default BoxScreeen;