import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchScreen from '../Screens/SearchScreen.tsx';
import AddSlash from '../Screens/AddSlash.tsx';
import Profile from '../Screens/Profile.tsx';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, HomeScreen} from '../Screens/HomeScreen.tsx';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  screenName,
  name,
  color,
}: {
  name: string;
  color: string;
  screenName: string;
}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(screenName)}
      hitSlop={{top: 16, bottom: 16, left: 16, right: 16}}>
      <MaterialCommunityIcons name={name} color={color} size={32} />
    </TouchableOpacity>
  );
};

const Stack = createNativeStackNavigator();

const H = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenListeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            borderColor: '#000000',
          },
          headerStyle: {
            backgroundColor: '#341e17',
          },
          tabBarShowLabel: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Homej"
          component={H}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Home" name="image" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="Search" name="magnify" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AddSlash"
          component={AddSlash}
          options={{
            tabBarLabel: 'AddSlash',
            tabBarIcon: ({color}) => (
              <TabIcon screenName="AddSlash" name="plus-box" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <TabIcon
                screenName="Profile"
                name="account-circle"
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
