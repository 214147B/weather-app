import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css"
import { Stack } from "expo-router";



const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)"/>
    </Stack>
    
   
  )
}

export default RootLayout

const styles = StyleSheet.create({
    View:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    }
})
