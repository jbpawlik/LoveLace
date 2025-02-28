import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
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
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../components/RootStackParamList';
import { firebase } from '../firebase'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

type Props = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const loginToAccount = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    } else {
      loginToAccount()
    }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard'}],
    // })
  }

  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      {/* <Header>LoveLace</Header> */}
      <Logo />
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
        keyboardType="email-address" description={undefined}      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry description={undefined}      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ResetPasswordScreen', {
          //   screen: 'ResetPasswordScreen',
          //   params: props
          // })}
          onPress={() => navigation.navigate('ResetPasswordScreen', {userId: '???', screen: 'ResetPasswordScreen', params: undefined})}
        >
          <Text
            style={styles.forgot} 
            onPressIn={undefined} 
            onPressOut={undefined} 
            onTextLayout={undefined} 
            dataDetectorType={undefined} 
            android_hyphenationFrequency={undefined}>
              Forgot your password?
          </Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} style={{}}>
        Login
      </Button>
      <View style={styles.row}>
        <Text onPressIn={undefined} onPressOut={undefined} onTextLayout={undefined} dataDetectorType={undefined} android_hyphenationFrequency={undefined}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen', { userId: '???'})}>
          <Text style={styles.link} onPressIn={undefined} onPressOut={undefined} onTextLayout={undefined} dataDetectorType={undefined} android_hyphenationFrequency={undefined}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
