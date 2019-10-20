import React,{useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  BackHandler,
} from 'react-native';

import styles from './styles';

import background from '../../assets/images/background.png';
import jogar from '../../assets/images/jogar.png';
import sair from '../../assets/images/sair.png';
import logo from '../../assets/images/solar.png';

function backButtonHandler() {
  return <View></View>
}

export default function Home({navigation}) {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Image source={background} style={styles.background}/>

      <Image source={logo} style={{width: '60%', resizeMode: 'center', position: 'absolute', bottom: '20%'}} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Game')}}>
          <Image source={jogar} style={styles.buttonImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{BackHandler.exitApp()}}>
          <Image source={sair} style={styles.buttonImage}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
