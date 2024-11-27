import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import "../global.css"



const RootLayout = () => {
  return (
    <View style={styles.View}>
      <Text className='text-red-500'>RootLayout</Text>
    </View>
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