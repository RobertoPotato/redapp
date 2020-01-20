import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import fetchApi from "../../data/api/NotesApiCalls"
import NoteComponent from "../components/NoteComponent"

export default class NotesScreen extends Component {
    state = { notes: [] };
  
    async componentDidMount() {
      const notes = await fetchApi.fetchnotes();
      this.setState({ notes });
  
    }
  
    render() {
      return (
        <View>
          {
            <NoteComponent notes={this.state.notes} />
          }
        </View>
      );
    }
  }

const styles = StyleSheet.create({});

//=====================================================
