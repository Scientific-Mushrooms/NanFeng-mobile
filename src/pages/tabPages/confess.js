import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Easing,
    Animated
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ConfessHome from './confessPages/ConfessHome';
import Page1 from './confessPages/Page1';
import {connect} from "react-redux";
import {notFirst} from "../../redux/action";


const TransitionConfiguration = () =>({
    transitionSpec: {
        duration: 250,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const height = layout.initHeight;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 0, 0],//outputRange: [height, 0, 0], height改为0，删去动画效果
        })

        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
    },
});

const ConfessNavigator = StackNavigator(
    {
        ConfessHome: {screen: ConfessHome },
        Page1: {screen: Page1},
    },
    {
        initialRouteName: 'ConfessHome',//默认路由，就是第一个要显示的页面
        transitionConfig: TransitionConfiguration,




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