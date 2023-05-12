import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppStack from './navigation/app-stack';

import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  // Firebase yapılandırma kodunuzu buraya yapıştırın
};

firebase.initializeApp(firebaseConfig);

// Firebase Realtime Database'e bağlanmak için
const database = firebase.database();

export default function App() {
  return (
    // Wrap your app in the Store component

    <SafeAreaView style={styles.container}>
      <AppStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
