'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	TouchableOpacity,
} = React;

var ViewPager = require('../modules/viewpager/ViewPager');
var deviceWidth = Dimensions.get('window').width;
var deviceheight = Dimensions.get('window').height;

var styles = StyleSheet.create({
	logo: {
		position: 'absolute',
		left: 20,
		top: 40,
		width: 86,
		height: 25,
	},
	slide1_img: {
		width: 250,
		height: 200,
		resizeMode: 'contain',
		marginLeft: (deviceWidth - 250) / 2,
		marginTop: (deviceheight - 380) / 2,
	},
	slide2_img: {
		width: 250,
		height: 200,
		resizeMode: 'contain',
		marginLeft: (deviceWidth - 250) / 2,
		marginTop: (deviceheight - 380) / 2,
	},
	slide3_img: {
		width: 250,
		height: 200,
		resizeMode: 'contain',
		marginLeft: (deviceWidth - 250) / 2,
		marginTop: (deviceheight - 380) / 2,
	},
	page_item: {
		height: deviceheight - 56,
		width: deviceWidth,
	},
	Imagebox: {
		width: deviceWidth,
		height: deviceheight - 226,
	},
	page_title: {
		width: deviceWidth,
		lineHeight: 30,
		height: 32,
		marginTop: 30,
		textAlign: 'center',
		fontSize: 23,
		fontWeight: 'bold',
		color: "#000"
	},
	page_desc: {
		width: deviceWidth - 100,
		marginLeft: 50,
		textAlign: 'center',
		fontSize: 14,
		marginTop: 5,
		color: "#303234",
	},
	foot: {
		backgroundColor: "#2C9BF4",
		height: 56,
		flexDirection: 'row',
	},
	btn: {
		flex: 109,
	},
	btn_text: {
		textAlign: 'center',
		color: "#F1F9FB",
		fontSize: 16,
		marginTop: 16,
	},
	split: {
		flex: 1,
		backgroundColor: '#2385D0',
		marginTop: 5,
		marginBottom: 5,
	},
	shadow: {
		width: deviceWidth,
		height: 5,
		resizeMode: 'stretch'
	},
});

var items = [{
	"title": "Welcome to Asyoume",
	"desc": "本系统为极限物联传承项目， 工作协同系统.高效沟通， 寻求真理",
	"image": require('image!desktop'),
	"imageStyle": styles.slide1_img,
	"backgroundColor": "#3DBA90",
}, {
	"title": "Channels",
	"desc": "添加任何来源的信息到你喜欢的频道，聊天中获取信息",
	"image": require('image!screen_large'),
	"imageStyle": styles.slide2_img,
	"backgroundColor": "#E7536D",
}, {
	"title": "Timeline And Task",
	"desc": "完整的时间周期表，可以在聊天中添加各种事件",
	"image": require('image!tablet'),
	"imageStyle": styles.slide3_img,
	"backgroundColor": "#FAB25E",
}];

var LoadScreen = React.createClass({
	getInitialState: function() {
		var dataSource = new ViewPager.DataSource({
			pageHasChanged: (p1, p2) => p1 !== p2,
		});
		return {
			dataSource: dataSource.cloneWithPages(items),
		};
	},

	render: function() {
		return (
			<View >
				<ViewPager
			        style={this.props.style}
			        dataSource={this.state.dataSource}
			        renderPage={this._renderPage}
			        renderPageIndicator={true}
			        isLoop={true}
			        autoPlay={false}/>
			    <Image source={require('image!logo')}  style={styles.logo} />
			    <View  style={styles.foot}>
				    <TouchableOpacity  style={styles.btn}  onPress={this._onPressLogin}>
							<Text style={styles.btn_text}>
								连接账户
							</Text>
					  </TouchableOpacity>
					  <View style={styles.split}></View>
						<TouchableOpacity  style={styles.btn}  onPress={this._onPressRegister}>
							<Text style={styles.btn_text}>
								注册账户
							</Text>
					  </TouchableOpacity>
			    </View>
		    </View>
		);
	},

	_renderPage: function(data: Object, pageID: number | string) {
		return (
			<View style={styles.page_item}>
				<View style={[styles.Imagebox,{"backgroundColor":data.backgroundColor}]}>
					<Image source={data.image} style={data.imageStyle} />
				</View>
				<Image source={require('image!shadow')} style={styles.shadow} />
				<Text style={styles.page_title}>
					{data.title}
				</Text>
				<Text style={styles.page_desc}>
					{data.desc}
				</Text> 
		  </View>
		);
	},
	_onPressLogin: function() {
		this.props.navigator.push({
			title: "login",
			name: 'loginStep1',
		});
	},
	_onPressRegister: function() {
		this.props.navigator.push({
			title: "register",
			name: 'register',
		});
	},
});

module.exports = LoadScreen;