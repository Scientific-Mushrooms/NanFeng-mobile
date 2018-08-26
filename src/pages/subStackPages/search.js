import React, { Component } from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import BaseComponent from '../../components/BaseComponent'

class Search extends BaseComponent{
    constructor(props) {
        super(props);
        this.state = {
            courseData:[]
        };
    }

    static navigationOptions = {
        header: null,
    };

    handleText(str){//返回固定长度的中英文混合字符串
        var len = 0;  
        var result="";  
        for (var i=0; i<str.length; i++) {    
            if (str.charCodeAt(i)>127 || str.charCodeAt(i)==94) {    
                 len += 2;    
             } else {    
                 len +=0.8;    
             }
            if(len>=25) 
                return  result+="..."  
            result+=str.charAt(i)
         }    
        return result;   
    }

    render(){
        const {goBack} = this.props.navigation;

        return(
            <View  style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>
                <SearchHeader
                style={{height:Dimensions.get("window").height}}
                ref = {(searchHeader) => {
                    this.searchHeader = searchHeader;
                }}
                topOffset={0}
                visibleInitially={true}
                //persistent={true}
                onHide={()=>{goBack()}}
                onClear = {() => {
                    console.log(`Clearing input!`);
                }}
                onGetAutocompletions = {async (text) => {
                    if(text!=""){
                        var _result=[]
                        var form = new FormData();
                        form.append('name', text);
                        await (this.post('/api/course/autoComplete', form).then((result) => {
                            _result=result.detail
                            for(var i=0;i<_result.length;i++)
                                _result[i]=this.handleText(_result[i])
                        }))
                        if(_result==[])
                            _result=["未找到结果"]
                        return _result
                    }else{
                        return []
                    }
                }}
                />
            </View>
        );
    }

}


export default Search;