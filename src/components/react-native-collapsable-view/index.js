import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	Animated
} from 'react-native'

const ICONS = {
	up: require('./lib/images/arrow-up.png'),
	down: require('./lib/images/arrow-down.png')
}

export default class extends Component {
	static propTypes = {
		expanded: PropTypes.bool,
		title: PropTypes.string,
	}

	constructor (props) {
	  super(props)

	  this.state = {
	  	expanded: props.expanded,
			animation: new Animated.Value(),
			maxHeight:"",
			minHeight:"",
	  }
	}

	toggle = () => {
		const { expanded, maxHeight, minHeight, animation } = this.state
		const initialValue = expanded ? minHeight + maxHeight : minHeight
		const finalValue = expanded ? minHeight : minHeight + maxHeight

		this.setState({expanded: !expanded})
		animation.setValue(initialValue)

		Animated.timing(animation, {
			toValue: finalValue
		}).start()
	}

	render () {
		const { expanded, animation, maxHeight } = this.state
		const icon = expanded ? 'up' : 'down'

		return (
			<Animated.View style={[styles.container, {height: animation}]}>
				
			<TouchableHighlight
					onPress={this.toggle}
					style={styles.button}
					underlayColor="#f1f1f1">
					<View  style={styles.titleContainer}
						onLayout={event => this.setState({minHeight: event.nativeEvent.layout.height})}>
						<Text style={styles.title}>{this.props.title}</Text>
						<Image style={styles.buttonImage} source={ICONS[icon]} />
					</View>
				</TouchableHighlight>
				{/*fixed bug in recent version of react-native that maxHeight will be changed when body is collapsed*/}
				<View style={styles.body}
					onLayout={event => this.setState({maxHeight: event.nativeEvent.layout.height})}>
					{this.props.children}
				</View>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fff', 
    overflow:'hidden' 
  }, 
  titleContainer: { 
		flexDirection: 'row' ,
		alignItems:'center',
		justifyContent:'center'
  }, 
	title: { 
		marginLeft:15,
		marginTop:10,
		marginBottom:10,
		color:'black',
		fontSize:23
  }, 
  button: {
  	justifyContent: 'flex-start',
  	alignItems: 'flex-start'
  }, 
  buttonImage: { 
    width: 25, 
    height: 20 
  }, 
  body: { 
    padding: 10, 
    paddingTop: 0 
  }
});