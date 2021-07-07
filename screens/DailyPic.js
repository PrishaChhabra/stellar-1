import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class DailyPics extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Daily Maps Screen </Text>
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
        color:'darkblue',
        fontFamily:'rockwell',
        fontWeight:'bold'
    }
})