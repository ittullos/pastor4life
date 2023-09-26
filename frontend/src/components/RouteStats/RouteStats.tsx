import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import PrayerIcon from '../../../assets/images/praying-hands-icon-black.png'


const RouteStats = () => {

  const [fontsLoaded] = useFonts({
    "Digital7": require("../../../assets/fonts/digital-7.ttf")
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])
  

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 20 }}>
      <View style={styles.box}>
        <Text style={{ fontFamily: 'Digital7', fontSize: 37 }}>00:00</Text>
        <Image 
          source={require('../../../assets/images/stopwatch.svg.png')}
          style={{ width: 40, height: 40, marginTop: 15 }}
        />
      </View>
      <View style={styles.box}>
        <Text style={{ fontSize: 32 }}>0.00</Text>
        <Text style={{ fontSize: 25, marginTop: 10 }}>mi</Text>
      </View>
      <View style={styles.box}>
        <Text style={{ fontSize: 30 }}>0</Text>
        <Image 
          source={require('../../../assets/images/praying-hands-icon-black.png')}
          style={{ width: 40, height: 40, marginTop: 15 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export default RouteStats