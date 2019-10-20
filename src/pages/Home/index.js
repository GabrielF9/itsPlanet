import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import styles from './styles';

import background from '../../assets/background.png';
import jogar from '../../assets/jogar.png';
import config from '../../assets/config.png';
import sair from '../../assets/sair.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Image source={background} style={styles.background}/>

      <View style={styles.buttonsContainer}>
        <Text style={styles.title}>Bem Vindo!</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={jogar} style={styles.buttonImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={config} style={styles.buttonImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={sair} style={styles.buttonImage}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
