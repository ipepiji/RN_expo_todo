import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import List from './screens/admin/customer/list';
import { FAB } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <List />
      <FAB
        style={styles.fab}
        large
        icon="plus"
        theme={{ colors: { accent: 'orange' } }}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7e8ba',
    marginTop: Constants.statusBarHeight  // Expo : Top margin overlap with top screen ( Battery Status, Wifi, etc)
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});
