import React,{Component, useEffect} from 'react';
import {
  View,
  Image,
  StatusBar,
  BackHandler,
  Animated,
  Easing
} from 'react-native';

import styles from './styles';

import background from '../../assets/images/final.png';
import planet from '../../assets/images/planet.png';

class PlanetAnimation extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration:4000,
        easing: Easing.linear
      }
    ).start(() => this.spin());
  }

  render(){
    const spinX = this.spinValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [-1000, 1200, -500]
    });
    const spinY = this.spinValue.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 120, -120]
    });

    return(
      <View>
        <Animated.Image source={planet} style={styles.planet, {transform: [{translateY: spinY}, {translateX: spinX}]}} />
      </View>
    );
  }
}

export default function Final({navigation}) {
  function backButtonHandler() {
    return navigation.navigate('Home');
  }

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

      <View style={{scale: 0.5}}>
        <PlanetAnimation />
      </View>
    </View>
  );
}
