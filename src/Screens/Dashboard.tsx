import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { RootStackParamList } from '../components/RootStackParamList';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Dashboard({ navigation }: Props) {

  return (
    <Background>
      <Logo />
    </Background>
  )
}