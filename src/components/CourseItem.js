import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,} from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/ic_feed_like.png')} style={{marginLeft:5}}/>
                <View style={{margin:5}}>
                    <Text style={styles.title}>西方行政学说史</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.description}>06040300</Text>
                        <Text style={styles.description}>政府管理学院</Text>
                        <Text style={styles.description}>核心</Text>
                        <Text style={styles.description}>2.0</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      marginLeft:10,
      marginRight:10,
      marginTop:5,
      marginBottom:5,
      alignItems:'center',
      flexDirection:'row',
      elevation:5,
      borderRadius:10,
      borderWidth:1,
      backgroundColor: '#FFFFFF',
    },
    imageContainer: {
      width:100,
      height:100,
      borderRadius:5,
    },
    title:{
        color:'black',
        fontSize:23,
    },
    description:{
        fontSize:17,
        marginRight:5,
    },
});
  