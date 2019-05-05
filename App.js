import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from './src/Reducers/RootReducer';
import { Home } from './src/Components/Home';

export default class App extends Component {
  store = createStore(RootReducer);

  render() {
    return (
      <Provider store={this.store}>
        <Home />
      </Provider>
    );
  }
}
