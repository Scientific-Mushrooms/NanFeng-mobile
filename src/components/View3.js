import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Alert,
    FlatList} from 'react-native';

export default class View3 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image source={require('../assets/profile_lemon.jpg')} style={styles.picture}/>
                    <View>
                        <Text style={styles.username}>匿名用户</Text>
                        <Text style={styles.time}>今天 13:20</Text>
                    </View>
                </View>
                <Text style={styles.content}>请问今晚的东亚海域史作业的要求是什么？什么时候交呢。</Text>
                <View style={styles.container3}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => {Alert.alert('icon1')}}>
                        <Image source={require('../assets/ic_like.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => {Alert.alert('icon2')}}>
                        <Image source={require('../assets/ic_comment.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => {Alert.alert('icon3')}}>
                        <Image source={require('../assets/ic_share.png')} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <Image source={require('../assets/ic_like.png')} style={styles.icon2}/>
                    <Text style={styles.comment}>11人觉得很赞</Text>
                </View>
                <View style={styles.container4}>
                    <Image source={require('../assets/ic_comment.png')} style={styles.icon2}/>
                    <Text style={styles.comment}>2条评论回复</Text>
                </View>
                <FlatList
                    data={[{name:'用户AB',content:'AJKSLDAHJKD..'},{name:'用户BCD',content:'JKAIS。'},{name:'用户CRFG',content:'IOUJK。。'},{name:'用户DJKL',content:'UIO。'},]}
                    renderItem={({item}) =>
                        <View style={styles.container2}>
                            <Text style={styles.username_friends}>{item.name+':'}</Text>
                            <Text style={styles.content_friends}>{item.content}</Text>
                        </View>
                    }/>
                <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder='评论...'></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        elevation:3,
        backgroundColor: '#FFFFFF',
    },
    container2: {
        flexDirection:'row',
        alignItems:'center',
    },
    username:{
        fontSize: 20,
        marginLeft:3,
        marginTop:10,
        marginBottom:0,
    },
    username_friends:{
        marginLeft:15,
        marginTop:5,
        marginRight:5,
        color:"#268BD2",
        fontSize:13,
    },
    content_friends:{
        marginTop:5,
        color:"#000000",
        fontSize:13,
    },
    picture:{
        width:60,
        height:60,
        marginTop:10,
    },
    time:{
        fontSize:15,
        color:'#999999',
        marginLeft:3,
        marginTop:3,
    },
    container3:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'center',
        margin:10,
    },
    icon:{
        width:30,
        height:30,
        marginLeft:15,
    },
    icon2:{
        width:20,
        height:20,
        marginLeft:15,
        marginTop:5,
        marginBottom:5,
        marginRight:5,
    },
    comment:{
        color:'#000000'
    },
    input:{
        backgroundColor:'#EEEEEE',
        margin:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3,
        paddingBottom:3,
        borderRadius:5,
    },
    content:{
        width:Dimensions.get('window').width*0.96,
        fontSize:16,
        margin:10,
        color:'#000000',
        lineHeight:24,
    },
    container4:{
        flexDirection:'row',
        borderRadius:20,
        borderBottomColor:'#CCCCCC',
        borderBottomWidth:1,
        alignItems:'center',
    },
});
