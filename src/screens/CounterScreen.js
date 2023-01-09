import React, {useState, useReducer} from "react";
import { Text, StyleSheet,View, Button} from "react-native";


const reducer = (state,action) => {

    switch(action.type){
        case 'incrementar_counter':
            return {...state, counter: state.counter + action.payload}
        
        case 'decrementar_counter':
            // return {...state, counter: counter - action.payload}
            return state.counter - action.payload < 0 ?
            state :
            {...state, counter: state.counter - action.payload}
        
        default:
            return state;

    }
}

const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{counter:0});
    const {counter} = state;
    console.log(counter);
    return (
        <View>
            <Button title="Incrementar" onPress={ () => dispatch({type:'incrementar_counter',payload : 1})}/>
            <Button title="Decrementar" onPress={ () => dispatch({type:'decrementar_counter',payload : 1})}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const style = StyleSheet.create({});

export default CounterScreen;
