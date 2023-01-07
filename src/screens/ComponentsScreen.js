import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyles}>Este es el componente en pantalla</Text>
};

const styles = StyleSheet.create({
    textStyles :{
        fontSize:30
    }
});

export default ComponentsScreen;