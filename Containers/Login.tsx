import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'




const Login = ({navigation}) => {

 return (
   
      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <Image source={require('../assets/food-loading.gif')} style={{flex:0.25, resizeMode:'contain'}}/>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Swipes')}>
        <Text>Login</Text>
      </TouchableOpacity>

    </View> 
   
 )
}

export default Login
