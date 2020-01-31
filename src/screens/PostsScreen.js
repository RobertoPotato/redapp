import React from "react";
import { StyleSheet, FlatList, Button, View } from "react-native";
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
    <View style={styles.button}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={POSTS}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <Button
        title="Products"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Products"
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 40
  }
});

export default PostsScreen;
