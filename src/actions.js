import React, { Component } from "react";
import {
  FETCH_STUFF_REQUEST,
  FETCH_STUFF_FAILURE,
  FETCH_STUFF_SUCCESS
} from "./src/types";

export const requestStuff = () => ({ type: FETCH_STUFF_REQUEST });

export const requestStuffFailure = error => {
  return {
    type: FETCH_STUFF_FAILURE,
    payload: error
  };
};

export const receiveStuff = json => ({
  type: FETCH_STUFF_SUCCESS,
  payload: json
});

export const _getStuffAsync = (params) => {
  return async dispatch => {
    dispatch(requestStuff());
    try {
      const response = await fetch(URL + params);
      const json = await response.json();
      dispatch(receiveStuff(json));
    } catch (error) {
      dispatch(requestStuffFailure(error));
    }
  };
};

export const  handleReload = (counter) => {
  this._getStuffAsync(NEWURLPARAMS + counter)
}
