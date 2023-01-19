import React from "react";
import { Text, StyleSheet,View, Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Getting started with react native!</Text>

    <Button 
    onPress={()=> navigation.navigate('Components')}
    title = "Go to components"
    />

    <Button 
    onPress={()=> navigation.navigate('List')}
    title = "Go to List Demo"
    />

    <Button 
    onPress={()=> navigation.navigate('Image')}
    title = "Go to List Images Demo"
    />

    <Button 
    onPress={()=> navigation.navigate('Counter')}
    title = "Go to List Counter Demo"
    />

   <Button 
    onPress={()=> navigation.navigate('Color')}
    title = "Go to List Color Demo"
    />

<Button 
    onPress={()=> navigation.navigate('Text')}
    title = "Go to Text Demo"
    />

<Button 
    onPress={()=> navigation.navigate('Square')}
    title = "Go to Square Demo"
    />

<Button 
    onPress={()=> navigation.navigate('Box')}
    title = "BoxScreen solucion mia"
    />
    <Button 
    onPress={()=> navigation.navigate('Boxb')}
    title = "BoxScreen segunda solucion"
    />

    <TouchableOpacity onPress={()=>console.log('On press list')}>
      <Text>Go to Componentes demo</Text>
    </TouchableOpacity>

  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  }
});

export default HomeScreen;
