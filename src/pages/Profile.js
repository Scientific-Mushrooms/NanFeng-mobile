import React, { Component } from 'react'
import { Image,View,StyleSheet,TouchableOpacity,Text,Dimensions,ImageBackground } from 'react-native'
import { connect } from 'react-redux';
import Toast, {DURATION} from 'react-native-easy-toast'
import BaseComponent from '../components/BaseComponent'

class Profile extends BaseComponent {
  render() {
    if(this.props.identityReducer.user==null){
      return(
        <View style={{flex:1,backgroundColor:'#F7F7F7'}}>
          {this.renderUnLogin()}
        </View>
      )
    }
    else{
      return(
        <View style={{flex:1,backgroundColor:'#F7F7F7'}}>
          {this.renderLogin()}
        </View>
      )
    }
      
  }

  renderNick(){
    if(this.props.identityReducer.user.nickName==null)
      return "未设置昵称"
    else
      return this.props.identityReducer.user.nickName
  }

  renderLogin(){
    const user=this.props.identityReducer.user
    const {navigate}=this.props.navigation
    return(
      <View style={{flex:1,backgroundColor:'#F7F7F7'}}>
        <ImageBackground
        style={{height: 230, alignItems: 'center', backgroundColor: 'transparent',flexDirection:'row',}}
        source={require('../assets/bg.png')}
        >
          <TouchableOpacity
          activeOpacity={0.75}
          style={styles.loginContainer}
          >
            <Image
              style={{width: 90, height: 90,margin:20,}}
              source={require('../assets/my_avatar.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={{color:'white',fontSize:25,}}>{user.email}</Text>
            <Text style={{color:'white',}}>{this.renderNick()}</Text>
          </View>
        </ImageBackground>
        <View style={styles.cellContainer}>
          <ProfileStaticCell
            onPress={()=>this.refs.logininfo.show("请验证学号")}
            title="我的课堂"
            imageName={require('../assets/statistic.png')}
          />
          <ProfileStaticCell
            onPress={()=>navigate("EditUserProfile")}
            title="个人信息"
            imageName={require('../assets/ranking.png')}
          />
          <ProfileStaticCell
            title="查看帮助"
            imageName={require('../assets/refresh.png')}
          />
          <ProfileStaticCell
            title="分享"
            imageName={require('../assets/upload.png')}
            />
          </View>
          <Toast ref="logininfo" position='bottom' opacity={0.6}/>
      </View>
    )
  }

  renderUnLogin(){
    const {navigate}=this.props.navigation
    return(
      <View style={{flex:1,backgroundColor:'#F7F7F7'}}>
        <ImageBackground
        style={{height: 230, alignItems: 'center', backgroundColor: 'transparent',flexDirection:'row',}}
        source={require('../assets/bg.png')}
        >
          <TouchableOpacity
          onPress={()=>navigate("Login")}
          activeOpacity={0.75}
          style={styles.loginContainer}
          >
            <Image
              style={{width: 90, height: 90,margin:20,}}
              source={require('../assets/my_avatar.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={{color:'white',fontSize:25,}}>尚未登录</Text>
            <Text style={{color:'white',}}>点击头像来登录</Text>
          </View>
        </ImageBackground>
        <View style={styles.cellContainer}>
          <ProfileStaticCell
            onPress={()=>this.refs.logininfo.show("请先登录")}
            title="我的课堂"
            imageName={require('../assets/statistic.png')}
          />
          <ProfileStaticCell
            title="个人信息"
            imageName={require('../assets/ranking.png')}
          />
          <ProfileStaticCell
            title="查看帮助"
            imageName={require('../assets/refresh.png')}
          />
          <ProfileStaticCell
            title="分享"
            imageName={require('../assets/upload.png')}
            />
          </View>
          <Toast ref="logininfo" position='bottom' opacity={0.6}/>
      </View>
    )
  }
}

const ProfileStaticCell = ({
  title,
  imageName,
  style,
  onPress,
  delay
}) => {
  return (
    <View style={{marginTop:3}} delay={delay}>
      <TouchableOpacity
          activeOpacity={0.75}
          style={styles.staticCell}
          onPress={onPress}
      >
          <Image style={{width: 30, height: 30, marginHorizontal: 15}} source={imageName}/>
          <View style={[styles.cellStyle, style || style]}>
              <Text style={{color: 'black',fontSize:16}}>{title}</Text>
              <Image style={{width: 30, height: 30}} source={require('../assets/ic_my_right.png')}/>
          </View>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => ({
  identityReducer: state.identityReducer
})

export default connect(mapStateToProps)(Profile)

const styles = StyleSheet.create({
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginContainer: {
  },
  cellContainer: {
    borderColor: '#d9d9d9',
    marginTop: 15,
    backgroundColor: '#F7F7F7'
  },
  staticCell: {
    flexDirection: 'row',
    height: 46,
    marginTop:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    },
  cellStyle: {
    flex: 1,
    height: 46,
    paddingTop:15,
    paddingLeft:5,
    paddingBottom:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
});
