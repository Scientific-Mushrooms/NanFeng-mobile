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
import { connect } from 'react-redux';
import BaseComponent from './BaseComponent'
import Toast, {DURATION} from 'react-native-easy-toast'
import {update} from '../redux/action';

class EditUserFile extends BaseComponent {   
    static navigationOptions = {
        headerTitle:
        <View style={{flex: 1,flexDirection: 'column',alignItems: 'center'}}>
            <Text style={{color:'#61135B',margin:10,fontSize:20}}>个人信息</Text>
        </View>,
        headerRight:
          <View style={{flex: 1,flexDirection: 'column',alignItems: 'flex-end'}}/>,
        headerStyle:{backgroundColor:'white'},
        headerTintColor:'#61135B',
        };

    constructor(props) {
        super(props);
        this.state = {
            userId:this.props.identityReducer.user.userId,
            name:"",
            email:"",
            password:"",
            newpassword:"",
            renewpassword:"",
            name_student:"",
            name_teacher:"",
            code_student:"",
            code_teacher:"",
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleUserInformation=()=>{
        var {userId,name,email}=this.state
        let form = new FormData();
        form.append("userId", userId);
        form.append("nickName", name);
        form.append("email", email);
        var successAction = (result) => {
            this.props.dispatch(update(result.detail))
            alert(result.detail.nickName)
            this.refs.logininfo.show("成功更新信息")
        }

        this.newPost('/api/user/update', form, successAction);
    }

    handleUserInformation=()=>{
        var {userId,name,email}=this.state
        let form = new FormData();
        form.append("userId", userId);
        form.append("nickName", name);
        form.append("email", email);
        var successAction = (result) => {
            //this.props.dispatch(update(result.detail))
            //alert(result.detail.nickName)
            this.refs.logininfo.show("成功更新信息")
        }

        this.newPost('/api/user/update', form, successAction);
    }

    handleUserPassword=()=>{
        this.refs.logininfo.show("授权失败")
    }

    render(){
        return( 
        <View style={{flex:1}}>
        <ScrollView style={{backgroundColor:"white"}}>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>修改头像</Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>this.refs.logininfo.show("由于服务器问题，暂停图片上传")}
                        activeOpacity={0.75}>
                        <Image 
                        style={{width:70,height:70}} 
                        source={{uri:"http://www.clavier.moe:8080/api/image/"+this.props.identityReducer.user.avatarId}}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.75}
                        onPress={()=>this.refs.logininfo.show("由于服务器问题，暂停图片上传")}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>个人信息</Text>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>昵称</Text>
                    <TextInput 
                    placeholder="填写昵称"
                    onChange={(value)=> this.handleChange("name")(value)}
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>邮箱</Text>
                    <TextInput
                    onChange={(value)=> this.handleChange("email")(value)}
                    placeholder="更换用户名"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    onPress={this.handleUserInformation}
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
                    onChange={(value)=> this.handleChange("password")(value)}
                    placeholder="输入原密码"
                    secureTextEntry={true}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>新密码</Text>
                    <TextInput 
                    onChange={(value)=> this.handleChange("newpassword")(value)}
                    placeholder="输入新密码"
                    secureTextEntry={true}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>重复新密码</Text>
                    <TextInput 
                    onChange={(value)=> this.handleChange("renewpassword")(value)}
                    placeholder="再次输入新密码"
                    secureTextEntry={true}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    onPress={this.handleUserPassword}
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
                    onChange={(value)=> this.handleChange("name_teacher")(value)}
                    placeholder="请输入您的姓名"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>学工号</Text>
                    <TextInput 
                    onChange={(value)=> this.handleChange("code_teacher")(value)}
                    placeholder="请输入您的学工号"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}
                    onPress={()=>this.refs.logininfo.show("信息库认证失败")}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{borderRadius:10,margin:2,elevation:5,justifyContent:'center'}}>
                <Text style={styles.title}>学生认证</Text>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>姓名</Text>
                    <TextInput 
                    onChange={(value)=> this.handleChange("name_student")(value)}
                    placeholder="请输入您的姓名"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.subtitle}>学号</Text>
                    <TextInput 
                    onChange={(value)=> this.handleChange("code_student")(value)}
                    placeholder="请输入您的学号"
                    secureTextEntry={false}
                    style={styles.inputBox}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.75}
                    onPress={()=>this.refs.logininfo.show("信息库认证失败")}>
                        <Text style={styles.btText}>提交</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        <Toast ref="logininfo" position='top' opacity={0.6}/>
        </View>
        );
    }
};

const mapStateToProps = state => ({
    identityReducer: state.identityReducer
  })
  
  
export default connect(mapStateToProps)(EditUserFile)

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