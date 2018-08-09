import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Dimensions,} from 'react-native';

class NewPost extends Component{

    static navigationOptions = {
        header: null,
    };

    render(){
        const {goBack} = this.props.navigation;

        return(
            <View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>
                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={()=>{goBack()}}>
                            <Text>取消</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Text style={{color: '#585858', fontSize: 20}}>新动态</Text>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity>
                            <Text>发表</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.input}>
                    <TextInput
                        fontSize={16}
                        underlineColorAndroid='transparent'
                        placeholder='分享新鲜事...'
                        blurOnSubmit={false}
                        multiline={true}
                    />
                </View>
                <View style={{backgroundColor:'#fff',flexDirection: 'row',
                    height: 30,alignItems: 'center', justifyContent: 'center',}}>
                    <View style={styles.left}>
                        <TouchableOpacity style={{backgroundColor:'rgb(248,248,248)',flexDirection: 'row',width:95,borderRadius:10,borderWidth:1,
                            borderColor:'rgb(230,230,230)',}}>
                            <Image source={require("../../assets/ic_locate.png")} style={styles.icon}/>
                            <Text> 你在哪里？</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity style={{backgroundColor:'rgb(248,248,248)',flexDirection: 'row',width:40,borderRadius:10,borderWidth:1,
                            borderColor:'rgb(230,230,230)',justifyContent: 'center'}}>
                            <Text>匿名</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:'rgb(248,248,248)',flexDirection: 'row',
                    height: 50,alignItems: 'center',
                    justifyContent: 'space-between',}}>
                    <TouchableOpacity style={{marginLeft:15}}>
                        <Image source={require("../../assets/ic_picture.png")} style={styles.icon2}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/ic_at.png")} style={styles.icon2}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require("../../assets/ic_sharp.png")} style={styles.icon2}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:15}}>
                        <Image source={require("../../assets/ic_face.png")} style={styles.icon2}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        marginLeft:15,
    },
    right:{
        flex:1,
        flexDirection: 'row-reverse',
        marginLeft:15
    },

    input:{
        backgroundColor:'#fff',
        height:200,
    },

    icon:{
        height:20,
        width:20,
    },
    icon2:{
        height:27,
        width:27,
    }
});

export default NewPost;