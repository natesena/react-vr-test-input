import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import { MemoryRouter } from 'react-router'
import App from './Views/App.js'




export default class test_vr extends React.Component {
 render(){
   return(
     <MemoryRouter >
      <App/>
     </MemoryRouter>
   )
 }
};

AppRegistry.registerComponent('test_vr', () => test_vr);
