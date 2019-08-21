import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [dBiz, setDBiz] = useState(null);
  const id = navigation.getParam("id");

  const getBiz = async id => {
    const res = await yelp.get(`/${id}`);
    setDBiz(res.data);
  };

  useEffect(() => {
    getBiz(id);
  }, []);

  if (!dBiz) {
    return null;
  }

  return (
    <View>
      <Text>{dBiz.name}</Text>
      <FlatList
        data={dBiz.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
