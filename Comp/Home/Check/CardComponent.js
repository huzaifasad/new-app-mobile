// CardComponent.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardComponent = ({ imageUrl, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
});

export default CardComponent;
