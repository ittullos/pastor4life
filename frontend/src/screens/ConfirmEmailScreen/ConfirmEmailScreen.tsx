import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import CustomButtonClear from '../../components/CustomButtonClear'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('')
  const navigation = useNavigation()


  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onResendCodePressed = () => {
    console.warn("Resend Code")
  }

  const onConfirmPressed = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.root}>
      
      <LinearGradient
        colors={['#cce70b', '#071448']}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput 
          placeholder='Enter confirmation code'
          value={code}
          setValue={setCode}
          secureTextEntry={false}
          icon='email-check'
        />
        <CustomButton 
          text='Confirm' 
          onPress={onConfirmPressed}
          type='NAVY'
        />
        <CustomButton
          text="Resend Code" 
          onPress={onResendCodePressed} 
          type='NAVY_INVERT'
        />
        <View style={{marginVertical: 15}}>
          <CustomButtonClear 
            text="Back to Sign In" 
            onPress={onSignInPressed} 
          />
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

export default ConfirmEmailScreen