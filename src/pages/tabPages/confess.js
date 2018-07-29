import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ConfessHome from './confessPages/ConfessHome';
import Page1 from './confessPages/Page1';

const ConfessNavigator = StackNavigator({
    ConfessHome: {screen: ConfessHome },
    Page1: {screen: Page1},
    },{
    transitionConfig:  TransitionConfiguration,
    }
);

const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
      const { scene } = sceneProps;
      const { route } = scene;
      const params = route.params || {};
      const transition = params.transition || 'forHorizontal';
      return CardStackStyleInterpolator[transition](sceneProps);
    },
  });

class Confess extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (<ConfessNavigator />);
    }
}


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

    //mb用样式
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },
    modalBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 230,
        backgroundColor: "#3B5998"
    },
    text: {
        color: "black",
        fontSize: 22
    }
});

export default Confess;