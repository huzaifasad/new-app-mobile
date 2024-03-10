import React from 'react'
import { SafeAreaView, StatusBar, Text,View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Textmain from './Comp/More/Testmain'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}> 
      <StatusBar backgroundColor={'#043232'}/>
      <NavigationContainer>
     <Textmain/>
     </NavigationContainer>
    </SafeAreaView>
  )
}
