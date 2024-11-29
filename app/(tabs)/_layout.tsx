import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

interface TabIconProps{
  icon:any,
  name:string,
  focused:boolean
}

const TabIcon=({icon,name,focused}:TabIconProps )=>{
  return(
    <View className="items-center justify-center gap-2">
      <Ionicons color={focused ? "white" :"#f8989"} size={24} name="home" />
      <Text className='text-white'>{name}</Text>
    </View>
  )
}

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarInactiveTintColor: '#8f8989',
      tabBarActiveTintColor: '#f0e9e9',
      tabBarStyle: {
        backgroundColor: '#000',
        borderTopColor: '#232533',
        borderTopWidth: 1,
        paddingTop: 5,
      },
    }}>
        <Tabs.Screen name='index' options={{title:"Home",
        headerShown:false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon icon="" name="Home" focused={focused} />

        )

        }}/>
        <Tabs.Screen name='weather'/>
        <Tabs.Screen name='map'/>
        <Tabs.Screen name='travel'/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})