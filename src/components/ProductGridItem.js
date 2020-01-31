import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";
import DefaultText from "../components/DefaultText";

const ProductGridItem = props => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.productItem}>
      <TouchableComp onPress={props.onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.productRow, ...styles.productDetail }}>
            <DefaultText>PRICE: {props.price}</DefaultText>
            <DefaultText>
              {props.isNegotiable == 1 ? "Negotiable" : "Non-negotiable"}
            </DefaultText>
          </View>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  productRow: {
    flexDirection: "row"
  },
  productItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  productHeader: {
    height: "85%"
  },
  productDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default ProductGridItem;
