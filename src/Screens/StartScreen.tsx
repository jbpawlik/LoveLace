import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { RootStackParamList } from '../components/RootStackParamList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function StartScreen({ navigation }: Props) {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen', { userId: '???', screen: 'LoginScreen', params: undefined})} 
        style={{}}      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen', { userId: '???', screen: 'LoginScreen', params: undefined})} 
        style={{}}      >
        Sign Up
      </Button>
    </Background>
  )
}
