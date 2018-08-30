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
    /*return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('BaseTab')}>
            <Text style={styles.btText}>第一次使用App所显示的页面</Text>
            <Text style={styles.btText}>或者测试二级导航的页面</Text>
            <Text style={styles.btText}>点击进入下一级导航</Text>
        </TouchableOpacity>   
      </View>
    );*/
    return(
        <Swiper
            style={styles.wrapper}
            autoplay={false}
            autoplayTimeout={2.4}
            loop={false}
            scrollEnabled={false}
            activeDot={<View style={{backgroundColor:'white', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
            <ImageBackground
                style={{flex:1}}
                source={require('../assets/Splash.png')}
                resizeMode="cover">
                <View animation="fadeInLeft" style={styles.center} useNativeDriver>
                    <Text style={styles.text}>番茄工作法</Text>
                    <Text style={styles.text}>规划你的时间</Text>
                    <View animation="fadeInUp" useNativeDriver>
                        <Image style={{height:(thisWidth-100)*1.8}} source={require('../assets/ic_at.png')} resizeMode="contain"/>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground
                style={{flex:1}}
                source={require('../assets/Splash.png')}
                resizeMode="cover">
                <View style={styles.center}>
                    <Text style={styles.text_large}>时墨</Text>
                    <Text style={styles.text}></Text>
                    <Text style={styles.text}>让世界看到</Text>
                    <Text style={styles.text}>你的专注</Text>
                </View>
                <View style={styles.center}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('BaseTab')}>
                        <Text style={styles.btText}>体验离线功能</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </Swiper>
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