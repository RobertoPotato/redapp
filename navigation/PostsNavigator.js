import { createStackNavigator } from "react-navigation-stack";
import PostsScreen from "../src/screens/PostsScreen";
import PostDetailsScreen from "../src/screens/PostDetailsScreen";
import NotesScreen from "../src/screens/NotesScreen";
import ProductsScreen from "../src/screens/ProductsScreen";
//Default navigation options for Stack Navigator
import {defaultStackNavOptions}  from "./DefaultStackOptions"

export const PostsNavigator = createStackNavigator(
    {
      Posts: {
        screen: PostsScreen,
        navigationOptions: {
          headerTitle: "Posts"
        }
      },
      PostDetails: {
        screen: PostDetailsScreen
      },
      Notes: {
        screen: NotesScreen,
        navigationOptions: {
          headerTitle: "Notes"
        }
      },
      Products: {
        screen: ProductsScreen, 
        navigationOptions: {
          headerTitle: "Products"
        }
      }
    },
    {
      defaultNavigationOptions: defaultStackNavOptions
    }
  );