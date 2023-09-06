import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CustomButton = ({ onPress, text, type, bgColor, fgColor, icon }) => {
  return (

    <Pressable 
      onPress={onPress} 
      style={[
        styles.container(icon), 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}>
      { icon ? 
        <View style={{ paddingLeft: 10 }}>
          <MaterialCommunityIcons 
            name={icon} 
            size={22} 
            color={fgColor}
            style={styles.buttonIcon}
          /> 
        </View> : null }
      <View>
        <Text 
          style={[
            styles.text, 
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {}
          ]}>
            {text}
        </Text>
      </View>
      { icon ? 
        <View style={{ paddingright: 10, width: 22 }}>
          {/* <MaterialCommunityIcons 
            name={icon} 
            size={22} 
            color={fgColor}
            style={styles.buttonIcon}
          />  */}
        </View> : null }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:(icon) => ({
    flexDirection: 'row',
    width: '80%',
    padding: 15,
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: (icon) ? 'space-between' : 'center'
  }),
  container_NAVY: {
    backgroundColor: '#071448',
  },
  container_OPAQUE: {

  },
  text: {
    fontWeight: 'bold',
    alignContent: 'center',
  },
  text_NAVY: {
    color: 'white',
  },
  text_OPAQUE: {
    color: 'white',
  },
})

export default CustomButton