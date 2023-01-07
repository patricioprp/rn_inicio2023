import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: ' friend 1', age:10, key:1 },
        {name: ' friend 2', age:20, key:2 },
        {name: ' friend 3', age:30, key:3 },
        {name: ' friend 4', age:40, key:4 },
        {name: ' friend 5', age:50, key:5 }
    ]
    return(
        <FlatList 
        vertical
        showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.key }
        data = {friends} renderItem={({item}) => {
            return <Text style={style.textStyle}>{item.name} - Age:{item.age}</Text>;
        }}/>
    );
}

const style = StyleSheet.create({
    textStyle:{
        marginVertical:80,
        marginHorizontal:50
    }
});

export default ListScreen ;