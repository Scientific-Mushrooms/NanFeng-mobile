import React, { Component } from 'react'
import { 
    Dimensions,
    Image,
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    } from 'react-native'
import { Button, Input } from 'native-base';

export default class Register extends Component {


    render(){
        return( 
        <ScrollView>
            <Text style={{color:'#61135B',margin:10,fontSize:25}}>个人信息</Text>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>修改头像</Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        activeOpacity={0.75}>
                        <Image style={{width:70,height:70}} source={this.props.avatar}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.75}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>个人信息</Text>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>用户名</Text>
                    <TextInput 
                    placeholder="输入新的用户名"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>邮箱</Text>
                    <TextInput 
                    placeholder="填写邮箱"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>修改密码</Text>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>原密码</Text>
                    <TextInput 
                    placeholder="输入原密码"
                    secureTextEntry={true}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>新密码</Text>
                    <TextInput 
                    placeholder="输入新密码"
                    secureTextEntry={true}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>重复新密码</Text>
                    <TextInput 
                    placeholder="再次输入新密码"
                    secureTextEntry={true}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>学工认证</Text>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>姓名</Text>
                    <TextInput 
                    placeholder="请输入您的姓名"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>学工号</Text>
                    <TextInput 
                    placeholder="请输入您的学工号"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>学生认证</Text>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>姓名</Text>
                    <TextInput 
                    placeholder="请输入您的姓名"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>学号</Text>
                    <TextInput 
                    placeholder="请输入您的学号"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        );
    }
};



const styles = StyleSheet.create({
    title:{
        color:'#61135B',
        fontSize:20,
        margin:10,
        borderBottomWidth:1,
    },
    btText:{
        color:'#61135B',
        fontSize:15,
        margin:5,
        borderRadius:5,
    },
    button:{
        borderWidth:1,
        borderColor:'#61135B',
        width:80,
        margin:5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    container2:{
        borderColor:'#AAAAAA',
        borderBottomWidth:1,
        marginLeft:10,
        marginRight:10,
        alignItems:'center',
        flexDirection:'row',
    },
    inputBox:{
        width:'60%',
        fontSize:15,
        borderRadius:5,
        marginLeft:20,
        paddingLeft:0,
        paddingRight:0,
        paddingTop:5,
        paddingBottom:5,
    },
    subtitle:{
        marginLeft:10,
        color:'black',
    },
});