import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
      <View style={styles.container}>
        <Text>courses</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Swiper')}>
          <Text style={styles.btText}>点击进入新页面</Text>
          <Text style={styles.btText}>以测试二级导航</Text>
        </TouchableOpacity>
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
  });

export default connect(mapStateToProps)(Course);