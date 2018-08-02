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
    header: null,
  };

  render() {
    return(
    <View style={{flex:1,backgroundColor:'black'}}>
        <TouchableOpacity style={{flex:1}}>
            <Image 
            source={require('../../assets/cancel.png')} 
            style={styles.icon} 
            resizeMode='contain'/>
        </TouchableOpacity>
        <Image
            onTransformGestureReleased={(object)=>this.handleScale}
            style={{width: Dimensions.get('window').width,height:Dimensions.get('window').height*19/20}}
            source={this.props.navigation.state.params.imgsrc}
        />
    </View>)
  }

  handleScale=(object)=>{
      Alsert.alert(object.scale)
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