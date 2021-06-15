import React from 'react';
import { useState, useEffect } from 'react';
import {TouchableOpacity, SafeAreaView,StatusBar, Text, FlatList, ScrollView, StyleSheet} from 'react-native';


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
 


  useEffect(() => {
    getMenuList()
    getFriendsList()
  }, [])

  async function getMenuList () {
    const list =[]
    route.params.menuList.forEach(async id =>{
      try {
        const resMenu = await fetch(`http://10.10.22.147:3000/menu/${id}`)
        const jsonMenu = await resMenu.json()
        // console.log('jsonMenu', jsonMenu)
        list.push(jsonMenu)
      } catch (err) {
        console.log('fetching error menu list', err)
      }

    })
    console.log('list', list)
    setMenuList(list)
    
  }
  async function getFriendsList () {
    const friendsArray = []
    try {
      const resFriends = await fetch('http://10.10.22.147:3000/user')
      const jsonFriends = await resFriends.json()
      // console.log('jsonFriends', jsonFriends)
      setFriendsList(jsonFriends)
    } catch (err) {
      console.log('fetching error friendslist', err)
    }
  }

  const renderMenuItem = ({item}) => {
    const backgroundColor = item._id === selectedMenuId._id ? "#6e3b6e" : "#f9c2ff";
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
      const backgroundColor = item._id === selectedFriendId._id ? "#6e3b6e" : "#f9c2ff";
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

      const sendSession = () => {
        console.log(selectedFriendId)
        console.log(selectedMenuId)
        console.log(route.params)
      }


  if (menuList.length === 0 ) {
    return (
      <SafeAreaView>  
        <Text> fetching</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
     <FlatList 
     data = {menuList}
     renderItem = {renderMenuItem}
     keyExtractor ={item => item._id}
     extraData = {selectedMenuId}
     ListHeaderComponent= {<Text>Menus</Text>}
    />
    <FlatList 
     data = {friendsList}
     renderItem = {renderFriendItem}
     keyExtractor ={item => item._id}
     extraData = {selectedFriendId}
     ListHeaderComponent= {<Text>Friends</Text>}


    />

 
    <TouchableOpacity
      onPress = {() => sendSession()}
    
    ><Text>Send</Text></TouchableOpacity>

  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Dashboard