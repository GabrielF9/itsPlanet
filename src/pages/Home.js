import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default function Home({ navigation }) {
  return(
    <View style={styles.container}>
        <Text>O jogo começou</Text>
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