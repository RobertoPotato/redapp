import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import fetchApi from "../../data/api/ProductsApiCalls";
import ProductGridItem from "./ProductGridItem";

export default class ProductList extends Component {
  state = { products: [] };

  async componentDidMount() {
    const products = await fetchApi.fetchProducts();
    this.setState({ products });
  }

  render() {
    const renderProductItem = (products) => {
      
      //LOG FUNCTION
      console.log(products.item.title)
      return (
        <View>
          <ProductGridItem
            title={products.item.title}
            image={products.item.imageUrl}
            price={products.item.price}
            isNegotiable={products.item.isNegotiable}
            //affordability={itemData.item.affordability.toUpperCase()}
            onSelectProduct={() => {
              props.navigation.navigate({
                routeName: "MealDetail",
                params: {
                  productId: products.item.id,
                  productTitle: products.item.title
                  //isFav: isFavorite
                }
              });
            }}
          />
        </View>
      );  
    }

    //main return function here
    return (
      <View style={styles.list}>
        <FlatList
          data={this.state.products}
          keyExtractor={(item, index) => item.id}
          renderItem={renderProductItem}
          style={{ width: "100%" }}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

//=====================================================