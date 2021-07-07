import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StarMaps from './screens/StarMap';
import DailyPics from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator
export default class App extends React.Component() {
  render(){
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DailyPics" component={DailyPics} />
          <Stack.Screen name="SpaceCrafts" component={SpaceCrafts} />
          <Stack.Screen name="StarMaps" component={StarMaps}/>
     </Stack.Navigator>
   </NavigationContainer>
  
      </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
