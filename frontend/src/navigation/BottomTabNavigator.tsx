import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import PrayerScreen from '../screens/PrayerScreen'
import DevotionalScreen from '../screens/DevotionalScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DrawerNavigator from './DrawerNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let routeName = route.name
          size = 35

          if (routeName === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (routeName === 'Prayer') {
            iconName = focused ? 'account-group' : 'account-group-outline'
          } else if (routeName === 'Devotional') {
            iconName = focused ? 'play' : 'play-outline'
          }
          return (
            <MaterialCommunityIcons 
              name={iconName} 
              size={size} 
              color={color}
            /> 
          )
        },
        tabBarActiveTintColor: '#cce70b',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: [
          {
            backgroundColor: '#071448',
            height: 90,
            padding: 10
          },
          null
        ],
      })}
      // tabBarOptions={{
      //   activeTintColor: 'tomato',
      //   inactiveTintColor: 'grey',
      //   labelStyle: { paddingBottom: 10, fontSize: 10 },
      //   // style: { paddingTop: 20, height: 150 }
      // }}
    >
      <Tab.Screen name="Devotional" component={DevotionalScreen} />
      <Tab.Screen name="Home" component={DrawerNavigator} />
      <Tab.Screen name="Prayer" component={PrayerScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator