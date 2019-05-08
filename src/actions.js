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
    receivedAt: Date.now()
  }
}

export function _getStuffAsync(urlparams) {
  return dispatch => {
    dispatch(fetchStuffRequest())
    return fetch(URL + urlparams)
      .then(response => response.json())
      .then(json => dispatch(fetchStuffSuccess(json), incrementCounter()))
  }
}

export function handleReload(offset) {
  _getStuffAsync(NEWURLPARAMS + offset)
}
