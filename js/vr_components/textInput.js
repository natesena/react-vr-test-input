import React from 'react'
import {
    AppRegistry,
    Text,
    View,
    VrButton,
  } from 'react-vr';

  export default class TextInput extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            text: props.placeHolder,
            fontWeight: 400,
            color: '#FF0000',
            focused: props.focused,
            typed: false
        }
    }

    focus(){
      this.setState({
        color: this.state.focused? '#FF0000': '#00FF00',
        focused: !this.state.focused,
        fontWeight: 100,
      }, ()=>{
        //console.log('placeholder clicked', this.state.focused)
      })
    }
    keyPressed(evt){
      console.log(evt.nativeEvent.inputEvent.key)
    }
    
    render() {
      return (
        <View onInput={(evt)=>{
          if(evt.nativeEvent.inputEvent.type == 'KeyboardInputEvent'){
            this.keyPressed(evt)
          }
        }}>
          <VrButton onEnter={this.focus.bind(this)} onExit={this.focus.bind(this)} >
            <Text 
              style={{
                margin: 0.05,
                backgroundColor: `${this.state.color}`,
                fontSize: 0.2,
                fontWeight: `${this.state.fontWeight}`,
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0, 0, -3]}],
              }}>
              {this.state.text}
            </Text>
          </VrButton>
        </View>
      );
    }
  };
  
  AppRegistry.registerComponent('textInput', () => textInput);