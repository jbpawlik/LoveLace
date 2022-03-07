import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthProvider';
import { AuthContext } from './src/context/AuthContext';
import { theme } from './src/core/theme'
import StackNavigator from './src/components/StackNavigator'
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release."
 ]);

export default function App() {
  const user = useContext(AuthContext)
  
  return (
    <AuthProvider>
      <Provider theme={theme}>
        <StatusBar hidden />
        <StackNavigator />
      </Provider>
    </AuthProvider>
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
