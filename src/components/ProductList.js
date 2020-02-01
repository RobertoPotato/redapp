import React, { Component } from "react";
import { View, Button, StyleSheet, FlatList, ScrollView } from "react-native";
import fetchApi from "../../data/api/ProductsApiCalls";
import ProductGridItem from "./ProductGridItem";

export default class ProductList extends Component {
  state = { products: [] };

  async componentDidMount() {
    const products = await fetchApi.fetchProducts();
    this.setState({ products });
  }

  render() {
    const renderProductItem = products => {
      return (
        <View>
          <ProductGridItem
            title={products.item.title}
            image={products.item.imageUrl}
            price={products.item.price}
            isNegotiable={products.item.isNegotiable}
            /* NOTE  itemdata is not a recognized object
            affordability={itemData.item.affordability.toUpperCase()}
            */

            //TODO ADD A METHOD TO NAVIGATE TO THE PRODUCT DETAILS PAGE WHEN A PRODUCT IS CLICKED
            //onSelectProduct={() => {
            //props.navigation.navigate({
            //    routeName: "MealDetail",
            //    params: {
            //      productId: products.item.id,
            //      productTitle: products.item.title
            //      //isFav: isFavorite
            //    }
            //  });
            //}
            //}
          />
        </View>
      );
    };

    //main return function here
    //NOTE its not advisable to have a flatlist in a scrollview. Find a better alternative
    return (
      <ScrollView>
        <View style={styles.list}>
          <FlatList
            /*NOTE Using Pagination in laravel. Check out the link
             * http://192.168.100.3:8000/api/products
             * format styling since half the results are rendered offscreen
             */
            data={this.state.products.data}
            keyExtractor={(item, index) => `id:${item.id}`}
            renderItem={renderProductItem}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View>
          <Button title="next" />
          <Button title="Previous" />
        </View>
      </ScrollView>
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
