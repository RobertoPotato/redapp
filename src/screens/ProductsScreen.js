import React from "react";
import { View, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const ProductsScreen = props => {

  return <ProductList navigation={props.navigation} />;
};

ProductsScreen.navigationOptions = navigationData => {
  //const catID = navigationData.navigation.getParam("categoryId");

  //const selectedCategory = CATEGORIES.find(cat => cat.id === catID);

  return {
    headerTitle: "Products"
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    
  }
});

export default ProductsScreen;
