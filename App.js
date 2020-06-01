import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import List from './screens/admin/customer/list';

export default function App() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7e8ba',
    marginTop: Constants.statusBarHeight  // Expo : Top margin overlap with top screen ( Battery Status, Wifi, etc)
  }
});
