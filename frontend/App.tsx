import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import NewPasswordScreen from './src/screens/NewPasswordScreen'

export default function App() {
  return (
    <View style={styles.root}>
      <NewPasswordScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
