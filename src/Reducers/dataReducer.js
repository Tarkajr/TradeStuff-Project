import React, { Component } from "react";
import { FETCH_STUFF_REQUEST, FETCH_STUFF_SUCCESS } from '../types';

const initialState = {
loading: false,
data: [],
counter: 0,
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUFF_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })
    case FETCH_STUFF_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.items,
        counter: state.counter + OFFSET
      })
    default:
      return state
  }
}
