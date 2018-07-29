import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import ConfessHome from './confessPages/ConfessHome';
import Page1 from './confessPages/Page1';
import {connect} from "react-redux";
import {notFirst} from "../../redux/action";
// StackNavigator配置，默认显示MianVC页面
const ConfessNavigator = StackNavigator(
    {
        ConfessHome: {screen: ConfessHome },
        Page1: {screen: Page1},
    },
    {
        initialRouteName: 'ConfessHome',//默认路由，就是第一个要显示的页面
    }
);

class Confess extends Component {

    static navigationOptions = {
        header: null,
    };


    render() {
        return (
            <ConfessNavigator />
        );
    }
}
const mapStateToProps = state => ({
    ifFirst: state.ifFirst
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

export default connect(mapStateToProps)(Confess);