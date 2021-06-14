import React from 'react';
import { useState, useEffect } from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';



const Dashboard = ({navigation}) => {
 const [menuList, setMenuList] = useState([])
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState(null);
 const [friendsList, setFriendsList] = useState([])

  useEffect(() => {
    getMenuList()
    getFriendsList()
  }, [])

  async function getMenuList () {
    try {
      const resMenu = await fetch('http://10.10.22.147:3000/menu')
      const jsonMenu = await resMenu.json()
      console.log('jsonMenu', jsonMenu)
      setMenuList(jsonMenu)
    } catch (err) {
      console.log('fetching error menu list', err)
    }
  }
  async function getFriendsList () {
    try {
      const resFriends = await fetch('http://10.10.22.147:3000/user')
      const jsonFriends = await resFriends.json()
      console.log('jsonFriends', jsonFriends)
      setFriendsList(jsonFriends)
    } catch (err) {
      console.log('fetching error friendslist', err)
    }
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.push('Swipes', item)}>
      <Text>{item.title}</Text>
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

     <FlatList 
     data = {menuList}
     renderItem = {renderItem}
     keyExtractor ={item => item.id}

    />

 
  
    <TouchableOpacity><Text>Send</Text></TouchableOpacity>

  </SafeAreaView>
  )
}

export default Dashboard