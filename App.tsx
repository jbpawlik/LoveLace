// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import StackNavigator from './src/Components/StackNavigator'

export default function App() {
  return (
    <Provider theme={theme}>
      <StackNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
