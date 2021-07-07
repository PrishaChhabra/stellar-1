import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SpaceCrafts extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Space Crafts Screen </Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    text:{
        fontSize:40,
        color:'hotpink',
        fontFamily:'rockwell',
        fontWeight:'bold'
    }
})

