import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/p4l_logo.png'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomButtonClear from '../../components/CustomButtonClear'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [email, setEmail]           = useState('')
  const [password, setPassword]     = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const navigation = useNavigation()

  const onSignInPressed = () => {
    // validate user

    navigation.navigate('Home')
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#cce70b', '#071448']}
        style={styles.linearGradient}
      >
        <Image 
          source={Logo} 
          style={styles.logo} 
          resizeMode='contain' 
        />
        <CustomInput 
          placeholder='Email'
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
          icon='email'
        />
        <CustomInput 
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry
          icon='lock'
        />
        {/* <Pressable 
          style={styles.rememberMeContainer}
          onPress={() => {
            setRememberMe(!rememberMe)
          }}
        >
          { (rememberMe) ? (
              <MaterialCommunityIcons 
                name='checkbox-outline' 
                size={15} 
                color='white'
                style={styles.rememberMeIcon}
              /> 
            ) : (
              <MaterialCommunityIcons 
                name='checkbox-blank-outline'
                size={15} 
                color='white'
                fillColor='white'
                style={styles.rememberMeIcon}
              /> 
            )}
          <Text style={{color: 'white', fontSize: 12}}>Remember Me</Text>
        </Pressable> */}
        <CustomButton 
          text='Sign In' 
          onPress={onSignInPressed}
          type='NAVY' 
        />
        <View style={{ marginVertical: 13 }}>
          <Pressable onPress={onForgotPasswordPressed}>
            <Text style={{fontWeight: 'bold', color: 'white'}} >
              Forgot Password?
            </Text>
          </Pressable>
        </View>
        <SocialSignInButtons />
        {/* <View style={{ marginVertical: 5}}>
          <CustomButtonClear 
            text="Don't have an account? Create one" 
            onPress={onSignUpPressed} 
          />
        </View> */}
        <View style={{ marginVertical: 13 }}>
          <Pressable onPress={onSignUpPressed}>
            <Text style={{fontWeight: 'bold', color: 'white'}} >
              Don't have an account? Create one
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 0,
    maxHeight: '120%',
    justifyContent: 'center',
  },
  logo: {
    width: '85%',
    maxWidth: 500,
    maxHeight: 270,
    // borderColor: 'black',
    // borderWidth: 3,
    marginTop: 30,
    padding: 0,
  },
  linearGradient: {
    alignItems: 'center',
    height: '100%',

    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  rememberMeIcon: {
    paddingRight: 5,
  },
  rememberMeContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    width: '70%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
})

export default SignInScreen