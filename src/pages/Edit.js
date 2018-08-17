import React, { Component } from 'react'
import { Image,View,StyleSheet,TouchableOpacity,Text,Dimensions,ImageBackground,TextInput } from 'react-native'

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
        height:0,
    };
  }

  static navigationOptions = {
    headerTitle:
    <View style={{flex: 1,flexDirection: 'column',alignItems: 'center'}}>
        <Text style={{color: '#61135B',fontSize:20}}>写下见闻</Text>
    </View>,
    headerRight:<View style={{flex: 1}}/>,
    headerStyle:{backgroundColor:'white'},
    headerTintColor:'#61135B',
  };

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
        placeholder='见闻标题'
        style={styles.title}>
        </TextInput>
        <TextInput
        multiline={true}
        onContentSizeChange={this._onContentSizeChange.bind(this)}
        style={[styles.content, {height: Math.max(70, this.state.height)}]}
        placeholder='分享您的校园见闻，比如令人印象深刻的美景，人物或是活动。'>
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
