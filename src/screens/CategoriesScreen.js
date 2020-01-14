import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

//create a categories screen component and pass in the props
//it receives from 'react-navigation' library
//the props lets it use the navigation's methods like navigate()
const CategoriesScreen = props => {
  //render item method that determines what data will be shown and in what way
  //it also carries the onPress method for navigating to next screen
  //it draws the items onto the screen
  //eyyy
  const renderGridItem = itemData => {
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  //flatlist with grid layout given by numColumns=2 property. The renderItems
  //property is supplied by the renderGridItems method given above
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
