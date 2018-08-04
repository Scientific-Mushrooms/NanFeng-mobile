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

export const MyCustomTransition = (index, position) => {
    const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
    });
    const translateX = 0;
    const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: ([0, 0, 0]),
    });

    return {
        opacity,
        transform: [
            { translateX },
            { translateY }
        ],
    };
};//自定义无动画

const TransitionConfiguration = () =>({
    transitionSpec: {
        duration: 250,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
    },
    screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index, route } = scene;
        const params = route.params || {};
        const transition = params.transition || 'default';
        const realHeight = layout.initHeight;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [realHeight, 0, 0],//outputRange: [height, 0, 0], height改为0，删去动画效果
        })

        const translateY0 = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 0, 0],//outputRange: [height, 0, 0], height改为0，删去动画效果
        })
        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        })

        return {'default':{ opacity, transform: [{ translateY }] },
            '0':MyCustomTransition(index,position)}[transition]
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
    }
)



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