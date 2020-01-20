import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import propTypes from "prop-types";

export default class NoteComponent extends Component {
  static propTypes = {
    notes: propTypes.array.isRequired
  };

  render() {
    return (
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.notes}
          renderItem={({ item }) => (
            <View style={styles.noteList}>
              <Text style={styles.noteHeader}>{item.title}:</Text>
              <Text style={styles.noteBody} numberOfLines={3}>{item.body}</Text>
            </View>
          )}
          keyExtractor={item => `Item#${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteList: {
    margin: 4,
    borderWidth: 1,
    borderColor: "black",
    padding: 4,
    borderRadius: 4
  },

  noteHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "tomato"
  },

  noteBody: {
    margin: 4,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 15,
    padding: 4,
    borderRadius: 4
  }
});