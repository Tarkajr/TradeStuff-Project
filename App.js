import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import Item from "./Components/Item";
import PopUp from "./Components/PopUp";
import Footer from "./Components/Footer";

export default class App extends Component {

  constructor(props) {
     super(props);
     this.state = {
       loading: false,
       data:[],
       counter: 0,
       error: null
     };
   }

  componentDidMount() {
  const urlparams = '?sortBy=3&rows=6'
  this._getStuff(urlparams);
  }

  _getStuff = async (params) => {
  const url = `https://api.tradestuff.com/stuff`;
  this.setState({ loading: true });
  try {
    let resp = await fetch(url + params)
    let response = await resp.json()
    this.setState({
      data: [...this.state.data, ...response.data ],
      error: response.error || null,
      loading: false,
      counter: this.state.counter + 6
    });
  } catch (error) {
    this.setState({error: error});
  }
  }

  handleReload = () => {
    const newurlparams = '?sortBy=3&rows=6&offset=' + this.state.counter
    this._getStuff(newurlparams)
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        onEndReached={this.handleReload}
        onEndReachedThreshold={0}
        ListFooterComponent={<Footer
          loading = {this.state.loading}
          />}
        numColumns = {2}
        data={this.state.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <ListItem
        leftAvatar={{
        title: item.name,
        source: {uri: item.media[0].url},
        rounded: true,
        containerStyle: styles.avatar,
        onPress: () => alert(item.name + item.description + " Value: $" + item.value + " Minimum Trade Value: $" + item.min_trade_val + " Category ID: " + item.category_id + " Condition ID: " + item.condition_id)
        }}
        />
        )}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  avatar: {
    margin: 5,
    height: 200,
    width: 150,
  },
  loading: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
