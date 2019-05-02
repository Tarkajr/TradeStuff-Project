import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { ListItem } from "react-native-elements";
import Item from "./src/Components/Item";
import Footer from "./src/Components/Footer";
import { URL, URLPARAMS, NEWURLPARAMS, OFFSET } from './src/constants';

export default class App extends Component {

  // counter is used to prevent appending redundant data to state on handleReload

  constructor(props) {
     super(props);
     this.state = {
       loading: false,
       data:[],
       counter: 0,
       error: null
     };
   }

/* URL endpoint accepts the following values:
sortBy - indicates how the results should be sorted
        1 = newest first
        2 = oldest first
        3 = price (low to high)
        4 = price (high to low)

rows - indicates the number or rows to fetch at a single time
        Accepts a Number (default 50)

offset - indicates the number of rows to skip before fetching
        Accepts a Number

Change urlparams and newurlparams to update these values
*/

  componentDidMount() {
  this._getStuff(URLPARAMS);
  }

  _getStuff = async (params) => {
  this.setState({ loading: true });
  try {
    let resp = await fetch(URL + params)
    let response = await resp.json()
    this.setState({
      data: [...this.state.data, ...response.data ],
      error: response.error || null,
      loading: false,
      counter: this.state.counter + OFFSET
    });
  } catch (error) {
    this.setState({error: error});
  }
  }

  handleReload = () => {
    this._getStuff(NEWURLPARAMS + this.state.counter)
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
        <Item
        name = {item.name}
        media = {item.media[0].url}
        description = {item.description}
        value = {item.value}
        min_trade_val = {item.min_trade_val}
        category_id = {item.category_id}
        condition_id = {item.condition_id}
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
  }
});
