/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput,View,ImageBackground,Image,TouchableOpacity,Dimensions,Alert} from 'react-native';

export default class View3 extends Component {

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
        <View style={styles.container2}>
          <Image source={require('./src/resource/4.png')} style={styles.picture}/>
          <View>
            <Text style={styles.username}>匿名用户</Text>
            <Text style={styles.time}>今天 13:20</Text>
          </View>
        </View>
        <Text style={styles.content}>请问今晚的东亚海域史作业的要求是什么？什么时候交呢。</Text>
        <View style={styles.container3}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon1')}}>
            <Image source={require('./src/resource/ic_feed_like.png')} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon2')}}>
            <Image source={require('./src/resource/ic_news_collect.png')} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon3')}}>
            <Image source={require('./src/resource/ic_photo_share.png')} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <Image source={require('./src/resource/ic_feed_like.png')} style={styles.icon2}/>
          <Text style={styles.comment}>11人觉得很赞</Text>
        </View>
        <View style={styles.container2}>
          <Image source={require('./src/resource/ic_news_collect.png')} style={styles.icon2}/>
          <Text style={styles.comment}>2条评论回复</Text>
        </View>
        <TextInput style={styles.input} placeholder='评论...'></TextInput>
      </View>
    );
  }
}

const text="abcdefghijklmnopqrstuvwxyz";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  container2: {
    flexDirection:'row',
    alignItems:'center',
  },
  username:{
    fontSize: 20,
    marginLeft:3,
    marginTop:10,
    marginBottom:0,
  },
  picture:{
    width:60,
    height:60,
  },
  time:{
    fontSize:15,
    color:'#999999',
    marginLeft:3,
    marginTop:3,
  },
  container3:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'center',
    margin:10,
  },
  icon:{
    width:30,
    height:30,
    marginLeft:5,
  },
  icon2:{
    width:20,
    height:20,
    margin:5,
  },
  comment:{
    color:'#000000'
  },
  input:{
    backgroundColor:'#EEEEEE',
    margin:10,
    paddingLeft:10,
    paddingRight:10,
    paddingTop:3,
    paddingBottom:3,
    borderRadius:10,
  },
  content:{
    width:Dimensions.get('window').width,
    fontSize:20,
    margin:10,
    color:'#000000',
  },
});