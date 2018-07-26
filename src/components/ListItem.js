
import React, {Component} from 'react';
import {StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity,Dimensions,Alert} from 'react-native';

export default class ListItem extends Component {

  handleText(str){
    if(str.length>20){
      return str.substr(0,20)+"...";
    }else{
      return str;
    }
  }

  render() {
    let kind='分享'
    if(this.props.kind!=null)
      kind=this.props.kind
    return (
      <TouchableOpacity style={styles.container}>
        <ImageBackground style={styles.imageContainer} source={require('../assets/upload1.jpg')} resizeMode="cover">
          <Text style={styles.text_on_image}>{kind}</Text>
        </ImageBackground>
        <Text style={styles.description}>{this.handleText(this.props.text)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon1')}}>
            <Image source={require('../assets/ic_homepage_like.png')} style={styles.icon} resizeMode='contain'/>
          </TouchableOpacity>
          <Text style={styles.num}>{this.props.like}</Text>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {Alert.alert('icon2')}}>
            <Image source={require('../assets/ic_photo_share.png')} style={styles.icon} resizeMode='contain'/>
          </TouchableOpacity>
          <Text style={styles.num}>{this.props.com}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    elevation:3,
    marginVertical:5,
    marginHorizontal:4,
    width:Dimensions.get('window').width/2-8,
    borderRadius:5,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width:Dimensions.get('window').width/2-8,
    height:Dimensions.get('window').width/2,
    borderRadius:5,
    alignItems:'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF',
  },
  ImageBackground_style:{
    width:Dimensions.get('window').width,
  },
  text_on_image:{
    textAlign:'center',
    textAlignVertical:'center',
    backgroundColor:'#EEEEEE',
    borderRadius:8,
    fontSize: 13,
    margin: 10,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  description:{
    fontSize: 15,
    marginHorizontal: 5,
  },
  num:{
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
  },

  icon:{
    margin:5,
    width:Dimensions.get('window').width/20
  },

  buttonContainer:{
    flexDirection: 'row',
    alignItems:'center',
  },
});
