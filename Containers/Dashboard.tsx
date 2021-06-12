import React from 'react';
import { useState, useEffect } from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Dashboard = ({navigation}) => {
 const [menuList, setMenuList] = useState([])

  useEffect(() => {
    getMenuList()
  }, [])

  async function getMenuList () {
    try {
      const res = await fetch('http://10.10.22.67:3000/menu')
      const json = await res.json()
      console.log('json', json)
      setMenuList(json)
    } catch (err) {
      console.log('fetching error', err)
    }
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.push('Swipes', item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  )
  
  if (menuList.length === 0) {
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
  </SafeAreaView>
  )
}

export default Dashboard