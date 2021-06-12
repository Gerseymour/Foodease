import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Food, Menu } from '../Components/Model'
// import data from '../Menu';
import Card from '../Components/Card'
import Swiper from 'react-native-deck-swiper';

export default function Swipes ({route}) {

  const [index, setIndex] = useState(0);
  const [likes, setLikes] = useState([]);
  const [isComplete, setIsCompleted] = useState(false)
  const [result, setResult] = useState({})
  const [data, setData] = useState([])
  const {title, id} = route.params


  useEffect(() => {
    console.log('in fetch effect')
    getData()
  }, [])

  async function getData () {
    try {
      const res = await fetch(`http://10.10.22.67:3000/menu/${id}`)
      const json = await res.json()
      console.log('json', json)
      setData(json)
    } catch (err) {
      console.log('fetching error', err)
    }
  }
  
  const onSwiped = (card:number) => {
    console.log(data.items[card].title)

    setIndex(index +1)
    ;
  }

  const liked = (card:number) => {
    setLikes((prev) => {
      return prev.concat(data.items[card])
    })
  }

  useEffect(() => {
    const random = Math.floor(Math.random() *likes.length)
    console.log(random)
    setResult(likes[random])
  },[isComplete])

  
  if (data.length ===0) {
    return (
      <SafeAreaView>
        <Text> Loading...</Text>
      </SafeAreaView>
    )
  }

  if (result) {
    return (
      <Card card={result} color={true}/>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style= {styles.menuTitle} > {data.title}</Text>
        <Swiper
          backgroundColor={'white'}
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
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white'
  },
  swiperContainer:{
    flex:0.5
  },
  titleContainer:{
    paddingTop:10,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuTitle: {
    

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