import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen.tsx';
import SearchScreen from '../Screens/SearchScreen.tsx';

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
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        title: 'SnapSlash',
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
    </Tab.Navigator>
  );
}


export default Navigation;
