import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import SearchHeader from 'react-native-search-header';

class Search extends Component{

    static navigationOptions = {
        header: null,
    };


    render(){
        const {goBack} = this.props.navigation;

        return(
            <View  style={{flex: 1, backgroundColor: 'rgb(240,240,240)'}}>
                <SearchHeader
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
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
                />
            </View>
        );
    }

}


export default Search;