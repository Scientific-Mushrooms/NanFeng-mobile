import React, { Component } from 'react';
import {
  Dimensions,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
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
      <View style={{flex: 1,flexDirection: 'column',alignItems: 'flex-end',marginRight:10}}>
        <TouchableOpacity
        activeOpacity={0.75}
        style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={{color: '#686868',fontSize:20}}>保存</Text>
        </TouchableOpacity>
      </View>,
    headerStyle:{backgroundColor:'black'},
    headerTintColor:'white',
  };

  render() {
    return(
    <View style={{flex:1,backgroundColor:'black'}}>
        <Image
            onTransformGestureReleased={(object)=>this.handleScale(object)}
            style={{width: Dimensions.get('window').width,height:Dimensions.get('window').height*19/20}}
            source={this.props.navigation.state.params.imgsrc}
        />
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
}
export default ImageView;