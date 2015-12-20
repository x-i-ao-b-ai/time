/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
	AppRegistry,
	Navigator,
	StyleSheet,
	Text,
	View,
	ToolbarAndroid,
	ToastAndroid,
	BackAndroid,
	Platform,
} = React;

var TimerMixin = require('react-timer-mixin');
var LoadScreen = require('./app/ui/LoadScreen');
var Main = require('./app/ui/Main');
var Login = require('./app/ui/Login');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', function() {
	if (_navigator && _navigator.getCurrentRoutes().length > 1) {
		_navigator.pop();
		return true;
	}
	return false;
});

var time = React.createClass({
	mixins: [TimerMixin],
	componentDidMount: function() {

	},
	RouteMapper: function(route, navigationOperations, onComponentRef) {
		_navigator = navigationOperations;
		switch (route.name) {
			case 'home':
				return (
					<Main navigator={navigationOperations}/>
				);
				break;
			case 'login':
				return (
					<Login style={{flex: 1}}  navigator={navigationOperations}
		              story={route.login} />
				);
				break;
			case 'load':
				return (
					<LoadScreen style={{flex: 1}}  navigator={navigationOperations}
			              story={route.load}/>
				);
				break;
			default:
				return (
					<LoadScreen style={{flex: 1}}  navigator={navigationOperations}
			              story={route.load}/>
				);
				break;
		}
	},
	getInitialState: function() {
		return {
			loaded: false,
		};
	},
	render: function() {
		var initialRoute = {
			name: 'load'
		};
		return (
			<Navigator
	          style={styles.container}
	          initialRoute={initialRoute}
	          configureScene={() => Navigator.SceneConfigs.FadeAndroid}
	          renderScene={this.RouteMapper}/>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
});

console.log(Platform)

AppRegistry.registerComponent('time', () => time);