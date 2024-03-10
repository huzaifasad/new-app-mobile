import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import News from '../Home/News';

const Tab = createBottomTabNavigator();

function CustomHeaderRight() {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F1948A',
        },
        headerRight: () => <CustomHeaderRight />,
        
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Login" component={News} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
