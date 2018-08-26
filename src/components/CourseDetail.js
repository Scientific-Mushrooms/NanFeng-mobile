import React, { Component } from 'react';
import { 
    Dimensions,
    Image,
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    } from 'react-native';
import BaseComponent from '../components/BaseComponent'

export default class CourseDetail extends BaseComponent{
      constructor(props) {
        super(props);
        //xxx_bool是三项在已有评论区的boolean
        //xxx是三项在创建区的boolean
        this.state = {
            course:{"name":""},
            enjoy_bool:true,
            easy_bool:true,
            useful_bool:true,
            loading: true,
            courseId: "Course ID",
            userId: "User ID",
            comment: null,
            useful:false,
            easy:false,
            enjoy:false,
            useful_tcNum:10000,
            useful_uNum:10000,
            easy_tcNum:1233,
            easy_uNum:900,
            enjoy_tcNum:100,
            enjoy_uNum:40,
            commentAuthors: null,
            courseComments: null,
        };
    }

    
    static navigationOptions = {
        headerTitle:
        <View style={{flex: 1,flexDirection: 'column',alignItems: 'center'}}>
            <Text style={{color: 'black',fontSize:20}}>课程详情</Text>
        </View>,
        headerRight:
          <View style={{flex: 1}}/>
    };

    fetchCourseComments = () => {

        let form = new FormData();
        form.append('courseId', this.state.courseId);

        this.post('/api/courseComment/courseIdToCourseComments', form).then((result) => {
            if (result.status === 'success') {
                this.setState({ courseComments: result.detail, commentAuthors: result.more })
            }
        })
    }

    componentWillMount(){
        const courseId=this.props.navigation.state.params.courseId
        let form = new FormData();
        form.append("courseId", courseId);
        this.post('/api/course/courseIdToCourse', form).then((result) => {
            this.setState({ course: result.detail, loading: false, courseComments: result.more })
        })
        this.fetchCourseComments();
    }
    
    render(){
        return(
            <ScrollView style={{backgroundColor:'#EEEEEE'}}>
                <View style={styles.subContainer}>
                    <View style={{alignItems:'center',margin:10}}>
                        <Image source={this.props.course_img} style={{width:120,height:120}}/>
                        <Text style={styles.title}>{this.state.course.name}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <View style={{marginRight:15}}>
                            <Text style={styles.description2}>编号：</Text>
                            <Text style={styles.description2}>授课学院：</Text>
                            <Text style={styles.description2}>类型：</Text>
                            <Text style={styles.description2}>学分：</Text>
                        </View>
                        <View style={{marginRight:15}}>
                            <Text style={styles.description}>{this.state.course.code}</Text>
                            <Text style={styles.description}>{this.state.course.faculty}</Text>
                            <Text style={styles.description}>{this.state.course.type}</Text>
                            <Text style={styles.description}>{this.state.course.credit}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.subContainer}>
                    <Text style={{marginLeft:15,marginTop:10,color:'black',fontSize:23}}>课程简介</Text>
                    <Text style={{marginLeft:15,marginTop:5,marginBottom:10,fontSize:18}}>{this.state.course.introduction}</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text style={{marginLeft:15,marginTop:10,marginBottom:10,color:'black',fontSize:23}}>课程评价</Text>
                    {this.renderRating("实用度", this.state.useful_tcNum * 100, this.state.useful_uNum * 100)}
                    {this.renderRating("难易度", this.state.easy_tcNum * 100, this.state.easy_uNum * 100)}
                    {this.renderRating("推荐度", this.state.enjoy_tcNum * 100, this.state.enjoy_uNum * 100)}
                </View>
                <View style={styles.subContainer}>
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
                <View style={styles.subContainer}>
                    {this.renderComments()}
                </View>
                <View style={styles.subContainer}>
                    <TextInput multiline={true} placeholder={'写下你的评论....'} style={{margin:12,borderRadius:10,backgroundColor:'white'}}/>
                    <View style={{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width}}>
                        {this.chooseBottom('实用',this.state.useful)}
                        {this.chooseBottom('简单',this.state.easy)}
                        {this.chooseBottom('推荐',this.state.enjoy)}
                    </View>
                    <TouchableOpacity
                    style={{backgroundColor:'#6A005F',margin:10,borderRadius:20,alignItems:'center',justifyContent:'center'}}
                    activeOpacity={0.75}>
                        <Text style={{color:'white',margin:5,fontSize:22}}>发表</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    courseCommentsToList = (comment, index) => {
        var {avatarId, nickName} = this.state.commentAuthors[index];
        return (
            <View>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10,marginLeft:10,marginRight:10,borderBottomWidth:1,borderColor:'#AAAAAA'}}>
                    <Image source={this.getImagePath(avatarId)} style={{width:50,height:50}}/>
                    <View style={{marginLeft:10}}>
                        <Text style={{fontSize:18,color:'black'}}>{nickName}</Text>
                        <Text style={{fontsize:14}}>{moment(comment.date).fromNow()}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:5}}>
                    {this.tag('实用',this.state.useful_bool)}
                    {this.tag('简单',this.state.easy_bool)}
                    {this.tag('推荐',this.state.enjoy_bool)}
                </View>
                <Text style={{margin:15,fontSize:16,color:'black'}}>{comment.comment}</Text>
            </View>
        )
    }

    tag = (title,bool) => {
        if(bool){
            return(
                <Text style={{color:'white',textAlign:'center',backgroundColor:'#AD7FB0',borderRadius:10,margin:2,fontSize:14,width:50}}>{title}</Text>
            )
        }
    }

    renderComments = () => {
        if (this.state.courseComments !== null ) {
            return (
                <View>
                    {this.state.courseComments.map(this.courseCommentsToList)}
                </View>
            )
        }
    }

    renderRating = (title, total, positive) => {
        var num = (positive / total).toFixed(2) * 100;
        var Progress = require('react-native-progress');
        if (total === 0) {
            positive = 100;
            total = 100;
            num = 100
        }
        positive = 100 * positive / total;
        return (
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginBottom:10}}>
                <Text style={{fontSize:16,marginRight:5,color:'black'}}>{title}</Text>
                <Progress.Bar progress={num/100.0} width={150} height={17} color={num<50 ? '#CCCCCC':'#7A4F90'} borderColor={'#CCCCCC'}/>
                <Text style={{fontSize:16,marginRight:5,marginLeft:10,color:'black'}}>{num} %</Text>
                <Text style={{fontSize:16,marginRight:5,color:'black'}}>{total/100}个评分</Text>
            </View>
        );
    }

    chooseBottom = (title,bool) =>{
        return(
            <View style={{flexDirection:'row',margin:5,alignItems:'center'}}>
                <TouchableOpacity
                style={bool ? styles.leftButton : styles.defaultButton}
                onPress={()=>{
                    if (title=='实用'){
                        this.setState({useful:!this.state.useful})
                    }else if(title=='简单'){
                        this.setState({easy:!this.state.easy})
                    }else {
                        this.setState({enjoy:!this.state.enjoy})
                    }
                }}
                activeOpacity={0.75}>
                    <Text style={bool ? styles.buttonText : styles.buttonText2}>{title}</Text>
                </TouchableOpacity>
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
      backgroundColor: 'white',
    },
    subContainer:{
        borderRadius:10,
        margin:2,
        elevation:5,
        backgroundColor:'white'
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
    buttonText:{
        fontSize:14,
        margin:3,
        color:'#6A005F',
    },
    buttonText2:{
        fontSize:14,
        margin:3,
        color:'#CCCCCC',
    },
    leftButton:{
        borderWidth:1,
        borderColor:'#6A005F',
        width:50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    
    defaultButton: {
        borderWidth:1,
        borderColor:'#CCCCCC',
        width: 50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    score:{
        margin:5,
        fontSize:17,
        color:'black',
    },
});
