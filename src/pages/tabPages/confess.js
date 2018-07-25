import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { setFirst } from '../../redux/action';

class Confess extends Component {


    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }//mb初始设置

    ifFirstReset() {
        this.props.dispatch(setFirst());
    }



    render() {
        return (

            <View style={styles.container}>

                <Button onPress={() => this.refs.modal2.open()} style={styles.btn}>Position top</Button>
                <Modal style={styles.modalbox} backdrop={true}  position={"top"} ref={"modal2"} entry={"top"} >
                    <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
                </Modal>

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

    //mb用样式
    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },
    modalbox: {
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