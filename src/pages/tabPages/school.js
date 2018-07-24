import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity, 
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import {UltimateListView} from "react-native-ultimate-listview";

const { width, height } = Dimensions.get('window')
class School extends Component {

  constructor(props) {
    super(props)
    this.state = {
      layout: 'grid',
      data:[]
    }
  }

  sleep = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

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
            data: json,
          });
          let rowData =this.state.data
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
    <TouchableOpacity>
        <View style={{ margin: 0.5, width: width / 2, paddingBottom: 15 }}>
          <Text >ID: {index}</Text>
          <Text>{item.author.name}</Text>
        </View>
    </TouchableOpacity>
    );
  };

  onPress = (index, item) => {
      Alert.alert(index, `You're pressing on ${item}`);
  };

  render() {
    return (
      <UltimateListView
          ref={(ref) => this.listView = ref}             
          onFetch={this.onFetch} 
          refreshableMode="basic" //basic or advanced
          item={this.renderItem}  //this takes two params (item, index)
          numColumns={2} //to use grid layout, simply set gridColumn > 1

             //----Extra Config----
             //header={this.renderHeaderView}
             //paginationFetchingView={this.renderPaginationFetchingView}           
             //paginationFetchingView={this.renderPaginationFetchingView}
             //paginationAllLoadedView={this.renderPaginationAllLoadedView}
             //paginationWaitingView={this.renderPaginationWaitingView}
             //emptyView={this.renderEmptyView}
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