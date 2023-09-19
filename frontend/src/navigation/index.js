import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen'
import { Auth, Hub } from 'aws-amplify'
import { AuthContext } from './authContext'
import BottomTabNavigator from './BottomTabNavigator'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Navigation = () => {
  const [user, setUser] = useState(undefined)

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
      setUser(authUser)
    } catch (e) {
      setUser(null)
    }
  }

  useEffect(() => {
    checkUser();

    const listener = (data) => {
      if (data.payload.event === 'signOut') {
        setUser(null); // Update user state when a sign-out event occurs
      }
    };

    const authListener = Hub.listen('auth', listener);
    return () => {
      Hub.remove('auth', authListener);
    };
  }, []);


  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    )
  }
  
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
          ) : (
            <>
              <Stack.Screen name='SignIn' component={SignInScreen} />
              <Stack.Screen name='SignUp' component={SignUpScreen} />
              <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
              <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
              <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
            </> 
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default Navigation