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
import ActionButton from 'react-native-action-button';
import View3 from '../../components/View3'
import BaseComponent from '../../components/BaseComponent'
import moment from 'moment';
import 'moment/locale/zh-cn'

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var today=new Date();

class Confess extends BaseComponent{

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this._data=[];
        this.state = {
            currentTag: '全部动态',
            Tags:['全部动态','失物招领'],
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,//mb初始设置
            dataSource: ds.cloneWithRows(this._data),//ListView数据来源
            isRefreshing: false,//刷新
            loadingMore:false,
            isLoadAll:false,
            confess:{"userId":"initial","anonymous":false,"content":"initial",}
        };
        this._data=this._data.concat(this.state.confess);
    }

    componentWillMount(){
        /*let createForm=new FormData();
        createForm.append("userId","a");
        createForm.append("anonymous",true);
        createForm.append("content","Test");
        createForm.append("type","失物招领");
        this.post('/api/confess/create',createForm);*/
        let form = new FormData();
        form.append("test","");
        this.post('/api/confess/all', form).then((newData) => {
            this._data=this._data.concat(newData.detail)
            this.setState({dataSource: ds.cloneWithRows(this._data)});
        })
    }

    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>

                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={this.props.openDrawer}>
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
                            onPress={() => {this.setState({currentTag:'全部动态',dataSource: ds.cloneWithRows(['内容1', '内容2', '内容3', '内容4', '内容5', '内容6'])});
                                this.refs.modalBox.close();//关闭modalBox
                            }}>
                            <Text style={[styles.text, {color: "black"}]}>{this.state.Tags[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {this.setState({currentTag:'TagA',dataSource: ds.cloneWithRows(['内容2', '内容4', '内容6'])});
                                this.refs.modalBox.close();//关闭modalBox
                            }}>
                            <Text style={[styles.text, {color: "black"}]}>{this.state.Tags[1]}</Text>
                        </TouchableOpacity>
                    </Modal>


                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <ListView
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

                    <ActionButton 
                    buttonColor='#9b59b6' 
                    position='right' 
                    verticalOrientation='up'
                    offsetY={75}>
                        <ActionButton.Item 
                        buttonColor='#9b59b6'
                        title="发布"
                        onPress={() => {
                            navigate('NewPost');
                        }}>
                            <Text style={styles.actionButtonIcon}>N</Text>
                        </ActionButton.Item>
                        <ActionButton.Item 
                        buttonColor='#3498db' 
                        title="消息"
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => {
                            navigate('Notification');
                        }}>
                            <Text style={styles.actionButtonIcon}>P</Text>
                        </ActionButton.Item>
                        <ActionButton.Item 
                        buttonColor='#1abc9c' 
                        title="设置"
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
        var _date=new String(rowData.date);
        _date=moment(rowData.date).calendar();
        /*var yyyy=_date.slice(0,4);
        var mm=_date.slice(5,7);
        var dd=_date.slice(8,10);
        var h=_date.slice(11,13);
        var m=_date.slice(14,16);
        var d="";
        if (!today.getFullYear()==yyyy){
            d=yyyy+"-"+mm+"-"+dd;
        } else if (today.getMonth()+1==mm&&today.getDate()==dd){
            d="今天 "+h+":"+m;
        } else if (today.getMonth()+1==mm&&today.getDate()-1==dd){
            d="昨天 "+h+":"+m;
        }else if (today.getMonth()+1==mm&&today.getDate()-2==dd){
            d="前天 "+h+":"+m;
        }else {
            d=mm+"-"+dd+" "+h+":"+m;
        }*/
        return (
            <View style={{marginBottom:12}}>
                <View3
                    userId={rowData.anonymous?"匿名用户":rowData.userId}
                    content={rowData.content}
                    time={_date}
                />
            </View>
        )
    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
        /*setTimeout(() => {
            this.setState({
                isRefreshing: false,
            });
        }, 3000);*/
        let form = new FormData();
        form.append("test","");
        this.post('/api/confess/all', form).then((newData) => {
            this._data=this._data.concat(newData.detail)
            this.setState({dataSource: ds.cloneWithRows(this._data)});
        })
        this.setState({
            isRefreshing: false,
        });
    }
    _onEndReached = () => {
        if (this.state.loadingMore || this.state.isLoadAll || this.state.isRefreshing) {
            return;
        };
        this.setState({loadingMore:true});
        setTimeout(() => {
            this.setState({
                loadingMore: false,
                isLoadAll: true
            });
        }, 2000);
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
        width:Dimensions.get('window').height/22,
        height:Dimensions.get('window').height/22
    },

    //mb用样式
    button: {
        height: Dimensions.get('window').height/12,
    },
    modalBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height/6,
        backgroundColor: 'rgb(240,240,240)'
    },
    text: {
        color: "#585858",
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },

    //头部
    header: {
        flexDirection: 'row',
        height: Dimensions.get('window').height/13,
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

    shadowStyle: {
        shadowOpacity: 0.35,
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowColor: "#000",
        shadowRadius: 3,
        elevation: 5
    }
});

export default Confess;