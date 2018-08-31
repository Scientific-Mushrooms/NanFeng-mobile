import React, { Component } from 'react';
import {
  Dimensions,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  CameraRoll
} from 'react-native';
import Image from '../../components/TransformableImage';

class ImageView extends Component {
  constructor(props) {
    super(props);
  }
    
  static navigationOptions = {
    headerTitle:
    <View style={{flex: 1,flexDirection: 'column',alignItems: 'center'}}>
        <Text style={{color: 'white',fontSize:20}}>图片详情</Text>
    </View>,
    headerRight:
      <View style={{flex: 1,flexDirection: 'column',alignItems: 'flex-end'}}/>,
    headerStyle:{backgroundColor:'black'},
    headerTintColor:'white',
  };

  saveImage=()=>{
    var promise = CameraRoll.saveToCameraRoll(this.props.navigation.state.params.image)
    promise.then(function(result){
      alert(result);
    }, function(err) {
      alert(err);
    });
  }

  //在IOS设备上跑需要在Xcode上进行单独的配置
  //见https://blog.csdn.net/qq_28978893/article/details/77102423


  render() {
    return(
    <View style={{flex:1,backgroundColor:'black'}}>
        <Image
          onTransformGestureReleased={(object)=>this.handleScale(object)}
          style={{width: Dimensions.get('window').width,height:Dimensions.get('window').height*18/20}}
          source={this.props.navigation.state.params.image}
        />
          <TouchableOpacity
          style={styles.absolute}
          activeOpacity={0.75}>
            <View style={{borderWidth:1,borderColor:'#686868',paddingHorizontal:8,paddingVertical:5}}>
              <Text style={{color: '#686868',fontSize:17}}>保存图片</Text>
            </View>
          </TouchableOpacity>
    </View>)
  }

  handleScale=(object)=>{
      if(object.scale<1){
          return false
      }else
          return true
  }

}

const styles={
  icon:{
    margin:5,
    width:Dimensions.get('window').width/20
  },
  absolute:{
    position: 'absolute',
    bottom:20,
    width:Dimensions.get('window').width,
    justifyContent:'center',
    alignItems: 'center',
  },
}
export default ImageView;