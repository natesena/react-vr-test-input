import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import { MemoryRouter as Router } from 'react-router'
import App from './Views/App.js'

console.log(Router)

export default class test_vr extends React.Component {
 render(){
   return(
     <Router>
      <App/>
    </Router>
   )
 }
};

AppRegistry.registerComponent('test_vr', () => test_vr);
