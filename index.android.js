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
var LoginStep1 = require('./app/ui/LoginStep1');
var LoginStep2 = require('./app/ui/LoginStep2');

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
			case 'main':
				return (
					<Main navigator={navigationOperations}/>
				);
				break;
			case 'loginStep1':
				return (
					<LoginStep1 style={{flex: 1}} navigator={navigationOperations}
		        			story={route.login} />
				);
				break;
			case 'loginStep2':
				return (
					<LoginStep2 style={{flex: 1}}  navigator={navigationOperations}
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

AppRegistry.registerComponent('time', () => time);