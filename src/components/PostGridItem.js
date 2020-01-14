import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

const PostGridItem = props => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp
        style={{ flex: 1 }}
        onPress={props.onSelect}
        background={TouchableNativeFeedback.Ripple("#FFFFFF", false)}
      >
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: props.imageUrl }}
            style={styles.image}
          >
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </ImageBackground>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 170
  },
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 30,
    overflow: "hidden",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    color: "black",
    fontFamily: "open-sans-bold",
    fontSize: 14,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default PostGridItem;
