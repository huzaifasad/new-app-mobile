import React from 'react';
import { TouchableOpacity, View ,Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Login from './Login'
const Stack = createNativeStackNavigator();

import Screenfull from './Screenfull';


const Rendercomp = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    // Navigate to the desired screen
    navigation.navigate('Login');
  };

  return (
    <View>
     
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default function Testmain() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator 
      
      >
       <Stack.Screen
  name="AllScreen"
  component={Screenfull}
  options={{
    title: 'Daily News',
    headerRight: () => <Rendercomp />,
  }}
/>

        <Stack.Screen name='Login' component={Login}/>
      </Stack.Navigator>
    </View>
  );
}
