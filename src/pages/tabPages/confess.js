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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

class CN extends Component {

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

export default connect(mapStateToProps)(CN);