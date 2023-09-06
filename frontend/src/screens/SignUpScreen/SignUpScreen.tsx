import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SocialSignInButtons from '../../components/SocialSignInButtons'

const SignUpScreen = () => {
  const [email, setEmail]                     = useState('')
  const [password, setPassword]               = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [rememberMe, setRememberMe]           = useState(false)

  const onSignUpPressed = () => {
    console.warn("Sign Up")
  }

  const onSignInPressed = () => {
    console.warn("Sign In")
  }

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed")
  }

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed")
  }

  return (
    <View style={styles.root}>
      
      <LinearGradient
        colors={['#cce70b', '#071448']}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Create an account</Text>
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
        <CustomInput 
          placeholder='Confirm Password'
          value={confirmPassword}
          setValue={setConfirmPassword}
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
          text='Register' 
          onPress={onSignUpPressed}
          type='NAVY'
        />
        <View style={styles.termsContainer}>
        <Text style={styles.text}>
          By registering, you confirm that you accept our 
          <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and 
          <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
        </Text>
        </View>
        <SocialSignInButtons />
        <CustomButton 
          text="Already have an account? Sign In" 
          onPress={onSignInPressed} 
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
    justifyContent: 'center',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    paddingTop: 140,
  },
  termsContainer: {
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginVertical: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    color: '#FDB075',
  },
})

export default SignUpScreen