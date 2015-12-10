/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var UserApi = require('./UserApi');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToolbarAndroid,
  DrawerLayoutAndroid,
} = React;

var timeline = React.createClass({
  render: function() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#25323B'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
      </View>
    );
    return (
         <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
             <View style={{flex: 1, alignItems: 'center'}}>
                 <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                 <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
             </View>
         </DrawerLayoutAndroid>
    );
  },
  onChangeText:function(){
 
  }
});

var styles = StyleSheet.create({

});

UserApi.Open("192.168.10.53",9090,
  (msg) => {
    console.log(msg);
  },
  (x) => {
    UserApi.Register("222",
      (msg) => {
        console.log(msg);
      },
      (x) => {
        console.log(x);
      }
    );
  }
);


AppRegistry.registerComponent('timeline', () => timeline);
