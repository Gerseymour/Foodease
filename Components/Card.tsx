import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Food} from './Model'


const Card = ({card, color}) => {
  let result = ''
  if (color) {
    result = {backgroundColor: 'yellow'}
  }
  return (
    <View style={[styles.card, result]}>
      <Text style={styles.cardEmoji}>{card.emoji}</Text>
      <Text style={styles.cardTitle}>{card.title} </Text>
      <Text style={styles.cardDescription}>{card.additionalInfo} </Text>
    </View>

  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#f3efef',
    borderRadius:8,
    flex:0.75,
    alignItems: 'center',
    justifyContent:'center',
    shadowRadius:20,
    shadowColor:'black',
    shadowOpacity:0.08,
    shadowOffset:{width:0, height:0}

  },
  cardTitle:{
    color:'#434343',
    fontSize:18,
    fontWeight:'bold'
  },
  cardEmoji:{
    fontSize:200
  }
})

export default Card
