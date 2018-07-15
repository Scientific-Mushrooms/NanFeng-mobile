import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, reset } from '../../redux/action';

class Confess extends Component {
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
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>confess</Text>
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
      backgroundColor: '#F5FCFF',
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

export default connect(mapStateToProps)(Confess);