import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default class Footer extends Component {

   render() {
     return (
      <View>
      <ActivityIndicator
      size="large"
      color="#0000ff"
      animating = {this.props.loading}
      style = {styles.loading}
      />
      </View>
     );
    }
}

const styles = StyleSheet.create({
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
