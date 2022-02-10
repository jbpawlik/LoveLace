import React from 'react'
import Background from '../Components/Background'
import Logo from '../Components/Logo'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'
import { RootStackParamList } from '../../App';
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
