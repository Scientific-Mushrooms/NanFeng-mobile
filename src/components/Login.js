import React, { Component } from 'react'
import { 
    Image,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    AsyncStorage,
    Dimensions
    } from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Login extends Component {

  constructor(props) {
        super(props);
        navigation=this.props.navigation;
        this.state = {
            conceal:true,
            name:"",
            password:"",
        };
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
    <Text style={styles.tip}>请输入您的邮箱和密码。</Text>
      <View
        style={styles.inputBox}>
        <Image source={require('../assets/icon_account.png')} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder='user@example.com'
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({name:text})}/>
      </View>

      <View
        style={styles.inputBox}>
        <Image source={require('../assets/ic_my_photos.png')} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder='password'
          secureTextEntry={this.state.conceal}
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.setState({password:text})}/>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={this.regist}
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
      <Toast ref="logininfo" position='top' opacity={0.6}/>
    </View>
    );
  }

  regist() {
    if ((this.state.name=="")){
      this.refs.logininfo.show("请填写邮箱")
    }else if(this.state.password==""){
      this.refs.logininfo.show("请填写密码")
    }
    else{
      this.refs.logininfo.show("登录成功")
    }
  }
}


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
