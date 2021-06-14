import React from 'react';
import { useState, useEffect } from 'react';
import {TouchableOpacity, SafeAreaView, Text, FlatList, ScrollView, StyleSheet} from 'react-native';

const Dashboard = ({navigation, route}) => {
 const [menuList, setMenuList] = useState([])
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState(null);
 const [friendsList, setFriendsList] = useState([])
 const [selectedId, setSelectedId] = useState(null)
 

 console.log(route)

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

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
  )
  
  if (menuList.length === 0 ) {
    return (
      <SafeAreaView>  
        <Text> fetching</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
     <FlatList 
     data = {menuList}
     renderItem = {renderItem}
     keyExtractor ={item => item._id}

    />

 
    <TouchableOpacity><Text>Send</Text></TouchableOpacity>
    </ScrollView>

  </SafeAreaView>
  )
}

export default Dashboard