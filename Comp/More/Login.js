import React from 'react'
import { View,Text, TextInput } from 'react-native'

export default function Login() {

  return (
    <View>
        <Text>Enter Your Name:</Text>
        <TextInput style={{backgroundColor:'red',fontSize:'39px'}}/>
    </View>
  )
}
