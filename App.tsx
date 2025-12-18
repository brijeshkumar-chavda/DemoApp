import React, { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import firebase from '@react-native-firebase/app';

import Navigation from './src/navigation';

import { StyleSheet } from 'react-native';

function App() {
  useEffect(() => {
    if (firebase.apps.length) {
      console.log('✅ Firebase is initialized successfully!');
      console.log('App Name:', firebase.app().name);
    } else {
      console.log('❌ Firebase is NOT initialized.');
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
