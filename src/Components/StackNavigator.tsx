// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParamList';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '../screens'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();



declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default function StackNavigator() {

  const user = useContext(AuthContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
      }}>
        { user ? (
          <>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          {/* <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          /> */}
          </>
        ) : (
          <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          </>
        )
      }

      </Stack.Navigator>
    </NavigationContainer>
  );
}