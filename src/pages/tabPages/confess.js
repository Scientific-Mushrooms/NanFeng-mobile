import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    RefreshControl,
    Image,
    Dimensions
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import ActionButton from 'react-native-action-button';
import { connect } from 'react-redux';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Confess extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            currentTag: '全部动态',
            Tags:['全部动态','TagA'],
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,//mb初始设置
            dataSource: ds.cloneWithRows(['内容1', '内容2', '内容3', '内容4', '内容5']),//ListView数据来源
            isRefreshing: false,//刷新
            loadingMore:false,
            isLoadAll:false
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>

                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/profile.png")} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Text style={{color: '#585858', fontSize: 20}}
                              onPress={() => this.refs.modalBox.open()}
                        >{this.state.currentTag}</Text>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity onPress={()=>{navigate('Search', { transition: 'forVertical' });}}>
                            <Image source={require("../../assets/ic_search.png")} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Modal style={styles.modalBox}
                           backdrop={true} //背景默认黑色50%透明度
                           position={"top"}  //悬停位置
                           ref={"modalBox"}
                           entry={"top"} //从上端进入
                           animationDuration={400}//动画速度
                    >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {this.setState({currentTag:'全部动态'});
                                this.refs.modalBox.close();//关闭modalBox
                            }}>
                            <Text style={[styles.text, {color: "black"}]}>{this.state.Tags[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {this.setState({currentTag:'TagA',isOpen:false});
                                this.refs.modalBox.close();//关闭modalBox
                            }}>
                            <Text style={[styles.text, {color: "black"}]}>{this.state.Tags[1]}</Text>
                        </TouchableOpacity>
                    </Modal>


                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ListView
                            style={{width: '90%'}}
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow.bind(this)}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this._onRefresh}
                                    colors={['#ff0000', '#00ff00', '#0000ff']}
                                    progressBackgroundColor="#ffffff"
                                />
                            }
                            onEndReached={this._onEndReached}
                            renderFooter={()=>{return(
                                <View style={styles.footer}>
                                    <Text style={styles.footerTitle}>{ this.state.isLoadAll?'已加载全部':'正在加载更多……'}</Text>
                                </View>
                            )}}
                            //renderFooter={this._renderFooter().bind(this)}
                        />
                    </View>

                    <ActionButton buttonColor="rgba(231,76,60,1)" position='right' verticalOrientation='up'
                                  offsetY={75}>
                        <ActionButton.Item buttonColor='#9b59b6' title="发布"
                                           onPress={() => console.log("notes tapped!")}>
                            <Text style={styles.actionButtonIcon}>N</Text>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="消息"
                                           style={{justifyContent: 'center', alignItems: 'center'}}
                                           onPress={() => {
                                           }}>
                            <Text style={styles.actionButtonIcon}>P</Text>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="设置"
                                           style={{justifyContent: 'center', alignItems: 'center'}}
                                           onPress={() => {
                                           }}>
                            <Text style={styles.actionButtonIcon}>S</Text>
                        </ActionButton.Item>
                    </ActionButton>

                </View>

            </View>

        );
    }

    _renderRow(rowData) {
        return (
            // 实例化Item
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                height: 100,
                marginTop: 15
            }}>
                <Text>{rowData}</Text>
            </View>

        )
    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
                dataSource: ds.cloneWithRows(['内容0', '内容1', '内容2', '内容3', '内容4', '内容5']),
            });
        }, 3000);
    }
    _onEndReached = () => {
        if (this.state.loadingMore || this.state.isLoadAll || this.state.isRefreshing) {
            return;
        };
        this.setState({loadingMore:true});
        setTimeout(() => {
            this.setState({
                loadingMore: false,
                dataSource: ds.cloneWithRows([ '内容1', '内容2', '内容3', '内容4', '内容5', '内容6']),
                isLoadAll: true
            });
        }, 2000);
    }
    _renderFooter(){
        if (this.state.isLoadAll) {
            return (<View style={styles.footer}>
                <Text style={styles.footerTitle}>{ '已加载全部'}</Text>
            </View>);
        }else if (!this.state.isLoadAll&&this.state.loadingMore) {
            return (<View style={styles.footer}>
                <Text style={styles.footerTitle}>{ '正在加载更多……'}</Text>
            </View>);
        }
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

    icon:{
        marginLeft:15,
        marginRight:15,
        width:Dimensions.get('window').height/12-30,
        height:Dimensions.get('window').height/12-30
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

    //头部
    header: {
        flexDirection: 'row',
        height: Dimensions.get('window').height/12,
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
    left:{
        flex:1,
    },
    right:{
        flex:1,
        flexDirection: 'row-reverse',
    },

    //底部
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 95,
    },
    footerTitle: {
        marginTop: 15,
        fontSize: 15,
        color: 'gray'
    },

    actionButtonIcon: {
        fontSize: 20,
        color: 'white',
    },
});

export default Confess;