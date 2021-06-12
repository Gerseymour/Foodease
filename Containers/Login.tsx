import React from 'react';
import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'




const Login = ({navigation}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

 return (
   
      
    <View style={styles.container}>
      <Image source={require('../assets/food-loading.gif')} style={{flex:0.25, resizeMode:'contain'}}/>
      <Text>Home Screen</Text>
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="User" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setUsername(text)}/>
        </View>
        <View style={styles.inputView} >
        <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            secureTextEntry
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
        </View>
        
      <TouchableOpacity
        onPress={() => navigation.navigate('Dashboard')}>
        <Text>Login</Text>
      </TouchableOpacity>

    </View> 
   
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  }
})

export default Login
