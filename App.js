import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import DeckScreen from './screens/DeckScreen';
import MapScreen from './screens/MapScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { Provider } from 'react-redux';
import store from './store'


export default class App extends React.Component {
  render() {



    const tabNavigatorConf = {
      tabBarPosition: 'top',
      animationEnabled: true,
      tabBarOptions: { activeTintColor: 'blue'},
      lazy: true,
      navigationOptions: { tabBarVisible : false }
    }

    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        main: {
          screen : TabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen},
            review: { 
              screen: StackNavigator ({
                review: { screen: ReviewScreen },
                settings: { screen: SettingsScreen }
              })
            }
          })
        }
      },
      tabNavigatorConf
    )





    // const MainNavigator = TabNavigator(
    //   {
    //     welcome: { screen: WelcomeScreen },
    //     auth: { screen: AuthScreen },
    //     // nested tab navigators
    //     main: {
    //       screen: TabNavigator({
    //         map: { screen: MapScreen },
    //         deck: { screen: DeckScreen },
    //         // wire up stack navigator inside tab Navigator
    //         review: { screen: StackNavigator({
    //           review: { screen: ReviewScreen },
    //           settings: { screen: SettingsScreen}
    //          })
    //         }
    //       }, {
    //         tabBarPosition: 'bottom',
    //         animationEnabled: true,
    //         tabBarOptions: { activeTintColor: '#e91e63' }      
    //       })
    //     }
    //   }, {
    //     tabBarPosition: 'bottom',
    //     animationEnabled: true,
    //     tabBarOptions: { activeTintColor: '#e91e63' }      
    //   }
    // );

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>render?</Text>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
