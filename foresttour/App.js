//This is an example code for Bottom Navigation//
import React from 'react';
import {Button, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import PackageScreen from './pages/PackageScreen';
import StaffScreen from './pages/StaffScreen';
import BookingScreen from './pages/BookingScreen';
const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
    Package: {screen: PackageScreen},
    Staff: {screen: StaffScreen},
    Booking: {screen: BookingScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#8A2BE2',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  },
);
const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: {screen: SettingsScreen},
    Details: {screen: DetailsScreen},
    Package: {screen: PackageScreen},
    Staff: {screen: StaffScreen},
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#00FFFF',
      },
      headerTintColor: '#FFFFFF',
      title: 'Detail Forest',
      //Header title
    },
  },
);
const App = createBottomTabNavigator(
  {
    Home: {screen: HomeStack},
    Details: {screen: SettingsStack},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Details') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1E90FF',
      inactiveTintColor: '#1E90FF',
    },
  },
);
export default createAppContainer(App);
