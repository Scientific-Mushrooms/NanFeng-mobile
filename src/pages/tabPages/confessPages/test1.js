import React,{Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';

class Page1 extends React.Component {
    static navigationOptions = {
        title: 'New Page',
    };
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}
export default Page1;