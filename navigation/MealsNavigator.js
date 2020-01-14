import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../src/screens/CategoriesScreen";
import CategoryMealsScreen from "../src/screens/CategoryMealsScreen";
import MealDetailScreen from "../src/screens/MealDetailScreen";
import FavoritesScreen from "../src/screens/FavoritesScreen";
import FiltersScreen from "../src/screens/FiltersScreen";
import PostsScreen from '../src/screens/PostsScreen';
import PostDetailsScreen from '../src/screens/PostDetailsScreen'
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitle: "Red App"
};

const PostsNavigator = createStackNavigator(
  {
    Posts: {
      screen: PostsScreen, 
      navigationOptions: {
        headerTitle: "Posts"
      }
    },
    PostDetails: {
      screen: PostDetailsScreen,

    }

  }, {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
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
        return <Ionicons name="ios-paper" size={25} color={tabInfo.tintColor}/>
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
  },

};

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans-bold",
            fontWeight: "normal"
          },
          activeTintColor: Colors.accentColor
        }
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "normal"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
