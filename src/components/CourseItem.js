import React, {Component} from 'react';
import {StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';

const lite=['全部','文学院', '历史学院', '法学院', '哲学系', '新闻传播学院', '政府管理学院', '信息管理学院', '社会学院', '商学院','外国语学院', '海外教育学院', '马克思主义学院', '大学外语教学部','*社会科学试验班', '*文科试验班（人文艺术传播类）'
]
const engi=['全部','现代工程与应用科学学院','电子科学与工程学院','工程管理学院','软件学院','*工科试验班'
]

export default class CourseItem extends Component{
    
    renderIcon(str){
        if(engi.indexOf(str)!=-1)
            return  <Image source={require('./src/engi.png')} style={styles.icon}/>
        else if (lite.indexOf(str)!=-1)
            return <Image source={require('./src/lite.png')} style={styles.icon}/>
        else 
            return <Image source={require('./src/sci.png')} style={styles.icon}/>
    }

    render(){
        return(
            <TouchableOpacity
            activeOpacity={0.75}
            onPress={this.props.onPress}>
                <View style={styles.container}>
                    <View style={{flexDirection:'row',marginLeft:20,marginTop:5,alignItems:'center'}}>
                        {this.renderIcon(this.props.faculty)}
                        <View>
                            <Text style={styles.title}>{this.props.name}</Text>
                            <Text style={{fontSize:16,color:'#666666'}}>{this.props.faculty}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',width:Dimensions.get('window').width}}>
                        <View style={{alignItems:'center',width:Dimensions.get('window').width/3}}>
                            <Text style={styles.description2}>课程编号</Text>
                            <Text style={styles.description}>{this.props.id}</Text>
                        </View>
                        <View style={{alignItems:'center',width:Dimensions.get('window').width/3}}>
                            <Text style={styles.description2}>类型</Text>
                            <Text style={styles.description}>{this.props.type}</Text>
                        </View>
                        <View style={{alignItems:'center',width:Dimensions.get('window').width/3}}>
                            <Text style={styles.description2}>学分</Text>
                            <Text style={styles.description}>{this.props.credit}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
        fontSize:18,
        color:'black',
    },
    description2:{
        fontSize:16,
        color:'#6A005F',
    },
    
    icon:{
        marginLeft:15,
        marginRight:15,
        width:Dimensions.get('window').height/15,
        height:Dimensions.get('window').height/15
      },
});
  