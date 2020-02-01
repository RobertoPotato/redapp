import { createStackNavigator } from "react-navigation-stack";
import FavoritesScreen from "../src/screens/FavoritesScreen";
import MealDetailScreen from "../src/screens/MealDetailScreen";
//Default navigation options for Stack Navigator
import { defaultStackNavOptions } from "./DefaultStackOptions";

export const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);
