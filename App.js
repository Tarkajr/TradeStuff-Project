import React, { Component } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  rootReducer  from './src/Reducers/rootReducer';
import Home from './src/Components/Home';
import configureStore from './src/Reducers/configureStore'

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
