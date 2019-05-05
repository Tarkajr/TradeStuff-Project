import React, { Component } from "react";
import { FETCH_STUFF_REQUEST, FETCH_STUFF_SUCCESS, FETCH_STUFF_FAILURE } from './src/types';

const initialState = {
loading: false,
data: [],
error: null,
counter: 0
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
      case FETCH_STUFF_REQUEST:
        return {
          { ...state, loading: true };,
        };
        case FETCH_STUFF_SUCCESS:
          return {
            data: { ...state, loading: false, data: action.payload.results, counter: state.counter + OFFSET },
          };
          case FETCH_STUFF_FAILURE:
            return {
              ...state,
              loading: false,
              error: "Error fetching from API"
            };
    default:
      return state;
  }
}
