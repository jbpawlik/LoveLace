import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, FlatList } from 'react-native';
import { RootStackParamList } from '../components/RootStackParamList';
import ProfileGrid from '../components/ProfileGrid'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Dashboard({ navigation }: Props) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/LoveLaceLogo.png')} style={styles.image} />
        <Text>LoveLace</Text>
      </View>
      <ProfileGrid />
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    backgroundColor: 'red'
  },
  header: {
    // flex: 1,
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  image: {
    height: 50,
    width: 50,
  },
  footer: {
    height: 100,
  }
})