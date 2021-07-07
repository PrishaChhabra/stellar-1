import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class StarMaps extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Star Maps Screen </Text>
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
        color:'maroon',
        fontFamily:'rockwell',
        fontWeight:'bold'
    }
})