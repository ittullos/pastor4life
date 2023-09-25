import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StatsScreen from '../screens/StatsScreen'
import CommitmentScreen from '../screens/CommitmentScreen'
import PrayerListScreen from '../screens/PrayerListScreen'
import { DrawerToggleButton } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        drawerPosition:'right', 
        headerShown: true, 
        headerTransparent: true, 
        headerLeft: false, 
        drawerActiveTintColor: '#071448',
        headerRight: props => <MaterialCommunityIcons 
                                name='menu'
                                size={40}
                                onPress={navigation.toggleDrawer}
                                style={{ color: '#071448', paddingRight: 20 }}
                              />,
      })}
    >
      <Drawer.Screen name='Home Drawer' component={HomeScreen} options={{title: 'Home', headerTitle:''}} />
      <Drawer.Screen name='My Stats' component={StatsScreen} />
      <Drawer.Screen name='My Commitment' component={CommitmentScreen} />
      <Drawer.Screen name='Prayer List' component={PrayerListScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator