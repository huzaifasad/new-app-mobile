import React, { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import CardComponent from './CardComponent';

export default function Check({ route }) {
  const { tabValue } = route.params;
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  const getNews = async (pageNumber = 1) => {
    try {
      setLoading(true);
      let result = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${tabValue}&apiKey=a1dc774c4e364a7291ee1043c5467f01&page=${pageNumber}`);
      result = await result.json();
      setdata((prevData) => [...prevData, ...result.articles]);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  const handleEndReached = () => {
    // Load more data when reaching the end of the list
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
      getNews(page + 1);
    }
  };

  useEffect(() => {
    // This effect runs only once when the component mounts
    getNews();
    
    // Cleanup function to update the isMounted ref
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Log the updated state in the render or within another useEffect
  useEffect(() => {
    console.log(data);
  }, [data]);

  const filteredData = data.filter((item) => item.urlToImage !== null && item.urlToImage !== undefined);

  const renderItem = ({ item }) => (
    <CardComponent
      imageUrl={item.urlToImage || 'https://example.com/default-image.jpg'} // Use a default image URL
      title={item.title}
      description={item.description}
    />
  );

  return (
    <View>
      <Text>Now We are in Component One for Tab {tabValue}</Text>

      {/* Use FlatList to render the list of articles */}
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => (loading ? <ActivityIndicator size="large" color="#0000ff" /> : null)}
      />
    </View>
  );
}
