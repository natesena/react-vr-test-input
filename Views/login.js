import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import TextInput from '../js/vr_components/textInput.js'

export default class Login extends React.Component{
    state = {
    fields: {
      username: 'username: ',
      email: 'email: ',
      password: 'password: ',
      confirmPassword: 'confirm password: '
    }
  }
  submit(){
    console.log('Tried to submit')
    if(this.state.fields.username !== 'username: ' && this.state.fields.email !== 'email: ' && this.state.fields.password !== 'password: '&&this.state.fields.confirmPassword !== 'confirm password: '){
      console.log('test passed!')
    }
  }

  onInputChange(field, value) {
    this.setState({
      fields: {
        ...this.state.fields,
        [field]: value
      }
    })
  }
  
  render() {
    //console.log(this.state.fields)
    return (
      <View >

        <Pano source={asset('chess-world.jpg')}/>
        
        <TextInput name="username" onChange={this.onInputChange.bind(this)} value={this.state.fields.username} placeHolder={'username: '} focused={false} type={'text'} ></TextInput>
        <TextInput name="email" onChange={this.onInputChange.bind(this)} value={this.state.fields.email} placeHolder={'email: '} focused={false} type={'email'} ></TextInput>
        <TextInput name="password" onChange={this.onInputChange.bind(this)} value={this.state.fields.password} placeHolder={'password: '} focused={false} type={'password'} ></TextInput>
        <TextInput name="confirmPassword" onChange={this.onInputChange.bind(this)} value={this.state.fields.confirmPassword} placeHolder={'confirm password: '} focused={false} type={'password'} ></TextInput>
        <VrButton onClick={this.submit.bind(this)}>
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
}