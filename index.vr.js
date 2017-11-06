import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import TextInput from './js/vr_components/textInput.js'

export default class test_vr extends React.Component {
 
  clickity(){
    console.log('clicked')
  }
  
  render() {
    return (
      <View >

        <Pano source={asset('chess-world.jpg')}/>
        
        <TextInput placeHolder={'name'} focused={false} ></TextInput>
        <TextInput placeHolder={'email'} focused={false} ></TextInput>
        <TextInput placeHolder={'password'} focused={false} ></TextInput>
        <TextInput placeHolder={'confirm password'} focused={false} ></TextInput>
        <VrButton onClick={this.clickity.bind(this)}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.2,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}>
            Submit
          </Text>
        </VrButton>
       
      </View>
    );
  }
};

AppRegistry.registerComponent('test_vr', () => test_vr);
