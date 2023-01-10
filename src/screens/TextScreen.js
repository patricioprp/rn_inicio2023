import React, {useState} from 'react'
import {Text,View, StyleSheet, TextInput} from 'react-native'

const TextScreen  = () => {
    const [name, setName] = useState('');
    return<View>
        <Text>Ingrese su nombre</Text>
        <TextInput 
        style={styles.input}
        autoCapitalize = 'none'
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
        />
        <Text>Su nombre es {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'red',
        borderWidth: 1
    }
});

export default TextScreen;

