import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { POSTS } from "../../data/dummy-data";
import PostGridItem from "../components/PostGridItem";

const PostsScreen = props => {
  const renderGridItem = itemData => {
    return (
      <PostGridItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "PostDetails",
            params: {
              postId: itemData.item.id,
              postTitle: itemData.item.title
            }
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={POSTS}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default PostsScreen;
