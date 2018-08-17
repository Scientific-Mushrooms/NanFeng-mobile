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
        this.regist=this.regist.bind(this);
        this.state = {
            conceal:true,
            name:"",
            password:"",
            show_or_hide:'show',
        };
  }

  static navigationOptions = {
    headerStyle:{backgroundColor:'white'},
    headerTintColor:'#61135B',
  };

  _conceal(){
    if(this.state.conceal){
      this.setState({show_or_hide:'hide'});
    }else{
      this.setState({show_or_hide:'show'});
    }
    this.setState({conceal:!this.state.conceal});
  }

  render() {
    return (
    <View style={styles.container}>
    <Text style={styles.welcome}>欢迎注册南风！</Text>
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
          <TouchableOpacity
          style={{marginRight:10}}
          onPress={this._conceal.bind(this)}
          activeOpacity={0.75}>
          <Text style={{borderLeftWidth:1,paddingLeft:5,borderColor:'#AAAAAA',}}>
          {this.state.show_or_hide}</Text>
          </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={this.regist}
        activeOpacity={0.75}>
        <Text
          style={styles.btText}>注册</Text>
      </TouchableOpacity>
      <View style={styles.texts}>
        <Text style={styles.add_line}>                             </Text>
        <Text>使用社交账号登录</Text>
        <Text style={styles.add_line}>                             </Text>
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
    <Toast ref="logininfo" position='top' opacity={0.6}/>
    <View style={styles.texts}>
      <Text style={styles.text3}>已拥有账号？ </Text>
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
        <Text style={styles.other}>登录</Text>
      </TouchableOpacity>
    </View>
    </View>
    );
  }

  regist() {
    if ((this.state.name=="")||(this.state.password=="")){
        this.refs.logininfo.show("请将信息填写完整")
    }else{
      fetch('http://118.25.56.186/signup', {
        method: 'POST',
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({
              name:this.state.name,
              password:this.state.password,
              repassword:this.state.password,
              avatar:this.state.avatarid
              })
        }).then((response) => response.json())
        .then((jsonData) => {
            let loginreturn = jsonData.status;
            let description = jsonData.description;
            if (loginreturn=="fail"){
              if (description=="username has been used")
                this.refs.logininfo.show("此邮箱已被注册");
            }
            else{
              AsyncStorage.clear();
              AsyncStorage.setItem('ifFirst',"false"); 
              AsyncStorage.setItem('user',this.state.name); 
              AsyncStorage.setItem('logined',"true");
              this.refs.logininfo.show("注册成功");
              this.timer = setTimeout(() => {
                this.props.navigation.replace('Home');
              }, 1000)
            }
        })
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
    marginBottom:30,
  },
  welcome:{
    fontSize:30,
    marginBottom:30,
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
    width: 195,
    height: 40,
    fontSize:15,
    color: '#686868',
  },
  icons:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:280,
    marginBottom:30,
  },
  icon:{
    width:20,
    height:20,
    marginLeft:17,
  },
  input_pw: {
    width: 180,
    height: 40,
    color: '#686868',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 30,
    opacity:0.9,
    borderWidth:1,
    borderColor:'#CCCCCC',
  },
  button: {
    height: 50,
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#61135B',    
    marginBottom: 30,
    opacity:0.9,
  },
  btText: {
    color: 'white',
    fontSize:17,
  },
});
