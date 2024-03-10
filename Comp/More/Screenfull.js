import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Check from '../Home/Check/Check';
import Check2 from '../Home/Check/Check2';
import Check3 from '../Home/Check/Check3';
import Check4 from '../Home/Check/Check4';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#fff', // Background color of the tab bar
          borderRadius: 10, // Border radius to make it look like rounded buttons
          marginHorizontal: 10, // Margin to provide some space from the screen edges
          paddingVertical: 5, // Vertical padding inside the tab bar
        },
        indicatorStyle: {
          backgroundColor: 'red', // Color of the indicator (active tab highlight)
          height: 5, // Height of the indicator
          borderRadius: 10, // Border radius to match the rounded tab bar
        },
        labelStyle: {
          color: '#000', // Text color
          fontWeight: 'bold', // Text boldness
        },
        activeTintColor: 'white', // Text color when tab is active
        inactiveTintColor: '#000', // Text color when tab is inactive
        scrollEnabled: true, // Enable scrolling for tabs
      }}
      >
        <Tab.Screen name="business" component={Check} initialParams={{ tabValue: 'business' }} />
        <Tab.Screen name="entertainment" component={Check} initialParams={{ tabValue: 'entertainment' }} />
        <Tab.Screen name="general" component={Check} initialParams={{ tabValue: 'general' }} />
        <Tab.Screen name="health" component={Check} initialParams={{ tabValue: 'health' }} />
        <Tab.Screen name="science" component={Check} initialParams={{ tabValue: 'science' }} />
        <Tab.Screen name="sports" component={Check} initialParams={{ tabValue: 'sports' }} />
        <Tab.Screen name="technology" component={Check} initialParams={{ tabValue: 'technology' }} />
      </Tab.Navigator>
    );
  }
  

export default function Screenfull() {
  return (
    <View style={{ flex: 1 ,marginTop:20, borderRadius:30}}>
        <Text>This si for serach section</Text>
      <MyTabs />
    </View>
  );
}
