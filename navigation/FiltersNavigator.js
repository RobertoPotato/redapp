import { createStackNavigator } from "react-navigation-stack";
//Default navigation options for Stack Navigator
import { defaultStackNavOptions } from "./DefaultStackOptions";
import FiltersScreen from "../src/screens/FiltersScreen";

export const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);
