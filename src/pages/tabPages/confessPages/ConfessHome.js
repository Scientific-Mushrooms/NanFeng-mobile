import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { setFirst } from '../../../redux/action';


class ConfessHome extends Component {

    static navigationOptions = {
        header: null,
    };

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
        const { navigate } = this.props.navigation;
        return (

            <View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>

                <View style={styles.header}>
                    <View style={styles.side}>
                        <TouchableOpacity>
                            <Image source={require("../../../assets/profile.png")} style={styles.icon}/>
                        </TouchableOpacity>                   
                    </View>
                    <View style={styles.center}>
                        <Text style={{color: '#585858',fontSize:20}}
                              onPress={() => this.refs.modalBox.open()}
                        >全部动态</Text>
                    </View>
                    <View style={styles.side}/>                     
                </View>

                <View style={styles.container}>
                    <Modal style={styles.modalBox}
                           backdrop={true} //背景默认黑色50%透明度
                           position={"top"}  //悬停位置
                           ref={"modalBox"}
                           entry={"top"} //从上端进入
                           animationDuration={400}//动画速度
                    >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.refs.modalBox.close();//转跳前关闭上一级modalBox
                                navigate('Page1',{ transition:'0' });
                            }}>
                        <Text style={[styles.text, {color: "black"}]}>Page1</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, {color: "black"}]}>Page2</Text>
                    </Modal>

                    <Text style={styles.counter}>confess</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.ifFirstReset.bind(this)}>
                        <Text style={styles.btText}>点击重置redux状态</Text>
                        <Text style={styles.btText}>以测试redux-persist</Text>
                    </TouchableOpacity>
                </View>

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
        backgroundColor: 'rgb(240,240,240)'
    },
    text: {
        color: "black",
        marginTop: 30,
        marginBottom: 30,
        fontSize: 22
    },
    icon:{
        marginLeft:15,
        width:Dimensions.get('window').height/15-25,
        height:Dimensions.get('window').height/15-25
    },

    //头部
    header: {
        flexDirection: 'row',
        height: Dimensions.get('window').height/15,
        borderBottomWidth:2,
        borderColor:'rgb(230,230,230)',
        backgroundColor:'rgb(248,248,248)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    side:{
        flex:1,
        justifyContent: 'center',
    }
});






export default connect(mapStateToProps)(ConfessHome);