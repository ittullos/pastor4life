import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/p4l_logo.png'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

  const onSignInPressed = () => {
    console.warn("Sign In")
  }

  const onSignUpPressed = () => {
    console.warn("Sign Up")
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password")
  }

  const onSignInFacebook = () => {
    console.warn("Sign In Facebook")
  }

  const onSignInGoogle = () => {
    console.warn("Sign In Google")
  }

  const onSignInApple = () => {
    console.warn("Sign In Apple")
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
        />
        <CustomInput 
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton 
          text='Sign In' 
          onPress={onSignInPressed}
          type='NAVY' 
        />
        <CustomButton 
          text='Forgot Password?' 
          onPress={onForgotPasswordPressed} 
          type='OPAQUE'
        />
        <CustomButton 
          text='Sign In with Facebook' 
          onPress={onSignInFacebook}
          type='NAVY' 
          bgColor='#E7EAF4'
          fgColor='#4765A9'
        />
        <CustomButton 
          text='Sign In with Google' 
          onPress={onSignInGoogle}
          type='NAVY' 
          bgColor='#FAE9EA'
          fgColor='#DD4D44'
        />
        <CustomButton 
          text='Sign In with Apple' 
          onPress={onSignInApple}
          type='NAVY' 
          bgColor='#E3E3E3'
          fgColor='#363636'
        />
        <CustomButton 
          text="Don't have an account? Create one" 
          onPress={onSignUpPressed} 
          type='OPAQUE'
        />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 0,
    maxHeight: '120%',
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
  }
})

export default SignInScreen