import React, {useState} from 'react'
import {Text,View, StyleSheet, TextInput} from 'react-native'

const TextScreen  = () => {
    const [password, setPassword] = useState('');
    return<View>
        <Text>Ingrese el Password</Text>
        <TextInput 
        style={styles.input}
        autoCapitalize = 'none'
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
        secureTextEntry={true}
        />
        {password.length < 4 ? <Text>El password debe ser mayor a 4 caracteres</Text> : null }
        
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

