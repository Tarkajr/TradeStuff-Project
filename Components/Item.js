import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

export default class Item extends Component {

  constructor(props) {
     super(props);
   }

   render() {
     return (
      <View>
      <ListItem
      leftAvatar={{
      title: this.props.name,
      source: {uri: this.props.media},
      rounded: true,
      containerStyle: styles.avatar,
      onPress: () => alert(this.props.name + this.props.description + " Value: $" + this.props.value + " Minimum Trade Value: $" + this.props.min_trade_val + " Category ID: " + this.props.category_id + " Condition ID: " + item.condition_id)
      }}
      />
      </View>
     );
    }
}

const styles = StyleSheet.create({
  avatar: {
    margin: 5,
    height: 200,
    width: 150,
  }
});
