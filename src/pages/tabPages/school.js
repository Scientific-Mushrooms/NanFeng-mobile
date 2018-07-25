import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ImageBackground,
  TouchableOpacity, 
  Dimensions,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import {UltimateListView} from "react-native-ultimate-listview";
import ListItem from "../../components/ListItem"
import HorizonItem from "../../components/HorizontalListItem"

const { width, height } = Dimensions.get('window')
class School extends Component {

  constructor(props) {
    super(props)
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

  renderItem = (item, index, separator) => {
    return(
      <ListItem 
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
        renderItem={this.renderHorizonItem} 
        onRefresh={this.onFetch_Horizon} 
        refreshing={this.state.refreshing}
        data={this.state.horizonData} 
      />
      </View>
    );
  }

  renderHeaderView() {
    return(
      <View>
        <Text style={styles.title}>最近的校园活动</Text>
          {renderHorizonList()}
        <Text style={styles.title}>TA的校园见闻</Text>
      </View>
    )
  }

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
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
  });

export default School;