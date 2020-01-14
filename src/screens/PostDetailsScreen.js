import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { POSTS } from "../../data/dummy-data";


const PostDetailsScreen = props => {
  const postId = props.navigation.getParam("postId");
  const thisPost = POSTS.find(post => post.id === postId);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={{ uri: thisPost.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{thisPost.title}</Text>
        <Text style={styles.detail}>{thisPost.content}</Text>
      </View>
    </ScrollView>
  );
};
PostDetailsScreen.navigationOptions = navigationData => {
  const postId = navigationData.navigation.getParam("postId");
  const selectedPost = POSTS.find(post => post.id === postId);

  return {
    headerTitle: selectedPost.title
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: 'tomato',
    borderRadius: 60,
    padding: 10,
    marginVertical: 16
  },
  detail: {
    fontFamily: "open-sans",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 25
  },
  container: {
      padding: 10
  }
});

export default PostDetailsScreen;
