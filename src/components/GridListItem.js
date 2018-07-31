import React, { PureComponent } from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'


const { width, height } = Dimensions.get('window')
export default class GridListItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <TouchableOpacity onPress={() => this.props.onPress('GridView', rowID, rowData)}>
        <View style={{ margin: 0.5, width: width / 2, paddingBottom: 15 }}>
          <Text >ID: {rowID}</Text>
          <Text>{rowData}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles={
    gridText:{
    }
}