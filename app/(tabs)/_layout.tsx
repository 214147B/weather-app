import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen name='index'/>
        <Tabs.Screen name='weather'/>
        <Tabs.Screen name='map'/>
        <Tabs.Screen name='travel'/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})