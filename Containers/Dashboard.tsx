import React from 'react';
import { useState, useEffect } from 'react';
import {TouchableOpacity, SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';
const ipAddress = '10.10.22.103'

const Item = ({ item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>)
const FriendItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.username}</Text>
  </TouchableOpacity>)

const Dashboard = ({navigation, route}) => {
 const [menuList, setMenuList] = useState([])
 const [friendsList, setFriendsList] = useState([])
 const [selectedMenuId, setSelectedMenuId] = useState('')
 const [selectedFriendId, setSelectedFriendId] = useState('')
 const [data, setData] = useState(null)


  useEffect(() => {
    getMenuList()
    getFriendsList()
  }, [])

  async function getMenuList () {
    const list =[]
    route.params.menuList.forEach(async id =>{
      try {
        const resMenu = await fetch(`http://${ipAddress}:3000/menu/${id}`)
        const jsonMenu = await resMenu.json()
        list.push(jsonMenu)
      } catch (err) {
        console.log('fetching error menu list', err)
      }

    })
    setMenuList(list)
    
  }
  async function getFriendsList () {
    try {
      const resFriends = await fetch(`http://${ipAddress}:3000/user`)
      const jsonFriends = await resFriends.json()
      setFriendsList(jsonFriends)
    } catch (err) {
      console.log('fetching error friendslist', err)
    }
  }

  const renderMenuItem = ({item}) => {
    const backgroundColor = item._id === selectedMenuId._id ? "#465881" : "#818181";
    const color = item._id === selectedMenuId._id ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedMenuId(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
    }
    const renderFriendItem = ({item}) => {
      const backgroundColor = item._id === selectedFriendId._id ? "#465881" : "#818181";
      const color = item._id === selectedFriendId._id ? 'white' : 'black';
  
      return (
        <FriendItem
          item={item}
          onPress={() => setSelectedFriendId(item)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
      }

      async function sendSession () {
        try {
          const res = await fetch(`http://${ipAddress}:3000/session/${route.params._id}/${selectedFriendId._id}/${selectedMenuId._id}`, {method:'POST'})
          const data = await res.json()
          setData(data)
          navigation.navigate('Swipes', data)
        } catch (err) {
          console.log('fetching error', err)
        }
      }


  if (menuList.length === 0 ) {
    return (
      <SafeAreaView>  
        <Text> fetching</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.instructionHeader}>Select a menu and a friends</Text>
      <Text style={styles.titleHeader}>Menus</Text>
      <View style={styles.menuView}>
     <FlatList 
     data = {menuList}
     renderItem = {renderMenuItem}
     keyExtractor ={item => item._id}
     extraData = {selectedMenuId}
    />
    </View>

    <Text style={styles.titleHeader}>Friends</Text>
    <View style={styles.menuView}>
    <FlatList 
     data = {friendsList}
     renderItem = {renderFriendItem}
     keyExtractor ={item => item._id}
     extraData = {selectedFriendId}
    />
    </View>
 
    <TouchableOpacity
      onPress = {() => sendSession()}
      style={styles.button}
    
    ><Text style={styles.send}>Send</Text></TouchableOpacity>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  menuView: {
    height: 150
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  send:{
    color: 'white'
  },
  button:{
    justifyContent:'center',
    alignItems: 'center',
    margin: 50,
    padding: 20,
    borderRadius:8,
    backgroundColor: '#465881'
  },
  item: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleHeader: {
    fontSize: 32,
    paddingHorizontal:125,
    padding: 10,
    fontWeight:'bold',
  },
  instructionHeader:{
    width:'100%',
    fontSize: 32,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal:25,
    padding: 10,
  },  
});

export default Dashboard