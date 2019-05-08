import React, { Component } from "react";
import {
  FETCH_STUFF_REQUEST,
  FETCH_STUFF_SUCCESS
} from "./types";
import { URL, URLPARAMS, NEWURLPARAMS, OFFSET } from './constants'

function fetchStuffRequest() {
  return {
    type: FETCH_STUFF_REQUEST
  }
}

function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  }
}

function fetchStuffSuccess(json) {
  return {
    type: FETCH_STUFF_SUCCESS,
    items: json.data.children.map(child => child.data),
  }
}

export function _getStuffAsync(urlparams) {
  console.log('test')
  return dispatch => {
    dispatch(fetchStuffRequest())
    return fetch(URL + urlparams)
      .then(response => response.json(), console.log(response))
      .then(json => dispatch(fetchStuffSuccess(json), incrementCounter()))
  }
}

export function handleReload(offset) {
  _getStuffAsync(NEWURLPARAMS + offset)
}
