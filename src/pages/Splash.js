import React, { Component } from 'react'
import { 
    ImageBackground,
    StyleSheet,
    AsyncStorage,
    Image
    } from 'react-native'

import {Dimensions,PixelRatio} from 'react-native';
import {createAnimatableComponent, View,} from 'react-native-animatable'
import { connect } from 'react-redux';

let {WIDTH,HEIGHT} = Dimensions.get("window");
//应用开启时的加载页面
class Splash extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            check:false,
        };*/
      }
      /*componentWillMount(){
        AsyncStorage.getItem("ifFirst")
        .then((result) => {
          if(result=="false"){
            this.setState({check:result})
          }
        })
      };*/

    static navigationOptions = {
        header: null,
      };

    componentDidMount() {
        const { navigation } = this.props
        this.timer = setTimeout(() => {
            //if(this.props.ifFirst.first)
                this.props.navigation.navigate('Swiper');
            //else
             //   this.props.navigation.replace('BaseTab');
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={styles.container}>  
            <ImageBackground
                style={{flex:1}}
                source={require('../assets/Splash.png')}
                resizeMode="cover">
                <View animation='fadeIn' delay={300} duration={1500} style={styles.center} useNativeDriver>
                <Image
                style={{flex:1,width:Dimensions.get('window').width*0.6,}}
                source={require('../assets/logo.png')}
                resizeMode="contain"/>
                </View>
            </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    ifFirst: state.ifFirst
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'column',
    },  
    center: {
        flex: 1,
        marginLeft: 18,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default connect(mapStateToProps)(Splash);