'use strict';

var React = require('react-native');
var {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Animated,
} = React;

var deviceWidth = Dimensions.get('window').width;
var DOT_SIZE = 6;
var DOT_SAPCE = 3;

var styles = StyleSheet.create({
	tab: {
		alignItems: 'center',
	},

	tabs: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	dot: {
		width: DOT_SIZE,
		height: DOT_SIZE,
		borderRadius: DOT_SIZE / 2,
		backgroundColor: 'rgba(100,100,100,0.4)',
		marginLeft: DOT_SAPCE + 1.5,
		marginRight: DOT_SAPCE + 1.5,
	},

	curDot: {
		width: DOT_SIZE + 3,
		height: DOT_SIZE + 3,
		borderRadius: DOT_SIZE + 3 / 2,
		backgroundColor: 'rgba(100,100,100,0.4)',
		marginLeft: DOT_SAPCE,
		marginRight: DOT_SAPCE,
	},
});

var DefaultViewPageIndicator = React.createClass({
	propTypes: {
		goToPage: React.PropTypes.func,
		activePage: React.PropTypes.number,
		pageCount: React.PropTypes.number
	},

	getInitialState() {
		return {
			viewWidth: 0,
		};
	},

	renderIndicator(page, curr) {
		if (this.props.activePage === page) {
			return (
				<View key={page} style={styles.curDot} />
			);
		} else {
			return (
				<View key={page} style={styles.dot} />
			);
		}
	},

	render() {
		var pageCount = this.props.pageCount;
		var itemWidth = DOT_SIZE + (DOT_SAPCE * 2);
		var offset = (this.state.viewWidth - itemWidth * pageCount) / 2 + itemWidth * this.props.activePage;

		var indicators = [];
		for (var i = 0; i < pageCount; i++) {
			indicators.push(this.renderIndicator(i))
		}

		return (
			<View style={styles.tabs} onLayout={(event) => { var viewWidth = event.nativeEvent.layout.width;if (!viewWidth || this.state.viewWidth === viewWidth) {return;}this.setState({viewWidth: viewWidth,});}}>
		        {indicators}
		    </View>
		);
	},
});

module.exports = DefaultViewPageIndicator;