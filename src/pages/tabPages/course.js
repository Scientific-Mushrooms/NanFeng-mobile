import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, reset } from '../../redux/action';

class Course extends Component {
  _onPressReset() {
    this.props.dispatch(reset());
  }

  _onPressInc() {
    this.props.dispatch(increase());
  }

  _onPressDec() {
    this.props.dispatch(decrease());
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>
        <View style={styles.header}>
          <View style={styles.left}>
            <TouchableOpacity onPress={this.props.openDrawer}>
              <Image source={require("../../assets/profile.png")} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <Text style={{color: '#585858', fontSize: 20}}>课程列表</Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity onPress={()=>{navigate('Search', { transition: 'forVertical' });}}>
              <Image source={require("../../assets/ic_search.png")} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text>courses</Text>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Swiper')}>
            <Text style={styles.btText}>点击进入新页面</Text>
            <Text style={styles.btText}>以测试二级导航</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    //头部
    header: {
      flexDirection: 'row',
      height: Dimensions.get('window').height/13,
      borderBottomWidth:2,
      borderColor:'rgb(230,230,230)',
      backgroundColor:'rgb(248,248,248)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    left:{
      flex:1,
    },
    right:{
      flex:1,
      flexDirection: 'row-reverse',
    },
    icon:{
      marginLeft:15,
      marginRight:15,
      width:Dimensions.get('window').height/22,
      height:Dimensions.get('window').height/22
    },
  });

export default connect(mapStateToProps)(Course);