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
            changed: false,
            value: ''
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
    fieldClick(){
      console.log('clicked textInput')
      // this.setState({
      //   fontWeight: 200,
      // }, ()=>{
      //   console.log('fontWeight', this.state.fontWeight)
      // })
    }
    keyPressed(evt){
      
      //keycode of pressedKey
      var theKeyCode = evt.nativeEvent.inputEvent.keyCode
      //console.log('keycode', theKeyCode)

      //actual key that was pressed. Could be non-alphanumeric
      var key = evt.nativeEvent.inputEvent.key
      var copyString = this.state.text
      var copyArray = copyString.split('')
      copyArray.pop()
      var backSpaceText= copyArray.join('')
      if(backSpaceText.length <= this.props.placeHolder.length){
        //console.log('deleted beyond prop', 'backSpaceText', backSpaceText)
        backSpaceText = this.props.placeHolder
      }
    
      //console.log('this.state.text', this.state.text)
      //console.log("this.state.text minus letter", backSpaceText)

      //need to subtract placeholder from 
      var currentValue
      var currentText = this.state.text.split('')
      var placeHolderLength = this.props.placeHolder.length
      for(let i = 0; i < placeHolderLength; i++){
        currentText.shift()
      }
      

      //filter by key
      if((theKeyCode >= 48 && theKeyCode <= 57)||(theKeyCode >= 65 && theKeyCode <= 90||theKeyCode == 190)){
        currentValue = currentText.join('')
        console.log('currentValue', currentValue)
        currentValue = currentValue + key
        this.props.onChange(this.props.name, currentValue)
        this.setState({
          text: this.state.changed? this.state.text + key : this.state.text + key,
          changed: true,
          fontWeight: 400,
          value: currentValue,
        }, ()=>{
          //console.log(this.state.text)
          //console.log('value', this.state.value)
        })
      }
      if(theKeyCode == 8){
        if(currentValue.length){
          currentValue.pop()
        }
        currentValue = currentText.join('')
        console.log('currentValue', currentValue)
        //console.log('tried to backspace')
        this.setState({
          text: this.state.changed? backSpaceText : this.state.text,
          changed: true,
          value: currentValue
        }, ()=>{
          //console.log(this.state.text)
          //console.log('value', this.state.value)
        })
      }
      
    }
    
    render() {
      return (
        <View onInput={(evt)=>{
          //only register a typing event on keyup as to remove duplicates
          if(evt.nativeEvent.inputEvent.type == 'KeyboardInputEvent' && evt.nativeEvent.inputEvent.eventType == "keyup"){
            //console.log(evt.nativeEvent)
            this.keyPressed(evt)
          }
        }}>
          <VrButton onEnter={this.focus.bind(this)} onExit={this.focus.bind(this)} onClick={this.fieldClick.bind(this)}>
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
              {this.props.value}
            </Text>
          </VrButton>
        </View>
      );
    }
  };
  
  AppRegistry.registerComponent('textInput', () => textInput);