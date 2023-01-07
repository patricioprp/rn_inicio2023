import React, {useState} from "react";
import { Text, StyleSheet,View, Button} from "react-native";

const CounterScreen = () => {
    const [counter,setCounter] = useState(0);
    return (
        <View>
            <Button title="Incrementar" onPress={ () => {
                setCounter(counter + 1)
                console.log(counter)
                }}/>
            <Button title="Decrementar" onPress={ () => {
                setCounter(counter - 1)
                }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const style = StyleSheet.create({});

export default CounterScreen;
