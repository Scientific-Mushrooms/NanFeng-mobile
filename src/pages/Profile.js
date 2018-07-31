import React, { Component } from 'react'
import { Image,View,StyleSheet,TouchableOpacity,Text,Dimensions,ImageBackground } from 'react-native'

export default class Profile extends Component {
  render() {
    return (
      <View style={{backgroundColor:'white'}}>
        <ImageBackground
                style={{height: 230, alignItems: 'center', backgroundColor: 'transparent',flexDirection:'row',justifyContent:'space-between'}}
                source={require('./src/resource/bg.png')}
                >
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.loginContainer}
                    >
                        <Image
                        style={{width: 100, height: 100,margin:20,}}
                        source={require('./src/resource/my_avatar.png')}
                        />
                    </TouchableOpacity>
                <View style={{margin:30}}>
                  <Text style={{color:'white',fontSize:30,}}>尚未登录</Text>
                  <Text style={{color:'white',}}>点击头像来登录</Text>
                </View>
        </ImageBackground>
        <View style={styles.cellContainer}>
                    <ProfileStaticCell
                        title="统计"
                        imageName={require('./src/resource/statistic.png')}
                        anima='fadeInLeft'
                    />
                    <ProfileStaticCell
                        title="排名"
                        imageName={require('./src/resource/ranking.png')}
                        anima='fadeInLeft'
                        delay={50}
                    />
                    <ProfileStaticCell
                        title="分享"
                        imageName={require('./src/resource/upload.png')}
                        anima='fadeInLeft'
                        delay={100}
                    />
                    <ProfileStaticCell
                        title="重置"
                        imageName={require('./src/resource/refresh.png')}
                        anima='fadeInLeft'
                        delay={150}
                    />
                </View>
      </View>
    );
  }
}

const ProfileStaticCell = ({
  title,
  imageName,
  style,
  onPress,
  anima,
  delay
}) => {
  return (
      <View animation={anima} delay={delay} useNativeDriver>
      <TouchableOpacity
          activeOpacity={0.75}
          style={styles.staticCell}
      >
          <Image style={{width: 30, height: 30, marginHorizontal: 15}} source={imageName}/>
          <View style={[styles.cellStyle, style || style]}>
              <Text style={{color: 'black',fontSize:16}}>{title}</Text>
              <Image style={{width: 30, height: 30}} source={require('./src/resource/ic_my_right.png')}/>
          </View>
      </TouchableOpacity>
      </View>
  )
}

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
    backgroundColor: '#FFFFFF'
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
    borderBottomWidth:1,
    borderColor: '#d9d9d9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
});
