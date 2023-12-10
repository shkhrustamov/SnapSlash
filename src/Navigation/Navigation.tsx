import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/HomeScreen.tsx';
import SearchScreen from '../Screens/SearchScreen.tsx';
import AddSlash from '../Screens/AddSlash.tsx';
import Profile from '../Screens/Profile.tsx';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#252525',
          borderTopWidth: 0,
          borderColor: '#000000',
        },
        headerStyle: {
          backgroundColor: '#341e17',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: 'SnapSlash',
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{tabBarLabel: 'HomeScreen', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        )}}/>
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{tabBarLabel: 'SearchScreen'}}/>
      <Tab.Screen name="AddSlash" component={AddSlash} options={{tabBarLabel: 'AddSlash'}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: 'Profile'}}/>
    </Tab.Navigator>
  );
}


export default Navigation;
