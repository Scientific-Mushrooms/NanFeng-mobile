
import React, {Component} from 'react';
import {StyleSheet, Text,ImageBackground,Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class HorizontalListItem extends Component {

  handleText(str){
    if(str.length>10){
      return str.substr(0,10)+"...";
    }else{
      return str;
    }
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('./src/resource/img_intro_4.png')} resizeMode="cover">
        <Text style={styles.text_on_image}>标签</Text>
        <Text style={styles.title}>标题</Text>
        <Text style={styles.description}>{this.handleText(text)}</Text>
        <LinearGradient 
          colors={['#FFFFFF','#000000']} 
          style={{height:150,width:Dimensions.get('window').width,opacity:1}}
          start={{x: 0, y: 0.1}} end={{x: 0, y: 0.9}}>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const text="简述：ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  text_on_image:{
    textAlign:'center',
    textAlignVertical:'center',
    backgroundColor:'#C0DADF',
    borderRadius:20,
    fontSize: 20,
    margin: 10,
    padding:10,
  },
  description:{
    fontSize: 35,
    margin: 10,
  },
  title:{
    fontSize: 50,
    textAlign: 'left',
    margin: 10,
  },
});
