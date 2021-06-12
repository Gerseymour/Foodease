import { StatusBar } from 'expo-status-bar';
import Swipes from './Containers/Swipes'
import Login from './Containers/Login'
import Dashboard from './Containers/Dashboard'
import {SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

const Stack = createStackNavigator()


export default function App() {

  return (
    <NavigationContainer >
      
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false, cardStyle:{backgroundColor: 'white'}}} >
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Dashboard' component={Dashboard}/>
      <Stack.Screen name='Swipes' component={Swipes}/>
    </Stack.Navigator>
    
  </NavigationContainer>
  )
}

