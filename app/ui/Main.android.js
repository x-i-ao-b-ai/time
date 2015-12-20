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
} = React;

//var Drawer = require('react-native-drawer');
var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;

var toolbarActions = [{
	title: '搜索',
	icon: require('image!ic_search_white_24dp'),
	show: 'always'
}, {
	title: '夜间模式',
	show: 'never'
}, {
	title: '设置选项',
	show: 'never'
}];

var Main = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		ToastAndroid.show('done', ToastAndroid.SHORT)
		return ({
			theme: null,
			dataSource: ds.cloneWithRows(['row 1', 'row 2']),
		});
	},
	onSelectTheme: function(theme) {
		this.refs[DRAWER_REF].closeDrawer();
		this.setState({
			theme: theme,
		});
	},
	_renderNavigationView: function() {
		return (
			<View style={{flex: 1, backgroundColor: '#25323B'}}>
                 <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}></Text>
            </View>
		);
	},
	onRefresh: function() {
		this.onSelectTheme(this.state.theme);
	},
	onRefreshFinish: function() {
		//this.swipeRefreshLayout && this.swipeRefreshLayout.finishRefresh();
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
			      onActionSelected={this.onActionSelected} />
			    <ListView
			      style={styles.ListView}
			      dataSource={this.state.dataSource}
			      renderRow={(rowData) => <Text>{rowData}</Text>}
			    />	
			  </View>		
		    </DrawerLayoutAndroid>
		);
	}
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
	ListView: {
		backgroundColor: '#fff',
	}
});

module.exports = Main;