import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../../assets/images/p4l_logo.png'
import { LinearGradient } from 'expo-linear-gradient'
import CustomInput from '../../components/CustomInput'

const SignInScreen = () => {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')

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
      </LinearGradient>
      
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 0,
  },
  logo: {
    width: '95%',
    maxWidth: 500,
    maxHeight: 300,
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