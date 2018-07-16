import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { setFirst } from '../../redux/action';

class Confess extends Component {
  ifFirstReset() {
    this.props.dispatch(setFirst());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>confess</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.ifFirstReset.bind(this)}>
            <Text style={styles.btText}>点击重置redux状态</Text>
            <Text style={styles.btText}>以测试redux-persist</Text>
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