import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import backgroundImage from "../../assets/images/claudi.jpg"
import {LinearGradient} from "expo-linear-gradient"

const index = () => {
  return (
    <View>
      <ImageBackground className="flex-1 w-full h-full bg-[#111]" source={backgroundImage} resizeMode="stretch"></ImageBackground>
      <LinearGradient colors={["transparent","#111"]} className="absolute left-0 right-0 bottom-[30%] h-[50%] z-10"></LinearGradient>
      <Text>Weather App</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})