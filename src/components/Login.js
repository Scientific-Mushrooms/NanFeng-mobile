import React, { Component } from 'react'
import { 
    Image,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Alert
    } from 'react-native'
    
import { connect } from 'react-redux';
import { BaseComponent } from './BaseComponent'
import Toast, {DURATION} from 'react-native-easy-toast'
import {login} from '../redux/action';

class Login extends BaseComponent {

  constructor(props) {
        super(props);
        navigation=this.props.navigation;
        this.state = {
            conceal:true,
            name:"",
            password:"",
        };
    }

    handleSubmit = () => {
          if (this.state.name === '' ) {
            this.refs.logininfo.show("用户名不能为空！")
              return;
          }else if(this.state.password === ''){
            this.refs.logininfo.show("密码不能为空！")
              return;
          }else{
            let form = new FormData();
            form.append('email', this.state.name);
            form.append('password', this.state.password);

            var successAction = (result) => {
              /*if (result.detail !== null) {
                  sessionStorage.setItem('userId', result.detail.userId);
              }
              if (result.more !== null) {
                  sessionStorage.setItem("instructorId", result.more.instructorId);
              }
              if (result.extra !== null) {
                  sessionStorage.setItem("studentId", result.extra.studentId);
              }
              
              this.props.dispatch(login(result.detail, result.more, result.extra));

              this.goBack()*/
              if(result.status=='success'){
                this.refs.logininfo.show("登录成功")
                this.props.dispatch(login(result.detail, result.more, result.extra))
                this.timer = setTimeout(() => {
                  this.props.navigation.replace("BaseTab",{open:true});
                }, 1000)
              }else if(result.description=='email not exist'){
                this.refs.logininfo.show("用户名不存在")
              }else if(result.description=='wrong password'){
                this.refs.logininfo.show("密码错误")
              }else{
                this.refs.logininfo.show("未知错误")
              }
            }
            this.newPost('/api/security/signIn', form, successAction);
      }
  }
  
  static navigationOptions = {
    headerRight:
      <View style={{flex: 1,flexDirection: 'column',justifyContent:'center',alignItems: 'flex-end',marginRight:10}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Register")}
        activeOpacity={0.75}
        style={{flexDirection:'row',alignItems: 'center'}}>
          <Text style={{color: '#61135B',fontSize:20}}>注册</Text>
        </TouchableOpacity>
      </View>,
    headerStyle:{backgroundColor:'white'},
    headerTintColor:'#61135B',
  };

  render() {
    return this._render_later();
  }

  _render_later() {
    return (
    <View style={styles.container}>
    <Text style={styles.welcome}>登录南风</Text>
    <Text style={styles.tip}>请输入您的用户名和密码。</Text>
      <View
        style={styles.inputBox}>
        <Image source={require('../assets/icon_account.png')} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder='用户名'
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({name:text})}/>
      </View>

        <View
          style={styles.inputBox}>
          <Image source={require('../assets/ic_my_photos.png')} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder='密码'
          secureTextEntry={this.state.conceal}
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({password:text})}/>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
          activeOpacity={0.75}>
          <Text
            style={styles.btText}>登录</Text>
        </TouchableOpacity>
        <View style={styles.texts}>
          <Text style={{margin:5}}>使用社交账号登录</Text>
        </View>
        <View style={styles.icons}>
        <TouchableOpacity>
          <Image source={require('../assets/ic_my_photos.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/ic_my_photos.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.other}>Other...</Text>
        </TouchableOpacity>
        </View> 
        <View style={styles.texts}>
          <Text style={styles.text3}>第一次使用南风？ </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
            <Text style={styles.other}>创建账户</Text>
          </TouchableOpacity>
        </View>
      <Toast ref="logininfo" position='top' positionValue={70} opacity={0.6}/>
    </View>
    );
  }
}

const mapStateToProps = state => ({
  identityReducer: state.identityReducer
})


export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
  add_line:{
    textDecorationLine:'line-through',
    textDecorationStyle:'solid',
    color:'#AAAAAA',
  },
  text2:{
    color:'#61135B',
  },
  text3:{
    fontWeight:'bold',
  },
  texts:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
  welcome:{
    fontSize:30,
    marginBottom:10,
    color:'black',
  },
  other:{
    color:'#61135B',
    fontSize:15,
    fontWeight:'bold',
  },
  tip:{
    marginBottom:30,
    fontSize:20,
  },
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 200,
    height: 40,
    fontSize:15,
    color: '#686868',
  },
  icons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:200,
    marginBottom:10,
  },
  icon:{
    width:15,
    height:15,
    marginLeft:12,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'white',
    marginBottom: 15,
    opacity:0.9,
    borderWidth:1,
    borderColor:'#CCCCCC',
  },
  button: {
    height: 40,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#61135B',    
    marginBottom: 30,
    opacity:0.9,
  },
  btText: {
    color: 'white',
    fontSize:17,
  },
});
