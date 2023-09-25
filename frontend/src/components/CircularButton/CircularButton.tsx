// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default ({ title, onPress }) => <TouchableOpacity onPress={onPress} style={styles.button}>
//   <Text style={styles.title}>{title}</Text>
// </TouchableOpacity>

// const styles = StyleSheet.create({
//   button: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     color: 'white',
//   }
// })

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CircularButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(color)}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )}

const styles = StyleSheet.create({
  button:(color) => ({
    width: 120,
    height: 120,
    borderRadius: 75,
    backgroundColor: (color === 'green') ? 'green' : 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  }),
  title: {
    color: 'white',
    fontSize: 20
  }
})


export default CircularButton