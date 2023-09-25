import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import axios from 'axios'

 
const HomeScreen = () => {
  const [verse, setVerse]            = useState('')
  const [notation, setNotation]      = useState('')
  const [loading, setLoading]        = useState(true)

  // const signOut = () => {
  //   Auth.signOut()
  // }

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      getVerse()
    }
    return () => { ignore = true }
  },[])

  const getVerse = () => {
    axios.post(`https://pastor4life.click/p4l/home`,  { userId: "isaac.tullos@gmail.com" }
    ).then(res => {
      console.log("getVerse: ", res)
      setVerse(res.data.verse)
      setNotation(res.data.notation)
      setLoading(false) 
    }).catch(err => {
      console.log(err)
    })
  }


  const [fontsLoaded] = useFonts({
    "GeorgiaItalic": require("../../../assets/fonts/georgiai.ttf")
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
    <View style={styles.container}>
      <View style={{ 
        flex: 6, 
        // borderWidth: 3, 
        // borderColor: 'brown' 
      }}>
        <Text style={{
          fontSize: 28, 
          alignSelf: 'center', 
          fontWeight: 'bold', 
          paddingBottom: 10 
        }}>
          Verse of the Day
        </Text>
        { loading ? <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], paddingTop: 50 }} color='#071448' /> :
        <ScrollView>
          <Text style={{ 
            fontFamily: "GeorgiaItalic", 
            paddingHorizontal: 20, 
            fontSize: 22, 
            textAlign: 'center', 
            lineHeight: 30,
            paddingTop: 8 
          }}>
            "{verse}"
          </Text>
          <Text style={{ 
            paddingVertical: 15, 
            fontSize: 22, 
            textAlign: 'center', 
            fontWeight: '600' 
          }}>
            - {notation}
          </Text>
        </ScrollView>
        }
      </View>
      <View style={{ 
        flex: 3, 
        // borderWidth: 3, 
        borderColor: 'brown' 
      }}>

      </View>
      <View style={{ 
        flex: 4, 
        // borderWidth: 3, 
        borderColor: 'brown' 
      }}>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    // borderWidth: 4,
    // borderColor: 'red',
  },
})

export default HomeScreen