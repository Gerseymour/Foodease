import React from 'react';
import { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
const ipAddress = '10.10.22.103'



const Login = ({navigation}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState('')

  async function Login () {
    
    try {
      const res = await fetch(`http://${ipAddress}:3000/user/${username}`)
      const userInfo = await res.json()
      if (userInfo.sessionList.length == 0){
        navigation.navigate('Dashboard', userInfo)
      } else if (userInfo.sessionList.length !== 0){
        try {
          const res = await fetch(`http://${ipAddress}:3000/session/${userInfo.sessionList[0]}`)
          const data = await res.json()
          setData(data)
          navigation.navigate('Swipes', data)

        } catch (err) {
        }
      } else {
        return (
          <View>
            <Text>Invalid username or password</Text> 
          </View>
        )
      }
    } catch (err) {
      console.log('fetching error', err)
    }
  }

  async function SignUp () {
    try {
      const res = await fetch(`http://${ipAddress}:3000/user`, { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, passwordHash:password, email})
      })
      
      const userInfo = await res.json()
      console.log('json signup', userInfo)
        navigation.navigate('Dashboard', userInfo)
    } catch (err) {
      console.log('fetching error', err)
    }
  }


 return (
   
      
    <View style={styles.container}>
      <Image source={require('../assets/food-loading.gif')} style={{flex:1, resizeMode:'contain'}}/>
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
      style={styles.button}
        onPress={() => Login()}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
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
      style={styles.button}
        onPress={() => SignUp()}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

    </View> 
   
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal:80,
    marginVertical:10,
    marginBottom:20,
    height: 50,
    borderRadius:8,
    backgroundColor: '#465881'
  },
  buttonText:{
    color:'white',

  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:40,
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
