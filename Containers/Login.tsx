import React from 'react';
import { View, Text, Button, Image } from 'react-native'




const Login = ({navigation}) => {

 return (
   
      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <Image source={require('../assets/food-loading.gif')} style={{flex:0.25, resizeMode:'contain'}}/>
      <Text>Home Screen</Text>
      <Button
        title="Go to Swipes"
        onPress={() => navigation.navigate('Swipes')}
      />
    </View> 
   
 )
}

export default Login
