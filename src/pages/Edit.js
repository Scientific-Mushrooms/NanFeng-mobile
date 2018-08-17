import React, { Component } from 'react'
import { Image,View,StyleSheet,TouchableOpacity,Text,Dimensions,ImageBackground,TextInput } from 'react-native'

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        height:0,
    };
  }

  _onContentSizeChange(event) {
    this.setState({
      height: event.nativeEvent.contentSize.height,
    });
  }

  render() {
    return (
      <View>
        <View style={styles.Container}>
          <TouchableOpacity
          activeOpacity={0.75}
          style={{alignItems: 'center',}}>
            <Text style={{fontSize:50,color:'#4F2B79'}}>+</Text>
            <Text style={{fontSize:20,color:'#4F2B79'}}>添加照片</Text>
          </TouchableOpacity>
        </View>
        <TextInput
        placeholder='故事标题'
        style={styles.title}>
        </TextInput>
        <TextInput
        multiline={true}
        onContentSizeChange={this._onContentSizeChange.bind(this)}
        style={[styles.content, {height: Math.max(70, this.state.height)}]}
        placeholder='分享让您印象深刻的旅行故事，比如有趣的瞬间，新奇的发现，让人回味的体验。'>
        </TextInput>
        <TouchableOpacity
        activeOpacity={0.75}
        style={styles.button}>
          <Image source={require('../assets/ic_my_setting.png')} style={{width:20,height:20,marginRight:5}}></Image>
          <Text style={{color:'white',fontSize:17}}>标注地点</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  Container: {
    margin:30,
    height:Dimensions.get('window').height/2,
    borderColor:'#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2,
    borderRadius:5,
  },
  title:{
    marginLeft:30,
    fontSize:40,
  },
  content:{
    textAlignVertical: 'top',
    marginLeft:30,
    marginRight:30,
    fontSize:20,
  },
  button:{
    margin:30,
    width:120,
    alignItems: 'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    flexDirection:'row',
    borderRadius:25,
    backgroundColor:'#CCCCCC',
  }
});
