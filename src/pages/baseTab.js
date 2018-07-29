import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import TabNavigator from 'react-native-tab-navigator'
import Confess from './tabPages/confess';
import Course from './tabPages/course';
import School from './tabPages/school';
import TabBarItem  from '../components/TabBarItem'
import {notFirst} from '../redux/action';

//自定义一个底部导航器
//导航器包含三个页面
/*const Tab = TabNavigator(  
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
      swipeEnabled:false,  
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
  );  */

const mapStateToProps = state => ({
  ifFirst: state.ifFirst
})

class BaseTab extends Component {
  constructor(props){
    super(props);
    this.state = {
        selectedTab:'Confess'
    }
  }

  static navigationOptions = {
    header: null,
  };

  componentWillMount(){
    this.props.dispatch(notFirst());
    //使用redux
  }

  render() {
    return (
    <TabNavigator tabBarStyle={{color:'white'}}>
      <TabNavigator.Item
        title='南大助手'
        renderIcon={() => <Image style={styles.icon} source={require('../assets/confessTab.png')} />}  
        renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/confessTabSelected.png')} />}
        onPress={()=>{this.setState({selectedTab:'Confess'})}}
        selected={this.state.selectedTab === 'Confess'}
        selectedTitleStyle={styles.selectedTabText}  
      >
        <Confess navigation={this.props.navigator} />
      </TabNavigator.Item>

      <TabNavigator.Item
        title='南大课程'
        renderIcon={() => <Image style={styles.icon} source={require('../assets/courseTab.png')} />}  
        renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/courseTabSelected.png')} />}
        onPress={()=>{this.setState({selectedTab:'Course'})}}
        selected={this.state.selectedTab === 'Course'}
        selectedTitleStyle={styles.selectedTabText}  
      >
        <Course navigation={this.props.navigation} />
      </TabNavigator.Item>

      <TabNavigator.Item
        title='南大生活'
        renderIcon={() => <Image style={styles.icon} source={require('../assets/schoolTab.png')} />}  
        renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/schoolTabSelected.png')} />}
        onPress={()=>{this.setState({selectedTab:'School'})}}
        selected={this.state.selectedTab === 'School'} 
        selectedTitleStyle={styles.selectedTabText}  
      >
        <School navigation={this.props.navigation} />
      </TabNavigator.Item>

    </TabNavigator>
    );
  }
}

const styles={
  icon:{
    width:25,
    height:25
  },
  selectedTabText:{
    color:'Black'
  },
}

export default connect(mapStateToProps)(BaseTab);