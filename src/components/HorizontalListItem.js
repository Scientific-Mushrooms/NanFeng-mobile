
import React, {Component} from 'react';
import {View,StyleSheet, Text,ImageBackground,Dimensions} from 'react-native';

export default class HorizontalListItem extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={require('../assets/upload1.jpg')} resizeMode="cover">
        <Text style={styles.text_on_image}>标签</Text>
        <Text style={styles.title}>标题</Text>
        <Text style={styles.description}>副标题</Text>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    elevation:3,
    marginVertical:5,
    marginLeft:10,
    width:Dimensions.get('window').width-20,
    borderRadius:5,
    backgroundColor: '#FFFFFF',
  },
  imageContainer:{
    borderRadius:5,
    alignItems:"flex-start",
    justifyContent:"flex-end"
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
    color:"white",
    fontSize: 35,
  },
  title:{
    color:'white',
    fontSize: 50,
    textAlign: 'left',
  },
});
