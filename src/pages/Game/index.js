/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  BackHandler,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  ScrollView
} from 'react-native';

import styles from './styles';

import game from '../../assets/images/game.png';
import ficha from '../../assets/images/ficha.png';
import planeta from '../../assets/images/planeta.png';
import tamanhos from '../../assets/images/tamanhos.png';
import painel from '../../assets/images/painel.png';
import temp from '../../assets/images/temp.png';
import frio from '../../assets/images/frio.png';
import nuvem from '../../assets/images/nuvem.png';
import sol from '../../assets/images/sol.png';
import star from '../../assets/images/star.png';
import solmapa from '../../assets/images/sol-mapa.png';
import solorb from '../../assets/images/sol-orb.png';
import continueButton from '../../assets/images/continue.png';
import bola50 from '../../assets/images/bola50.png';
import bola100 from '../../assets/images/bola100.png';

export default function Game({ navigation }) {
  function backButtonHandler() {
    return navigation.navigate('Home');
  }

  const [isVisibleS,setVisibleS] = useState (false);
  const [isVisibleT,setVisibleT] = useState (false);
  const [sizeStar, setSizeStar] = useState(0); 
  const [temperatureStar, setTemperatureStar] = useState(0);
  const [isDetails, setDetails] = useState(false);

  const [sliderIndicator, setSlider] = useState(1);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backButtonHandler);
    };
  }, []);

  const modalSize = () =>
    <Modal
      visible={isVisibleS}
      animationType="slide"
      transparent={false}
      onRequestClose={() => {
        setVisibleS(!isVisibleS);
      }}
    >
      <TouchableWithoutFeedback onPress={()=>{setVisibleS(!isVisibleS)}}>
        <View style={{ height: '30%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
      <View
        style={{
          alignItems: 'center',
          padding: '3%',
          heigth: '40%',
          justifyContent: 'center',
          backgroundColor: "#000",
        }}
      >
        <Text style={{color: '#fff'}}>Selecione o tamanho da sua estrela:</Text>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <TouchableOpacity style={{transform:[{scale: 0.5}]}} onPress={()=>{setSizeStar(1);setVisibleS(!isVisibleS);setDetails(true);}} >
            <Image source={planeta}  />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20, transform:[{scale: 0.75}]}} onPress={()=>{setSizeStar(2);setVisibleS(!isVisibleS);setDetails(true);}}>
            <Image source={planeta} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setSizeStar(3);setVisibleS(!isVisibleS);setDetails(true);}}>
            <Image source={planeta}  />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={()=>{setVisibleS(!isVisibleS)}}>
        <View style={{ height: '60%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
    </Modal>

  const modalTemperature = () =>
    <Modal
      visible={isVisibleT}
      animationType="slide"
      transparent={false}
      onRequestClose={() => {
        setVisibleS(!isVisibleT);
      }}
    >
      <TouchableWithoutFeedback onPress={()=>{setVisibleT(!isVisibleT)}}>
        <View style={{ height: '30%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
      <View
        style={{
          alignItems: 'center',
          padding: '3%',
          heigth: '40%',
          justifyContent: 'center',
          backgroundColor: "#000",
        }}
      >
        <Text style={{color: '#fff'}}>Selecione a temperatura da sua estrela:</Text>
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={{marginRight: 30, transform:[{scale: 0.95}]}} onPress={()=>{setTemperatureStar(1);setVisibleT(!isVisibleT);setDetails(true);}} >
            <Image source={frio} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20, transform:[{scale: 0.90}]}} onPress={()=>{setTemperatureStar(2);setVisibleT(!isVisibleT);setDetails(true);}}>
            <Image source={nuvem} />
          </TouchableOpacity>
          <TouchableOpacity style={{transform:[{scale: 0.95}]}} onPress={()=>{setTemperatureStar(3);setVisibleT(!isVisibleT);setDetails(true);}}>
            <Image source={sol} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={()=>{setVisibleT(!isVisibleT)}}>
        <View style={{ height: '60%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
    </Modal>
  
  const modalDetails = () =>
    <Modal
      visible={isDetails}
      animationType="slide"
      transparent={false}
      onRequestClose={() => {
        setDetails(!isDetails);
      }}
    >
      <TouchableWithoutFeedback onPress={()=>{setDetails(!isDetails)}}>
        <View style={{ height: '30%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
      <View
        style={{
          alignItems: 'center',
          padding: '3%',
          heigth: '40%',
          justifyContent: 'center',
          backgroundColor: "#000",
        }}
      >
        <View>
          {sizeStar===1 && ( 
              <View>
                <Text style={{color: '#fff'}}>{"Tipo de estrela Ana"}</Text>
                <Text style={{color: '#fff'}}>{"Tempo de Vida Muito Longa"}</Text>
              </View>)}
            
          {(temperatureStar===1 && (
                <View>
                  <Text style={{color: '#fff'}}>A temperatura de uma estrela altera a sua cor.</Text>
                  <Text style={{color: '#fff'}}>Ana Vermelha</Text>
                </View>
              )
            )}
        </View>
        
      </View>
      <TouchableWithoutFeedback onPress={()=>{setDetails(!isDetails)}}>
        <View style={{ height: '60%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
    </Modal>

  return (
    <View style={styles.container}>
      {modalSize()}
      {modalTemperature()}
      {modalDetails()}
      <StatusBar hidden={true} />

      <Image source={game} style={styles.background}/>
      
      <Text style={styles.titleStar}>Estrela</Text>

      <Image source={solmapa} style={styles.solmapa} />
    
      {(sizeStar===1 && temperatureStar===1 ) && (<Image source={star} style={styles.star}/>)}
      {(sizeStar!==1 && temperatureStar!==1 ) && (<Image source={solmapa} style={styles.solmapa} />)}
      {(sizeStar===1 && temperatureStar===1 ) && (<Image source={solorb} style={styles.solorb} />)}

      <TouchableOpacity style={styles.fichaContainer} onPress={() => {setDetails(true);}} >
        <Image source={ficha} style={styles.ficha}/>
        <Text style={styles.fichaText}>Detalhes</Text>
      </TouchableOpacity>

      <View style={{position: 'absolute', top: '10%', right: '11.4%' ,flexDirection: 'row', transform: [{scale: 0.5}]}}>
        <Image source={sliderIndicator ? bola100 : bola50} />
        <Image source={!sliderIndicator ? bola100 : bola50} />
      </View>

      <Image source={painel} style={styles.painel} />

      <View style={styles.caracteristicas}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScrollEndDrag={()=>{setSlider(!sliderIndicator)}}
        >
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={()=>setVisibleS(!isVisibleS)}>
              <Image source={tamanhos} style={styles.itemImage} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={()=>setVisibleT(!isVisibleT)}>
              <Image source={temp} style={styles.itemImage} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {(sizeStar===1 && temperatureStar===1 ) && (
        <TouchableOpacity style={styles.continue} onPress={() => {navigation.navigate('Planet')}}>
          <Image source={continueButton} />
        </TouchableOpacity>
      )}
    </View>
  );
}
