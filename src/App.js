/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './tabs/Home';
import Drawer from './components/Drawer';
import Profile from './tabs/Profile';
import Setting from './tabs/Setting';

// export default class App extends Component<{}> {
//   render() {
//     return (
//       <Home style={styles.container}/>
//     );
//   }
// }

const Homenav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  }, 
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}`
    })
  }
}, {
  headerMode: 'screen'
});

const App = TabNavigator({
  Home: {
    screen: Homenav,
    navigationOptions: {
      tabBarIcon: ({tintColor, focused}) => <Icon
        name={focused? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{color: '#000000'}}
      />
    }
  },
  Settings: {
    screen: Setting,
    navigationOptions: {
      tabBarIcon: ({tintColor, focused}) => <Icon
        name={focused? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{color: '#000000'}}
      />
    }
  }
});

// const App = DrawerNavigator({
//   Home: {
//     screen: Homenav
//   }
// }, {
//   contentComponent: props => <Drawer {...props}/>
// })

export default App;
