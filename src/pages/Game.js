import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default function Game({ navigation }) {
  return(
    <View style={styles.container}>
        <Text>Game Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});