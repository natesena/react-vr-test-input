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
            color: '#FF0000',
            focused: props.focused,
            changed: false,
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
    }
    keyPressed(evt){
      //keycode of pressedKey
      var theKeyCode = evt.nativeEvent.inputEvent.keyCode
        //console.log('keycode', theKeyCode)

      //actual key that was pressed. Could be non-alphanumeric
      var key = evt.nativeEvent.inputEvent.key

      //-----Backspace Handler------
      //store current text value
      //if inputfield is not !changed, this is simply the placeholder
      var copyString = this.state.text
      var copyArray = copyString.split('')
      copyArray.pop()
      var backSpaceText= copyArray.join('')
      if(backSpaceText.length <= this.props.placeHolder.length){
        //console.log('deleted beyond prop', 'backSpaceText', backSpaceText)
        backSpaceText = this.props.placeHolder
      }
      
      //------Finding Current Text - placeholder --------------
      //need to subtract placeholder from 
      var currentValue
      var currentText = this.state.text.split('')
      var placeHolderLength = this.props.placeHolder.length
      for(let i = 0; i < placeHolderLength; i++){
        currentText.shift()
      }
      

      //if key is alphanumeric or @ or .
      if((theKeyCode >= 48 && theKeyCode <= 57)||(theKeyCode >= 65 && theKeyCode <= 90||theKeyCode == 190)){
        currentValue = currentText.join('')
        console.log('currentValue', currentValue)
        currentValue = currentValue + key
        this.props.onChange(this.props.name, currentValue)
        this.setState({
          text: this.state.changed? this.state.text + key : this.state.text + key,
          changed: true,
          value: currentValue,
        }, ()=>{
          //console.log(this.state.text)
          //console.log('value', this.state.value)
        })
      }
      if(theKeyCode == 8){
        if(currentText.length){
          currentText.pop()
        }
        currentValue = currentText.join('')
        console.log('currentValue', currentValue)
        this.props.onChange(this.props.name, currentValue)
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
                fontWeight: "400",
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