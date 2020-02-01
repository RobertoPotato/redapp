import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../src/screens/CategoriesScreen";
import CategoryMealsScreen from "../src/screens/CategoryMealsScreen";
import MealDetailScreen from "../src/screens/MealDetailScreen";
import { defaultStackNavOptions } from "./DefaultStackOptions";

export const BaseNavigator = createStackNavigator(
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
