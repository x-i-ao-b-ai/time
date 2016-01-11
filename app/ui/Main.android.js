'use strict';

var React = require('react-native');
var {
	Image,
	StyleSheet,
	Text,
	View,
	DrawerLayoutAndroid,
	ToolbarAndroid,
	ToastAndroid,
	BackAndroid,
	TouchableOpacity,
	Dimensions,
	ListView,
	ToastAndroid,
	Platform,
} = React;

//var Drawer = require('react-native-drawer');
var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;
var GiftedMessenger = require('../modules/GiftedMessenger');

var toolbarActions = [{
	title: '搜索',
	icon: require('image!ic_search_white_24dp'),
	show: 'always'
}, {
	title: '团队共享',
	show: 'never'
}, {
	title: '添加成员',
	show: 'never'
}, {
	title: '设置',
	show: 'never'
}];

var Main = React.createClass({
	getInitialState: function() {
		return {}
	},
	_renderNavigationView: function() {
		return (
			<View style={{flex: 1, backgroundColor: '#25323B'}}>
			    <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>woqu</Text>
			</View>
		);
	},
	getMessages() {
		return [{
			text: 'Are you building a chat app?',
			name: 'React-Native',
			image: {
				uri: 'https://facebook.github.io/react/img/logo_og.png'
			},
			position: 'left',
			date: new Date(2015, 10, 16, 19, 0)
		}, {
			text: "Yes, and I use Gifted Messenger!",
			name: 'Developer',
			image: null,
			position: 'right',
			date: new Date(2015, 10, 17, 19, 0)
				// If needed, you can add others data (eg: userId, messageId)
		}, ];
	},

	handleSend(message = {}, rowID = null) {
		// Your logic here
		// Send message.text to your server

		// this._GiftedMessenger.setMessageStatus('Sent', rowID);
		// this._GiftedMessenger.setMessageStatus('Seen', rowID);
		// this._GiftedMessenger.setMessageStatus('Custom label status', rowID);
		this._GiftedMessenger.setMessageStatus('ErrorButton', rowID); // => In this case, you need also to set onErrorButtonPress
	},

	// @oldestMessage is the oldest message already added to the list
	onLoadEarlierMessages(oldestMessage = {}, callback = () => {}) {

		// Your logic here
		// Eg: Retrieve old messages from your server

		// newest messages have to be at the begining of the array
		var earlierMessages = [{
			text: 'This is a touchable phone number 0606060606 parsed by taskrabbit/react-native-parsed-text',
			name: 'Developer',
			image: null,
			position: 'right',
			date: new Date(2014, 0, 1, 20, 0),
		}, {
			text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. https://github.com/facebook/react-native',
			name: 'React-Native',
			image: {
				uri: 'https://facebook.github.io/react/img/logo_og.png'
			},
			position: 'left',
			date: new Date(2013, 0, 1, 12, 0),
		}, ];

		setTimeout(() => {
			callback(earlierMessages, false); // when second parameter is true, the "Load earlier messages" button will be hidden      
		}, 1000);
	},

	handleReceive(message = {}) {
		this._GiftedMessenger.appendMessage(message);
	},

	onErrorButtonPress(message = {}, rowID = null) {
		// Your logic here
		// Eg: Re-send the message to your server

		setTimeout(() => {
			// will set the message to a custom status 'Sent' (you can replace 'Sent' by what you want - it will be displayed under the row)
			this._GiftedMessenger.setMessageStatus('Sent', rowID);
			setTimeout(() => {
				// will set the message to a custom status 'Seen' (you can replace 'Seen' by what you want - it will be displayed under the row)
				this._GiftedMessenger.setMessageStatus('Seen', rowID);
				setTimeout(() => {
					// append an answer
					this.handleReceive({
						text: 'I saw your message',
						name: 'React-Native',
						image: {
							uri: 'https://facebook.github.io/react/img/logo_og.png'
						},
						position: 'left',
						date: new Date()
					});
				}, 500);
			}, 1000);
		}, 500);
	},

	// will be triggered when the Image of a row is touched
	onImagePress(rowData = {}, rowID = null) {
		// Your logic here
		// Eg: Navigate to the user profile
	},
	render: function() {
		//var title = this.state.theme ? this.state.theme.name : '首页';
		var title = "Time";
		return (
			<DrawerLayoutAndroid
			  ref={DRAWER_REF}
			  drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
			  keyboardDismissMode="on-drag"
			  drawerPosition={DrawerLayoutAndroid.positions.Left}
			  renderNavigationView={this._renderNavigationView}>
			  <View style={styles.container}>
			    <ToolbarAndroid
			      navIcon={require('image!logo_24dp')}
			      overflowIcon={require('image!ic_more_vert_white_24dp')}
			      title={title}
			      titleColor="#ffffff"
			      style={styles.toolbar}
			      actions={toolbarActions}
			      onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
			      onActionSelected={this.onActionSelected}/>
			    <GiftedMessenger
			        ref={(c) => this._GiftedMessenger = c}
			        styles={{
			            bubbleRight: {
			            marginLeft: 70,
			            backgroundColor: '#007aff',
			          },
			        }}
			        
			        autoFocus={false}
			        messages={this.getMessages()}
			        handleSend={this.handleSend}
			        onErrorButtonPress={this.onErrorButtonPress}
			        maxHeight={Dimensions.get('window').height - navBarHeight - statusBarHeight}
			        loadEarlierMessagesButton={true}
			        onLoadEarlierMessages={this.onLoadEarlierMessages}

			        senderName='Developer'
			        senderImage={null}
			        onImagePress={this.onImagePress}
			        displayNames={true}
			        
			        parseText={true} // enable handlePhonePress and handleUrlPress
			        handlePhonePress={this.handlePhonePress}
			        handleUrlPress={this.handleUrlPress}
			        handleEmailPress={this.handleEmailPress}
			        
			        inverted={true}
		         />
			  </View>		
		  </DrawerLayoutAndroid>
		);
	},
	handleUrlPress(url) {
		if (Platform.OS !== 'android') {
			LinkingIOS.openURL(url);
		}
	},

	handlePhonePress(phone) {
		if (Platform.OS !== 'android') {
			var BUTTONS = [
				'Text message',
				'Call',
				'Cancel',
			];
			var CANCEL_INDEX = 2;

			ActionSheetIOS.showActionSheetWithOptions({
				options: BUTTONS,
				cancelButtonIndex: CANCEL_INDEX
			}, (buttonIndex) => {
				switch (buttonIndex) {
					case 0:
						Communications.phonecall(phone, true);
						break;
					case 1:
						Communications.text(phone);
						break;
				}
			});
		}
	},

	handleEmailPress(email) {
		Communications.email(email, null, null, null, null);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#2E3E4B',
	},
	toolbar: {
		backgroundColor: '#2E3E4B',
		height: 56,
		marginTop: 24,
	},
});

var navBarHeight = (Platform.OS === 'android' ? 56 : 64);
var statusBarHeight = (Platform.OS === 'android' ? 25 : 0);

module.exports = Main;