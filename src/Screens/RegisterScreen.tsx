import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { RootStackParamList } from '../components/RootStackParamList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    } else {
      createAccount()
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text: string) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error} 
        description={undefined}      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address" 
        description={undefined}      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry 
        description={undefined}      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text onTextLayout={undefined} onPressIn={undefined} onPressOut={undefined} dataDetectorType={undefined} android_hyphenationFrequency={undefined}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen', { userId: '???', screen: 'LoginScreen', params: undefined})}>
          <Text style={styles.link} onTextLayout={undefined} onPressIn={undefined} onPressOut={undefined} dataDetectorType={undefined} android_hyphenationFrequency={undefined}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
