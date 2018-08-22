import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,Dimensions} from 'react-native';

export default class CourseItem extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={this.props.img} style={{marginLeft:5}}/>
                <View style={{margin:5}}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginRight:15,alignItems:'center'}}>
                            <Text style={styles.description2}>编号</Text>
                            <Text style={styles.description}>{this.props.id}</Text>
                        </View>
                        <View style={{marginRight:15,alignItems:'center'}}>
                            <Text style={styles.description2}>授课学院</Text>
                            <Text style={styles.description}>{this.props.faculty}</Text>
                        </View>
                        <View style={{marginRight:15,alignItems:'center'}}>
                            <Text style={styles.description2}>类型</Text>
                            <Text style={styles.description}>{this.props.type}</Text>
                        </View>
                        <View style={{marginRight:15,alignItems:'center'}}>
                            <Text style={styles.description2}>学分</Text>
                            <Text style={styles.description}>{this.props.credit}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        elevation:3,
        marginVertical:5,
        marginHorizontal:4,
        width:Dimensions.get('window').width-8,
        borderRadius:5,
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
    },
    description2:{
        fontSize:17,
        color:'#268BD2',
    },
});
  