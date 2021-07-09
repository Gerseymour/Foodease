import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Card = ({card}) => {
  
  
  return (
    <View style={[styles.card]}>
      <Text style={styles.cardEmoji}>{card.emoji}</Text>
      <Text style={styles.cardTitle}>{card.title} </Text>
      <View style={styles.cardDescriptionContainer}>
        <Text style={styles.cardDescription}>{card.additionalInfo} </Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#f3efef',
    borderRadius:8,
    marginTop:50,
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
    fontSize:32,
    fontWeight:'bold'
  },
  cardEmoji:{
    margin:15,
    fontSize:200
  },
  cardDescriptionContainer: {
    padding: 40
  },
  cardDescription: {
    fontSize:18,
    color:'#818181'
  }
})

export default Card
