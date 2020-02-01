import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Colors from "../constants/Colors";
import { FiltersNavigator } from "./FiltersNavigator";
import { MainTabNavigator } from "./MainTabNavigator";

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MainTabNavigator,
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
