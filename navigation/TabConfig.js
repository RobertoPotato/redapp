import React from "react";
import { Platform, Text } from "react-native";
import { PostsNavigator } from "./PostsNavigator";
import { FavNavigator } from "./FavoritesNavigator";
import { BaseNavigator } from "./BaseNavigator";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const tabScreenConfig = {
  Meals: {
    screen: BaseNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },

  Posts: {
    screen: PostsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-paper" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.postsColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Posts</Text>
        ) : (
          "Posts"
        )
    }
  },

  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        )
    }
  }
};
