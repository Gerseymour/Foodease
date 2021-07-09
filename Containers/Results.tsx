import React from 'react';
import Card from '../Components/Card'
import {SafeAreaView, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

const Results = ({navigation, route}) => {

  if (route.params.loading === 'loading') {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/food-loading.gif')} style={{flex:1, resizeMode:'contain'}}/>


      <TouchableOpacity
      style={styles.button}
      onPress={() =>navigation.navigate('Login')}
      ><Text> return home</Text></TouchableOpacity>
    </SafeAreaView>

  )
}
  return (
    <SafeAreaView style={styles.containerCard}><Card card={route.params} />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate('Login')}
      >
       <Text> return home</Text>
      </TouchableOpacity>
  </SafeAreaView>
)
}

const styles = StyleSheet.create({
  button:{
    justifyContent:'center',
    alignItems: 'center',
    margin: 50,
    padding: 20,
    borderRadius:8,
    backgroundColor: '#465881'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default Results 