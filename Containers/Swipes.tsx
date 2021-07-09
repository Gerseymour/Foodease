import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Food} from '../Components/Model'
import Card from '../Components/Card'
import Swiper from 'react-native-deck-swiper';

const ipAddress = '10.10.22.103'

export default function Swipes ({navigation, route}) {

  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState([]);
  const [isComplete, setIsCompleted] = useState(false)
  const [result, setResult] = useState({})
  const [data, setData] = useState([])
  const {menu_id} = route.params


  useEffect(() => {
    getData()
  }, [])

  async function getData () {
    try {
      const res = await fetch(`http://${ipAddress}:3000/menu/${menu_id}`)
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.log('fetching error', err)
    }
  }
  
  const onSwiped = (card:number) => {
    setIndex(index +1);
  }

  const liked = (card:number) => {
    setLikes((prev) => {
      return prev.concat(data.items[card])
    })
  }

  async function putSession () {
    try {
      const res = await fetch(`http:/${ipAddress}:3000/session/${route.params._id}`, 
      {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(likes)
      })
      const datasession = await res.json()
      if (isComplete){
      navigation.navigate('Result', datasession )
      }
    } catch (err) {
      console.log('putting error', err)
    }
  }
  useEffect(() => {
    putSession()

  },[isComplete])

  
  if (data.length ===0) {
    return (
      <SafeAreaView>
        <Text> Loading...</Text>
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style= {styles.menuTitle} > {data.title}</Text>
        </View>
        <Swiper
          backgroundColor={'transparent'}
          cardIndex= {index}
          cards = {data.items}
          renderCard= {(card:Food)=> <Card card={card}/>}
          onSwiped = {(card) => {onSwiped(card)}}
          onSwipedRight = {(card) => {liked(card)}}
          onSwipedAll = {() => setIsCompleted(true)}
          stackSize = {4}
          stackScale = {3}
          stackSeparation ={20}
          disableTopSwipe
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity
          overlayLabels={{
            left: overlayLeft,
            right:overlayRight
          }}
          />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
  },

  titleContainer:{
    paddingTop:10,
    marginBottom:10,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuTitle: {
    paddingTop:10,
    color:'black',
    fontSize:32
  },
  
});

const overlayLeft = {
  title:'Meh',
  style: {
    label:{
      backgroundColor: 'red',
      color: 'white',
      fontSize: 24
    },
    wrapper: {
      flexdirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginTop:20,
      marginLeft:-20

    }
  }
}

const overlayRight = {
  title:'Yum!',
  style: {
    label:{
      backgroundColor: 'green',
      color: 'white',
      fontSize: 24
    },
    wrapper: {
      flexdirection: 'column',
      alignItems: 'flex-start',
      marginTop:20,
      marginLeft:20

    }
  }
}