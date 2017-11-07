import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import { MemoryRouter, Redirect, Route, Switch } from 'react-router'
import Login from './login.js'

export default class App extends React.Component {
    render(){
      return(
        <Login/>
      )
    }
   };