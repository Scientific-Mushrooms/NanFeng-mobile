import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity, 
  Dimensions,
  FlatList
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import {UltimateListView} from "react-native-ultimate-listview";
import ListItem from "../../components/ListItem"
import HorizonItem from "../../components/HorizontalListItem"

const { width, height } = Dimensions.get('window')
class School extends Component {

  constructor(props) {
    super(props)
    navigation=this.props.navigation
    renderHorizonList=this.renderHorizonList.bind(this)
    this.state = {
      layout: 'grid',
      horizonData:[],
      gridData:[],
      refreshing: false,
    }
  }


  componentWillMount() {
    //防止卡死的多次请求，故性能可能会有点差
    //待优化
    fetch('http://118.25.56.186/data/', {
        method: 'GET',
        headers: {
              'Content-Type': 'application/json'
        }
        }).then((response) => response.json())
        .then((response) => {
            var json = response;
            this.state.horizonData=json;
        })
        .catch((error) => {
            if (error) {
                console.log('error', error);
            }
        });
  }

  onFetch_Horizon=()=>{
    fetch('http://118.25.56.186/data', {
      method: 'GET',
      headers: {
            'Content-Type': 'application/json'
      }
      }).then((response) => response.json())
      .then((response) => {
          var json = response;
          this.state.horizonData=json;
      })
      .catch((error) => {
          if (error) {
              console.log('error', error);
          }
      });
  }


  onFetch = async(page = 1, startFetch, abortFetch) => {
    fetch('http://118.25.56.186/data', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
        }).then((response) => response.json())
        .then((response) => {
          let pageLimit = 40;
          var json = response;
          this.setState({
            gridData: json,
          });
          let rowData =this.state.gridData
          startFetch(rowData, pageLimit);
        })
        .catch((error) => {
          if (error) {
            abortFetch();
            console.log('error', error);
          }
      });   
  };

  handlePress(){
    navigation.navigate("ScrollView")
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={styles.header}>
          <View style={styles.left}>
            <TouchableOpacity onPress={this.props.openDrawer}>
              <Image source={require("../../assets/profile.png")} style={styles.icon}/>
            </TouchableOpacity>
          </View>
          <View style={styles.center}>
            <Text style={{color: '#585858', fontSize: 20}}>南大校园</Text>
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
          numColumns={2} //to use grid layout, simply set gridColumn > 1

          //----Extra Config----
          header={this.renderHeaderView}
          //paginationFetchingView={this.renderPaginationFetchingView}           
          //paginationFetchingView={this.renderPaginationFetchingView}
          //paginationAllLoadedView={this.renderPaginationAllLoadedView}
          //paginationWaitingView={this.renderPaginationWaitingView}
          emptyView={this.renderEmptyView}
             //separator={this.renderSeparatorView}
          />
          <View style={styles.absolute}>
            <TouchableOpacity onPress={()=>navigate('Edit')} activeOpacity={0.5} style={styles.button}>
              <Image 
              style={{width:20,height:20,marginRight:10}} 
              source={require("../../assets/img_add.png")}/>
              <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>写见闻</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

  renderHeaderView() {
    return(
      <View>
        <Text style={styles.title}>自习 研讨 组队</Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.imgButton}>
            <ImageBackground style={styles.imageContainer} resizeMode="contain" source={require('../../assets/鼓楼.png')}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imgButton}>
            <ImageBackground style={styles.imageContainer} resizeMode="contain" source={require('../../assets/仙林.png')}>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>最近的校园活动</Text>
        {renderHorizonList()}
        <Text style={styles.title}>TA的校园见闻</Text>
      </View>
    )
  }

  renderItem = (item, index, separator) => {
    return(
      <ListItem 
      onPress={this.handlePress}
      like={index} 
      com={index-1} 
      text={item.content} 
      kind="美景"/>
    );
  };

  renderHorizonItem({item}){
    return(
      <HorizonItem/>
    );
  };

  renderEmptyView() {
    return(
      <ImageBackground source={require("../../assets/blank.png")}/>
    )
  }

  renderHorizonList(){
    return(
      <View>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderHorizonItem} 
        onRefresh={this.onFetch_Horizon} 
        refreshing={this.state.refreshing}
        data={this.state.horizonData} 
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    button:{
      elevation:3,
      opacity:0.8,
      flexDirection:'row',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius:15,
      backgroundColor:'white',
      padding:10,
    },
    absolute:{
      position: 'absolute',
      bottom:10,
      width:Dimensions.get('window').width,
      justifyContent:'center',
      alignItems: 'center',
    },
    imgButton:{
      margin:10,
      backgroundColor:"white"
    },
    title:{
      color:'black',
      fontWeight:'bold',
      fontSize:20,
      margin:10,
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
    imageContainer: {
      flex: 1,
      width:Dimensions.get('window').width/2-20,
      height:(Dimensions.get('window').width/2-20)/4*3,
      borderRadius:5,
      alignItems:'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: '#FFF',
    },

    //header
    header: {
      flexDirection: 'row',
      height: Dimensions.get('window').height/14,
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
      width:Dimensions.get('window').height/24,
      height:Dimensions.get('window').height/24
    },
  });

export default School;