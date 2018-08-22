import React, { Component } from 'react';
import { 
    Image,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    } from 'react-native';


export default class CourseDetail extends Component{

    render(){
        return(
            <ScrollView>
                <View style={{borderRadius:10,margin:2,elevation:5}}>
                    <View style={{alignItems:'center',margin:10}}>
                        <Image source={this.props.course_img} style={{width:120,height:120}}/>
                        <Text style={styles.title}>{this.props.course_name}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <View style={{marginRight:15}}>
                            <Text style={styles.description2}>编号：</Text>
                            <Text style={styles.description2}>授课学院：</Text>
                            <Text style={styles.description2}>类型：</Text>
                            <Text style={styles.description2}>学分：</Text>
                        </View>
                        <View style={{marginRight:15}}>
                            <Text style={styles.description}>{this.props.id}</Text>
                            <Text style={styles.description}>{this.props.college}</Text>
                            <Text style={styles.description}>{this.props.course_type}</Text>
                            <Text style={styles.description}>{this.props.credit}</Text>
                        </View>
                    </View>
                </View>
                <View style={{borderRadius:10,margin:2,elevation:5}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'black',fontSize:23}}>课程简介</Text>
                    <Text style={{marginLeft:15,marginTop:5,marginBottom:10,fontSize:18}}>{this.props.introduction}</Text>
                </View>
                <View style={{borderRadius:10,margin:2,elevation:5}}>
                    <Text style={{marginLeft:15,marginTop:10,color:'black',fontSize:23}}>课程评价</Text>
                    <View style={{marginLeft:15,marginTop:5,marginBottom:5,flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.score}>有用？</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Image source={require('../assets/ic_feed_like.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                        <Text style={styles.score}>{this.props.score1}</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Image source={require('../assets/ic_feed_dislike.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:15,marginTop:5,marginBottom:5,flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.score}>简单？</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Image source={require('../assets/ic_feed_like.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                        <Text style={styles.score}>{this.props.score2}</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Image source={require('../assets/ic_feed_dislike.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft:15,marginTop:5,marginBottom:10,flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.score}>享受？</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Image source={require('../assets/ic_feed_like.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                        <Text style={styles.score}>{this.props.score3}</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Image source={require('../assets/ic_feed_dislike.png')} style={{width:30,height:30}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{borderRadius:10,margin:2,elevation:5}}>
                    <View style={{marginLeft:15,marginTop:5,marginBottom:10}}>
                        <Text style={{marginTop:10,color:'black',fontSize:23}}>教师</Text>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginBottom:10}}>
                            <Image style={{width:50,height:50}} source={this.props.user_img} />
                            <View>
                                <Text style={{marginLeft:5,color:'black',fontSize:23,}}>{this.props.username}</Text>
                                <Text style={{marginLeft:5,fontSize:17}}>{this.props.teacher_college}</Text>
                            </View>
                        </View>
                        <Text style={styles.description2}>同时教授</Text>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Text style={{margin:5,fontSize:20,color:'#268BD2'}}>{this.props.extra1}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}>
                            <Text style={{margin:5,fontSize:20,color:'#268BD2'}}>{this.props.extra2}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        margin:10,
        color:'black',
        fontSize:23,
    },
    description:{
        margin:5,
        fontSize:20,
        color:'black',
    },
    description2:{
        margin:5,
        fontSize:20,
    },
    score:{
        margin:5,
        fontSize:17,
        color:'black',
    },
});