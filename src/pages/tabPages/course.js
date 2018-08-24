import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import BaseComponent from "../../components/BaseComponent"
import CourseItem from '../../components/CourseItem'
import {UltimateListView} from "react-native-ultimate-listview";

class Course extends BaseComponent {
  constructor(props) {
    super(props)
    navigation=this.props.navigation
    this.state = {
      name:"",
      campus:"",
      faculty:"",
      type:"",
      layout: 'grid',
      courses:[],
      refreshing: false,
      page:Math.floor(Math.random()*100),
      size:10,
    }
  }

  onFetch = async(page = 1, startFetch, abortFetch) => {
    let form = new FormData();
    form.append('name', this.state.name);
    form.append('campus', this.state.campus);
    form.append('faculty', this.state.faculty);
    form.append('type', this.state.type);
    form.append('page', this.state.page);
    form.append('size', this.state.size);
    var successAction = (result) => {
        this.setState({ courses: result.detail.content})
    }
    this.newPost('/api/course/search', form, successAction); 
    this.state.page++;
    startFetch(this.state.courses,10);
  };

  renderItem = (item, index, separator) => {
    return(
      <CourseItem
      name={item.name}
      code={item.code} 
      faculty={item.faculty} 
      type={item.type} 
      credit={item.credit}/>
    );
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.header}>
          <View style={styles.left}>
            <TouchableOpacity onPress={this.props.openDrawer}>
              <Image source={require("../../assets/profile.png")} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <Text style={{color: '#585858', fontSize: 20}}>课程列表</Text>
          </View>
          <View style={styles.right}>
            <TouchableOpacity onPress={()=>{navigate('Search', { transition: 'forVertical' });}}>
              <Image source={require("../../assets/ic_search.png")} style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </View>
        <UltimateListView
          ref={(ref) => this.listView = ref}             
          onFetch={this.onFetch} 
          refreshableMode="basic" //basic or advanced
          item={this.renderItem}  //this takes two params (item, index)
          numColumns={1} //to use grid layout, simply set gridColumn > 1

          //----Extra Config----
          //header={this.renderHeaderView}
          //paginationFetchingView={this.renderPaginationFetchingView}           
          //paginationFetchingView={this.renderPaginationFetchingView}
          //paginationAllLoadedView={this.renderPaginationAllLoadedView}
          //paginationWaitingView={this.renderPaginationWaitingView}
          //emptyView={this.renderEmptyView}
          //separator={this.renderSeparatorView}
          />
      </View>
    );
  }
}

const mapStateToProps = state => ({
    counter: state.counter
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    //头部
    header: {
      flexDirection: 'row',
      height: Dimensions.get('window').height/13,
      borderBottomWidth:2,
      borderColor:'rgb(230,230,230)',
      backgroundColor:'rgb(248,248,248)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    left:{
      flex:1,
    },
    right:{
      flex:1,
      flexDirection: 'row-reverse',
    },
    icon:{
      marginLeft:15,
      marginRight:15,
      width:Dimensions.get('window').height/22,
      height:Dimensions.get('window').height/22
    },
  });

export default connect(mapStateToProps)(Course);