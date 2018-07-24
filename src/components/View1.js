/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,Alert} from 'react-native';

export default class View1 extends Component {

  handleText(str){
  if(str.length>5){
    return str.substr(0,5)+"...";
  }else{
    return str;
  }
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.container2} source={require('./src/resource/img_intro_4.png')} resizeMode="cover">
          <Text style={styles.text_on_image}>美景</Text>
        </ImageBackground>
        <Text style={styles.description}>{this.handleText(text)}</Text>
        <View style={styles.container3}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon1')}}>
            <Image source={require('./src/resource/ic_homepage_like.png')} style={styles.icon}/>
          </TouchableOpacity>
          <Text style={styles.num}>10</Text>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon2')}}>
            <Image source={require('./src/resource/ic_photo_share.png')} style={styles.icon}/>
          </TouchableOpacity>
          <Text style={styles.num}>2</Text>
        </View>
      </View>
    );
  }
}

const text="abcdefghijklmnopqrstuvwxyz";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flex: 1,
    alignItems:'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  ImageBackground_style:{
    width:Dimensions.get('window').width,
  },
  text_on_image:{
    textAlign:'center',
    textAlignVertical:'center',
    backgroundColor:'#EEEEEE',
    borderRadius:20,
    fontSize: 20,
    margin: 10,
    width:60,
    height:40,
  },
  description:{
    fontSize: 20,
    margin: 10,
  },
  num:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  icon:{
  },
  container3:{
    flexDirection: 'row',
    alignItems:'center',
  },
});
