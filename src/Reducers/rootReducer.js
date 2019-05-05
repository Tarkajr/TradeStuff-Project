import React, { Component } from "react";
import { combineReducers } from 'redux'
import { dataReducer } from './src/Reducers/dataReducer'

const rootReducer = combineReducers({
    dataReducer,
})

export default rootReducer
