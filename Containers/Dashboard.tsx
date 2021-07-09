import React from 'react';
import { useState, useEffect } from 'react';
import {TouchableOpacity, SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
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
    console.log('list', list)
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
     <FlatList 
     data = {menuList}
     renderItem = {renderMenuItem}
     keyExtractor ={item => item._id}
     extraData = {selectedMenuId}
     ListHeaderComponent= {<Text style={styles.titleHeader}>Menus</Text>}
    />
    <FlatList 
     data = {friendsList}
     renderItem = {renderFriendItem}
     keyExtractor ={item => item._id}
     extraData = {selectedFriendId}
     ListHeaderComponent= {<Text style={styles.titleHeader}>Friends</Text>}


    />

 
    <TouchableOpacity
      onPress = {() => sendSession()}
      style={styles.button}
    
    ><Text>Send</Text></TouchableOpacity>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleHeader: {
    fontSize: 32,
    paddingHorizontal:125,
    padding: 20,
  },
});

export default Dashboard