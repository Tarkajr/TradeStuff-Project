import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import { ListItem } from "react-native-elements";
import { Item } from "./src/Components/Item";
import { Footer } from "./src/Components/Footer";
import { URL, URLPARAMS, NEWURLPARAMS, OFFSET } from './src/constants';
import { requestStuff, requestStuffFailure, receiveStuff, _getStuffAsync, handleReload } from './src/actions';

class Home extends Component {

  // counter is used to prevent appending redundant data to state on handleReload

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
  this._getStuffAsync(URLPARAMS);
  }

  render() {
    return (
      <View style={styles.container}>
      <FlatList
        onEndReached={this.handleReload(this.props.counter)}
        onEndReachedThreshold={0}
        ListFooterComponent={<Footer
          loading = {this.props.loading}
          />}
        numColumns = {2}
        data={this.props.data}
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

const mapStateToProps = state => {
  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
    counter: state.counter
  };
};


export default connect(mapStateToProps, {
  _getStuffAsync
})(Home);
