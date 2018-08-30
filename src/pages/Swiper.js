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
    const { replace } = this.props.navigation;
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
            scrollEnabled={true}
            activeDot={<View style={{backgroundColor:'white', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
            <ImageBackground
                style={{flex:1}}
                source={require('../assets/Back_changed.png')}
                resizeMode="cover">
                <View animation="fadeInLeft" style={styles.center} useNativeDriver>
                    <Text style={styles.text}>课程查询</Text>
                    <Text style={styles.text}>开启你的选课之旅</Text>
                    <View>
                        <View animation="fadeInUp" useNativeDriver>
                            <Image style={{height:(thisWidth-100)*1.2,width:thisWidth*0.9}} source={require('../assets/show_course.png')} resizeMode="contain"/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground
                style={{flex:1}}
                source={require('../assets/Back_changed.png')}
                resizeMode="cover">
                <View animation="fadeInLeft" style={styles.center} useNativeDriver>
                    <Text style={styles.text}>网页端/移动端</Text>
                    <Text style={styles.text}>方便你的使用</Text>
                    <View animation="fadeInUp" useNativeDriver>
                        <Image style={{height:(thisWidth-100)*1.2,width:thisWidth*0.9}} source={require('../assets/show_web.png')} resizeMode="contain"/>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground
                style={{flex:1}}
                source={require('../assets/Back_changed.png')}
                resizeMode="cover">

                <View style={styles.center}>
                    <View animation="fadeInUp" useNativeDriver>
                        <Image style={{height:(thisWidth-100)*1.2,width:thisWidth*0.9}} source={require('../assets/show_enter.png')} resizeMode="contain"/>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => replace('BaseTab')}>
                        <Text style={styles.btText}>进入南风</Text>
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
        width:thisWidth*0.5,
        height:thisWidth*0.2
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