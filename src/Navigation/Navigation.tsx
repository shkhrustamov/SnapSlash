import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen.tsx";

const Tab = createBottomTabNavigator();

function Navigation () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          headerStyle: { backgroundColor: 'rgba(0, 0, 0, 1)', borderBottomWidth: 0},
          headerTitle: 'Edit',
          headerTitleStyle: {
            color: '#FF9F0A',
            borderColor: '#000000'
          },
          headerTitleAlign: 'left',
          // headerRight: () => (
          //   <MaterialCommunityIcons
          //     name="plus"
          //     color="#FF9F0A"
          //     size={24}
          //     style={{ marginRight: 10 }}
          //   />
          // ),
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="web" color={color} size={28} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;
