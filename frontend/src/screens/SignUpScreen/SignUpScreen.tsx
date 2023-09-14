import { View, Text, Image, StyleSheet, ScrollView, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import CustomButtonClear from '../../components/CustomButtonClear'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { Auth } from 'aws-amplify'


const SignUpScreen = () => {
  const [email, setEmail]                     = useState('')
  const [password, setPassword]               = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigation = useNavigation()

  const onSignUpPressed = async () => {
    if (password === confirmPassword) {
      try {
        await Auth.signUp(email, password)
        navigation.navigate('ConfirmEmail', {email, password})

      } catch (e) {
        Alert.alert('Oops', e.message)
      }
    } else {
      Alert.alert('Oops', 'Passwords do not match')
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')

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

        <View style={{ marginVertical: 13 }}>
          <Pressable onPress={onSignInPressed}>
            <Text style={{fontWeight: 'bold', color: 'white'}} >
              Already have an account? Sign In
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