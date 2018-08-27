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
import {UltimateListView} from "react-native-ultimate-listview";
import moment from 'moment';
import 'moment/locale/zh-cn'
import SearchHeader from '../../components/react-native-search-header/search-header';

//var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
var today=new Date();
var savePageNum=0;

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
            /*dataSource: ds.cloneWithRows(this._data),//ListView数据来源
            isRefreshing: false,//刷新
            loadingMore:false,
            isLoadAll:false,*/
            confess:{"userId":"initial","anonymous":false,"content":"initial",},
            name:"",
            data:[],
            page:0,
            searchTag:""
        };
        this._data=this._data.concat(this.state.confess);
    }

    /*componentWillMount(){
        let createForm=new FormData();
        createForm.append("userId","a");
        createForm.append("anonymous",true);
        createForm.append("content","Test");
        createForm.append("type","失物招领");
        this.post('/api/confess/create',createForm);
        let form = new FormData();
        form.append("test","");
        this.post('/api/confess/all', form).then((newData) => {
            this._data=this._data.concat(newData.detail)
            this.setState({dataSource: ds.cloneWithRows(this._data)});
        })
    }*/

    onFetch = async(page = 1,startFetch, abortFetch) => {//judge if searching
        let address="/api/confess/all"
        if (this.state.searchTag!=""){
            address="/api/confess/searchByContent?content="+this.state.searchTag
        }
        let form = new FormData();
        form.append("test","");
        await(this.post(address, form).then((newData) => {
            this.setState({ data: newData.detail})
        }));
        this.state.page++;
        startFetch(this.state.data,10);
    };

    renderItem = (item, index, separator) => {
        var _date=new String(item.date);
        _date=moment(item.date).calendar();
        if (this.state.currentTag=='全部动态'){
            return (
                <View style={{marginBottom:12}}>
                    <View3
                        userId={item.anonymous?"匿名用户":item.userId}
                        content={item.content}
                        time={_date}
                    />
                </View>
            )
        } else {
            if (this.state.currentTag==item.type){
                return (
                    <View style={{marginBottom:12}}>
                        <View3
                            userId={item.anonymous?"匿名用户":item.userId}
                            content={item.content}
                            time={_date}
                        />
                    </View>
                )
            }
            else {return null}
        }
    };

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
                        <TouchableOpacity onPress={()=>this.searchHeader.show()}>
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
                            onPress={() => {this.setState({currentTag:this.state.Tags[0]});
                                this.refs.modalBox.close();//关闭modalBox
                            }}>
                            <Text style={[styles.text, {color: "black"}]}>{this.state.Tags[0]}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {this.setState({currentTag:this.state.Tags[1]});
                                this.refs.modalBox.close();//关闭modalBox
                            }}>
                            <Text style={[styles.text, {color: "black"}]}>{this.state.Tags[1]}</Text>
                        </TouchableOpacity>
                    </Modal>


                    <View style={{justifyContent: 'center', alignItems: 'center'}}>

                        <UltimateListView
                            ref={(ref) => this.listView = ref}
                            onFetch={this.onFetch}
                            refreshableMode="basic" //basic or advanced
                            item={this.renderItem}  //this takes two params (item, index)
                            numColumns={1} //to use grid layout, simply set gridColumn > 1

                            //----Extra Config----
                            //header={this.renderHeaderView}
                            //paginationFetchingView={this.renderPaginationFetchingView}
                            //paginationFetchingView={this.renderPaginationFetchingView}
                            //paginationAllLoadedView={this.renderPaginationAllLoadedView}
                            //paginationWaitingView={this.renderPaginationWaitingView}
                            //emptyView={this.renderEmptyView}
                            //separator={this.renderSeparatorView}
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

                <SearchHeader
                    onSearch={(event) => {
                        savePageNum=this.state.page
                        this.state.searchTag=event.nativeEvent.text.split("...")[0]+""
                        this.state.page=0
                        this.listView.refresh()
                    }}
                    onHide={()=>{
                        this.state.searchTag=""
                        this.state.page=savePageNum
                        this.listView.refresh()
                    }}
                    style = {{header:{borderBottomWidth:2,borderColor:'rgb(230,230,230)',}}}
                    headerHeight={Dimensions.get('window').height/13}
                    ref = {(searchHeader) => {
                        this.searchHeader = searchHeader;
                    }}
                    dropShadowed
                    topOffset={0}
                    visibleInitially={false}
                    //persistent={true}
                    onClear = {() => {
                        console.log(`Clearing input!`);
                    }}
                    entryAnimation="from-right-side"
                    onGetAutocompletions = {async (text) => {
                        if(text!=""){
                            var _result=[]
                            var form = new FormData();
                            form.append("test","");
                            await (this.post('/api/confess/autoCompleteByContent?content='+text, form).then((result) => {
                                _result=result.detail
                                for(var i=0;i<_result.length;i++)
                                    _result[i]=this.handleText(_result[i])
                            }))
                            if(_result==[])
                                _result=["未找到结果"]
                            return _result
                        }else{
                            return []
                        }
                    }
                    }
                />
            </View>

        );

    }

    handleText(str){//返回固定长度的中英文混合字符串
        var len = 0;
        var result="";
        for (var i=0; i<str.length; i++) {
            if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {
                len += 2;
            } else {
                len +=0.8;
            }
            if(len>=25)
                return  result+="..."
            result+=str.charAt(i)
        }
        return result;
    }
    /*_renderRow(rowData) {
        var _date=new String(rowData.date);
        _date=moment(rowData.date).calendar();
        if (this.state.currentTag=='全部动态'){
            return (
                <View style={{marginBottom:12}}>
                    <View3
                        userId={rowData.anonymous?"匿名用户":rowData.userId}
                        content={rowData.content}
                        time={_date}
                    />
                </View>
            )
        } else {
            if (this.state.currentTag==rowData.type){
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
            else {return null}
        }
    }

    _onRefresh = () => {
        this.setState({isRefreshing: true});
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
    }*/
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