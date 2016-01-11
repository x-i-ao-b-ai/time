'use strict';

var React = require('react-native');

var {
  Platform,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} = React;

var deviceWidth = Dimensions.get('window').width;

var LoginStep2 = React.createClass({
  render: function() {
    return (
      <Image source={require('image!loading_tile')} style={styles.backgroundImage}>
        <View style={styles.bar} >
          <Text style={styles.bar_title}>asyoume.com</Text>
        </View>
        <Image source={require('image!shadow')} style={styles.shadow} />
        <Text style={styles.main_title} >请填写你的账户所在的域名</Text>
        <Text style={styles.sub_title} >asyoume.com</Text>
        <TextInput  style={styles.name} placeholder="邮箱/手机号/用户名"/>
        <TextInput  style={styles.passwd} placeholder="密码"/>
        <TouchableOpacity  style={styles.domain_btn}  onPress={this._onPressLogin}>
          <Text style={styles.domain_btn_text}>继续连接</Text>
        </TouchableOpacity>
      </Image>
    );
  },
  _onPressLogin: function() {
    this.props.navigator.push({
      title: "main",
      name: 'main',
    });
  },
});

var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  bar: {
    height: 80,
    paddingTop: 40,
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
  bar_title: {
    fontSize: 18,
    fontWeight: '800',
    color: "#000"
  },
  shadow: {
    width: deviceWidth,
    height: 5,
    resizeMode: 'stretch'
  },
  main_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 30,
    textAlign: 'center',
  },
  sub_title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: "#000",
    textAlign: 'center',
  },
  name: {
    height: 40,
    marginTop: 20,
    width: deviceWidth - 30,
    marginLeft: 15,
  },
  passwd: {
    height: 40,
    marginTop: 10,
    width: deviceWidth - 30,
    marginLeft: 15,
  },
  domain_btn: {
    height: 50,
    marginTop: 20,
    width: deviceWidth - 30,
    marginLeft: 15,
    backgroundColor: "#2C9BF4",
    borderRadius: 5,
  },
  domain_btn_text: {
    textAlign: 'center',
    marginTop: 13,
    color: '#fff',
    fontSize: 16,
  }
});

module.exports = LoginStep2;