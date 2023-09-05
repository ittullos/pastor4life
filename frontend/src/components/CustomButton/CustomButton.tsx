import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}>
      <Text 
        style={[
          styles.text, 
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {}
        ]}>
          {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    
    width:           '80%',
    padding:         15,
    marginVertical:  4,
    alignItems:      'center',
    borderRadius:    50,
  },
  container_NAVY: {
    backgroundColor: '#071448',
  },
  container_OPAQUE: {

  },
  text: {
    fontWeight: 'bold',
  },
  text_NAVY: {
    color: 'white',
  },
  text_OPAQUE: {
    color: 'white',
  },
})

export default CustomButton