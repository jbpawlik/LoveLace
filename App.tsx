// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'


import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/Screens'

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string, screen: any, params: any };
  Dashboard: {userId: string, screen: any, params: any };
  ResetPasswordScreen: { userId?: string, screen: any, params: any};
  StartScreen: { userId: string, screen: any, params: any };
  LoginScreen: { userId?: string, screen: any, params: any} ;
  RegisterScreen: { userId: string }
  Feed: { sort: 'latest' | 'top' } | undefined;
  onPress(): void;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function App() {
  return (
    <Provider theme={theme}>
      {/* <View style={styles.container}> */}
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
          }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </View> */}
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
