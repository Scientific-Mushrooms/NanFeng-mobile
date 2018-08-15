import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ListView,
    View,
    Image,
    TouchableOpacity,
    RefreshControl,
    Dimensions,} from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Notification extends Component{

    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.state = {
            dataSource: ds.cloneWithRows(['@我的', '评论', '赞', '聊天用户1','聊天用户2','聊天用户3']),//ListView数据来源
            isRefreshing: false,//刷新
            loadingMore:false,
            isLoadAll:true
        };
    }

    render(){
        const {goBack} = this.props.navigation;

        return(
            <View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>

                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={()=>{goBack()}}>
                            <Text>返回</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Text style={{color: '#585858', fontSize: 20}}>消息</Text>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity>
                            <Image source={require("../../assets/ic_message.png")} style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                        /*refreshControl={
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
                        )}}*/
                    />
                </View>
            </View>
        );
    }

    _renderRow(rowData,sectionID,rowID) {
        // 实例化Item
        if(rowID==0){
            return (
                <TouchableOpacity style={styles.item}>
                    <View style={{flexDirection: 'row',alignItems: 'center',width:240}}>
                        <Image source={require("../../assets/at.png")} style={styles.icon2}/>
                        <Text>{rowData}</Text>
                    </View>
                    <Image source={require("../../assets/ic_to.png")} style={styles.icon3}/>
                </TouchableOpacity>
            )
        }
        else if (rowID==1){
            return (
                <TouchableOpacity style={styles.item}>
                    <View style={{flexDirection: 'row',alignItems: 'center',width:240}}>
                        <Image source={require("../../assets/comment.png")} style={styles.icon2}/>
                        <Text>{rowData}</Text>
                    </View>
                    <Image source={require("../../assets/ic_to.png")} style={styles.icon3}/>
                </TouchableOpacity>
            )
        }
        else if (rowID==2){
            return (
                <TouchableOpacity style={styles.item}>
                    <View style={{flexDirection: 'row',alignItems: 'center',width:240}}>
                        <Image source={require("../../assets/like.png")} style={styles.icon2}/>
                        <Text>{rowData}</Text>
                    </View>
                    <Image source={require("../../assets/ic_to.png")} style={styles.icon3}/>
                </TouchableOpacity>
            )
        }
        else {
            const {navigate} = this.props.navigation;
            return (
                <TouchableOpacity style={styles.item} onPress={()=>{navigate('Chat', {user0:rowData})}}>
                    <Image source={require("../../assets/user.png")} style={styles.icon2}/>
                    <Text>{rowData}</Text>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    //头部
    header: {
        flexDirection: 'row',
        height: Dimensions.get('window').height / 12,
        borderBottomWidth: 2,
        borderColor: 'rgb(230,230,230)',
        backgroundColor: 'rgb(248,248,248)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    left: {
        flex: 1,
        marginLeft: 15,
    },
    right: {
        flex: 1,
        flexDirection: 'row-reverse',
        marginLeft: 15
    },

    icon:{
        height:27,
        width:27,
    },
    icon2:{
        marginLeft:15,
        marginRight:15,
        height:48,
        width:48,
    },
    icon3:{
        marginLeft:105,
        height:16,
        width:16,
    },

    item:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 72,
        width:Dimensions.get('window').width,
        borderBottomWidth: 1,
        borderColor: 'rgb(230,230,230)',
    }
});

export default Notification;