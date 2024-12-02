import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import backgroundImage from "../../assets/images/claudi.jpg"
import {LinearGradient} from "expo-linear-gradient"
import { SafeAreaView } from 'react-native-safe-area-context';

const{height:screenHeight} = Dimensions.get("window");

const index = () => {
  return (
    <View>
      <ImageBackground style={styles.background} source={backgroundImage} resizeMode="cover"></ImageBackground>
      <LinearGradient colors={["transparent","#111"]} style={styles.gradient}></LinearGradient>
      <SafeAreaView>
        <View className='mx-4'>
          <View className='flex-row items-center'>
            
          <View className='flex-row items-end'>
          <Text className='text-white text-[70px] font-bold'>72&#176;</Text>
          <Text className='text-white text-[36px font-semibold]'>C,London</Text>
          </View> 
          <Image></Image>
          </View>

        </View>
      </SafeAreaView>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  background:{
    flex: 1,
    width:"100%",
    height:screenHeight*0.7,
    backgroundColor:"#111"
    
  },
gradient:{
position:"absolute",
left:0,
right:0,
bottom:"20%",
height:"50%",
}
})