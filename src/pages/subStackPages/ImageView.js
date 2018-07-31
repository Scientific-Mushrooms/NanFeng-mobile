import React, { Component } from 'react';
import {
  Dimensions,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Image from '../../components/TransformableImage';

class ImageView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Image
          style={{width: Dimensions.get('window').width,height:Dimensions.get('window').height}}
          source={this.props.navigation.state.params.imgsrc}
        />)
  }
}

export default ImageView;