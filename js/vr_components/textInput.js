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
            typed: false,
            changed: false
        }
    }

    focus(){
      this.setState({
        color: this.state.focused? '#FF0000': '#00FF00',
        focused: !this.state.focused,
      }, ()=>{
        //console.log('placeholder clicked', this.state.focused)
      })
    }
    keyPressed(evt){
      
      //keycode of pressedKey
      var theKeyCode = evt.nativeEvent.inputEvent.keyCode
      console.log('keycode', theKeyCode)

      //actual key that was pressed. Could be non-alphanumeric
      var key = evt.nativeEvent.inputEvent.key
      var copyString = this.state.text
      var copyArray = copyString.split('')
      copyArray.pop()
      var backSpaceText= copyArray.join('')
      console.log('this.state.text', this.state.text)
      console.log("this.state.text minus letter", backSpaceText)
      
      //filter by key
      if((theKeyCode >= 48 && theKeyCode <= 57)||(theKeyCode >= 65 && theKeyCode <= 90)){
        this.setState({
          text: this.state.changed? this.state.text + key : this.state.text+ ": " + key,
          changed: true
        }, ()=>{
          console.log(this.state.text)
        })
      }
      if(theKeyCode == 8){
        console.log('tried to backspace')
        this.setState({
          text: this.state.changed? backSpaceText : this.state.text,
          changed: true
        }, ()=>{
          console.log(this.state.text)
        })
      }
      
    }
    
    render() {
      return (
        <View onInput={(evt)=>{
          if(evt.nativeEvent.inputEvent.type == 'KeyboardInputEvent' && evt.nativeEvent.inputEvent.eventType == "keyup"){
            console.log(evt.nativeEvent)
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