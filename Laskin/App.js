import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { render } from 'react-dom';
import { useState } from 'react';


export default class App extends Component {

  constructor(){
      super()
      this.state={f1: 0, f2: 0, result: 0}
  }

render(){
  
  return (
    <View style={styles.container}>
    <View style={styles.result}>
      <Text>Tulos:</ Text>
      <Text style={{color: 'red'}}>{this.state.result}</Text>
      </View>
      <TextInput
      keyboardType='numeric'
      style={{width:200  , borderColor: 'gray', borderWidth: 1, marginBottom: 5}}  
      onChangeText={(text) => this.setState({f1:parseInt(text)})}/> 
      <TextInput
      keyboardType='numeric'
      style={{width:200  , borderColor: 'gray', borderWidth: 1}}  
      onChangeText={(text) => this.setState({f2:parseInt(text)})}/>
      <View style={styles.row}> 
          <View style={styles.buttons}> 
              <Button onPress={() => {
               this.setState({result : parseInt(this.state.f1) + parseInt(this.state.f2) });
              }}
              title="+"/>
          </View >
          <View style={styles.buttons}>   
             <Button onPress={() => {
              this.setState({result : parseInt(this.state.f1) - parseInt(this.state.f2) });
              }}
              title="-"/>
          </View >
         </View >
       </View >     
  );
  
  
}   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
   margin: 10,
   alignItems: 'center' 
  },
  row:{
    flexDirection: 'row',
  },
  buttons: {
    height: 40, 
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around',
    margin: 10,
    
  }

});
