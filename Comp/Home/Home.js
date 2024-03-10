import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>This is Home js</Text>
      {/* ...other content... */}
      <TouchableOpacity onPress={handlePress}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

Home.navigationOptions = {
  headerTitle: 'Home',
  headerRight: () => (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => navigation.navigate('Login')}
    >
      <Text>Login</Text>
    </TouchableOpacity>
  ),
};

export default Home;
