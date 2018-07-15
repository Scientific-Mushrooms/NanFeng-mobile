import React, { Component } from 'react';
import {
  StyleSheet,
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import {TabNavigator,TabBarBottom} from 'react-navigation';  
import Confess from './tabPages/confess';
import Course from './tabPages/course';
import School from './tabPages/school';
import TabBarItem  from '../components/TabBarItem'
import {notFirst} from '../redux/action';

//自定义一个底部导航器
//导航器包含三个页面
const Tab = TabNavigator(  
  {  
    Confess:{  
      screen:Confess,  
      navigationOptions:({navigation}) => ({  
      tabBarLabel:'南大助手',  
      tabBarIcon:({focused,tintColor}) => (  
        <TabBarItem  
          tintColor={tintColor}  
          focused={focused}  
          normalImage={require('../assets/confessTab.png')}  
          selectedImage={require('../assets/confessTab.png')}  
        />  
      )  
    }),  
    },  

    Course:{  
      screen:Course,  
      navigationOptions:({navigation}) => ({  
        tabBarLabel:'南大课程',  
        tabBarIcon:({focused,tintColor}) => (  
          <TabBarItem  
            tintColor={tintColor}  
            focused={focused}  
            normalImage={require('../assets/courseTab.png')}  
            selectedImage={require('../assets/courseTab.png')}  
          />  
        )  
      }),  
    },

    School:{  
      screen:School,  
      navigationOptions:({navigation}) => ({  
        tabBarLabel:'南大生活',  
        tabBarIcon:({focused,tintColor}) => (  
          <TabBarItem  
            tintColor={tintColor}  
            focused={focused}  
            normalImage={require('../assets/schoolTab.png')}  
            selectedImage={require('../assets/schoolTab.png')}  
          />  
        )  
      }),  
    },  
    
  
  },{ 
      tabBarComponent:TabBarBottom,  
      tabBarPosition:'bottom',  
      swipeEnabled:true,  
      animationEnabled:false,  
      lazy:true,  
      showIcon:true,
      tabBarOptions:{  
        activeTintColor:'#585858',  
        inactiveTintColor:'#d2d2d2',  
        style:{backgroundColor:'#ffffff',},  
        labelStyle: {  
              fontSize: 10, 
          },  
      }  
    }  
  );  

const mapStateToProps = state => ({
  ifFirst: state.ifFirst
})

class BaseTab extends Component {

  static navigationOptions = {
    header: null,
  };

  componentWillMount(){
    this.props.dispatch(notFirst());
    //使用redux
  }

  render() {
    return (
      <Tab />
    );
  }
}

export default connect(mapStateToProps)(BaseTab);