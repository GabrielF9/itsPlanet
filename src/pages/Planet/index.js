/* eslint-disable linebreak-style */
import React, { useEffect,useState } from 'react';
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
import solorb from '../../assets/images/sol-orb.png';
import vel from '../../assets/images/vel.png';
import vel1 from '../../assets/images/vel1.png';
import vel2 from '../../assets/images/vel2.png';
import vel3 from '../../assets/images/vel3.png';
import chem from '../../assets/images/chem.png';
import mplanet from '../../assets/images/planet.png';
import mplanetinha from '../../assets/images/planetinha.png';
import sist from '../../assets/images/sist.png';
import qui1 from '../../assets/images/qui1.png';
import qui2 from '../../assets/images/qui2.png';
import qui3 from '../../assets/images/qui3.png';
import bola50 from '../../assets/images/bola50.png';
import bola100 from '../../assets/images/bola100.png';

export default function Game({ navigation }) {
  const [isVisibleS,setVisibleS] = useState (false);
  const [isVisibleV,setVisibleV] = useState (false);
  const [isVisibleQ,setVisibleQ] = useState (false);
  const [sizePlanet, setSizePlanet] = useState(0); 
  const [speedPlanet, setSpeedPlanet] = useState(0);
  const [chemestryPlanet, setChemestryPlanet] = useState(0);
  const [sliderIndicator, setSlider] = useState(0);

  function backButtonHandler() {
    return navigation.navigate('Home');
  }

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
        <Text style={{color: '#fff'}}>Selecione o tamanho do seu planeta:</Text>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <TouchableOpacity style={{transform:[{scale: 0.5}]}} onPress={()=>{setSizePlanet(1);setVisibleS(!isVisibleS);}} >
            <Image source={planeta}  />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 20, transform:[{scale: 0.75}]}} onPress={()=>{setSizePlanet(2);setVisibleS(!isVisibleS);}}>
            <Image source={planeta} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{setSizePlanet(3);setVisibleS(!isVisibleS);}}>
            <Image source={planeta}  />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={()=>{setVisibleS(!isVisibleS)}}>
        <View style={{ height: '60%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
    </Modal>

  const modalSpeed = () =>
    <Modal
      visible={isVisibleV}
      animationType="slide"
      transparent={false}
      onRequestClose={() => {
        setVisibleV(!isVisibleV);
      }}
    >
      <TouchableWithoutFeedback onPress={()=>{setVisibleV(!isVisibleV)}}>
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
        <Text style={{color: '#fff'}}>Selecione a velocidade da sua estrela:</Text>
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{marginRight: 50, transform:[{scale: 0.55}]}} onPress={()=>{setSpeedPlanet(1);setVisibleV(!isVisibleV);}} >
            <Image source={vel1} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 50, transform:[{scale: 0.50}]}} onPress={()=>{setSpeedPlanet(2);setVisibleV(!isVisibleV);}}>
            <Image source={vel2} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 50, transform:[{scale: 0.55}]}} onPress={()=>{setSpeedPlanet(3);setVisibleV(!isVisibleV);}}>
            <Image source={vel3} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={()=>{setVisibleV(!isVisibleV)}}>
        <View style={{ height: '60%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
    </Modal>

  const modalChem = () =>
    <Modal
      visible={isVisibleQ}
      animationType="slide"
      transparent={false}
      onRequestClose={() => {
        setVisibleQ(!isVisibleQ);
      }}
    >
      <TouchableWithoutFeedback onPress={()=>{setVisibleQ(!isVisibleQ)}}>
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
        <Text style={{color: '#fff'}}>Selecione o componente químico do seu planeta:</Text>
        <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{marginRight: 30, transform:[{scale: 0.65}]}} onPress={()=>{setChemestryPlanet(1);setVisibleQ(!isVisibleQ);}} >
            <Image source={qui3} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 30, transform:[{scale: 0.60}]}} onPress={()=>{setChemestryPlanet(2);setVisibleQ(!isVisibleQ);}}>
            <Image source={qui2} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 30, transform:[{scale: 0.65}]}} onPress={()=>{setChemestryPlanet(3);setVisibleQ(!isVisibleQ);}}>
            <Image source={qui1} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={()=>{setVisibleQ(!isVisibleQ)}}>
        <View style={{ height: '60%', backgroundColor: 'rgba(0,0,0,0.7)' }} />
      </TouchableWithoutFeedback>
    </Modal>

  return (
    <View style={styles.container}>
      {modalSize()}
      {modalSpeed()}
      {modalChem()}
      <StatusBar hidden={true} />

      <Image source={game} style={styles.background}/>
      
      <Text style={styles.titleStar}>Planeta</Text>

      <Image source={solorb} style={styles.solorb} />

      {(sizePlanet===2 && speedPlanet===2 && chemestryPlanet===3) && (
        <Image source={mplanet} style={styles.planet}/>
      )}

      <TouchableOpacity style={styles.fichaContainer} onPress={() => {Alert.alert('Ficha Tecnica')}} >
        <Image source={ficha} style={styles.ficha}/>
        <Text style={styles.fichaText}>Detalhes</Text>
      </TouchableOpacity>

      <View style={{position: 'absolute', top: '10%', right: '11.4%' ,flexDirection: 'row', transform: [{scale: 0.5}]}}>
        <Image source={sliderIndicator===0 ? bola100 : bola50} />
        <Image source={sliderIndicator===1 ? bola100 : bola50} />
        <Image source={sliderIndicator===2 ? bola100 : bola50} />
      </View>

      <Image source={painel} style={styles.painel} />

      <View style={styles.caracteristicas}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScrollEndDrag={()=>{setSlider(sliderIndicator===0 || sliderIndicator===1 ? 1 + sliderIndicator : 1)}}
        >
          <View style={styles.imageBox}>
            <TouchableOpacity onPress={()=>setVisibleS(!isVisibleS)}>
              <Image source={tamanhos} style={styles.itemImage} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={()=>setVisibleV(!isVisibleV)}>
              <Image source={vel} style={styles.itemImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.chemestry}>
            <TouchableOpacity onPress={()=>setVisibleQ(!isVisibleQ)}>
              <Image source={chem} style={styles.itemImage} />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>

      {(sizePlanet===2 && speedPlanet===2 && chemestryPlanet===3) && (
        <Image source={mplanetinha} style={styles.mplanet}/>
      )}
      {(sizePlanet===2 && speedPlanet===2 && chemestryPlanet===3) && (
        <TouchableOpacity style={styles.sist} onPress={()=>{navigation.navigate('Final')}}>
          <Image source={sist} />
        </TouchableOpacity>
      )}

    </View>
  );
}
