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
import { GiftedChat,Bubble } from 'react-native-gifted-chat';

class Chat extends Component{

    static navigationOptions = {
        header: null,
    };

    state = {
        messages: [],
    };
    componentWillMount(){
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'This is a test.',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        })
    }
    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render(){

        const {goBack} = this.props.navigation;
        const { params } = this.props.navigation.state;

        return(
            /*<View style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>
                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={()=>{goBack()}}>
                            <Text>返回</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Text style={{color: '#585858', fontSize: 20}}>新动态</Text>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity>
                            <Text>设置</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>*/
            <View style={{height: Dimensions.get('window').height,}}>
                <View style={styles.header}>
                    <View style={styles.left}>
                        <TouchableOpacity onPress={()=>{goBack()}}>
                            <Text>返回</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.center}>
                        <Text style={{color: '#585858', fontSize: 20}}>{params.user0}</Text>
                    </View>
                    <View style={styles.right}>
                        <TouchableOpacity>
                            <Text>设置</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
                <View style={{height: 20}}/>
            </View>

        );
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
})

export default Chat;