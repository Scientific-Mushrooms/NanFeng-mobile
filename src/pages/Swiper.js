import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  Image
} from 'react-native';

import {createAnimatableComponent, View,} from 'react-native-animatable'
import Swiper from 'react-native-swiper';
import { StackNavigator } from 'react-navigation';
var Dimensions = require('Dimensions');  
var thisWidth = Dimensions.get('window').width; 
//用于在第一次启动时，演示app功能
export default class _Swiper extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('BaseTab')}>
            <Text style={styles.btText}>第一次进入所显示的页面</Text>
            <Text style={styles.btText}>点击进入下一级导航</Text>
        </TouchableOpacity>   
      </View>
    );
  }


}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      margin:5,
    },
    text_large: {
      color: '#fff',
      fontSize: 40,
      marginBottom:20,
      fontWeight: 'bold',
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'white',    
        marginBottom: 8,
        opacity:0.9,
    },  
    center:{
        alignItems:'center',
        justifyContent: 'center',
        flex: 1,
    },
    btText: {
        color:  '#686868',
        fontSize:15
    },
  })