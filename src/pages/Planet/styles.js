import { StyleSheet } from 'react-native';
import { fonts } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  titleStar: {
    position: 'absolute',
    top: '3%',
    left: '35%',
    fontFamily: fonts.regular,
    fontSize: 28,
    color: '#fff'
  },
  solmapa: {
    position: 'absolute',
    top: '19.45%',
    left: '12.60%',
    width: 30,
    height: 30
  },
  solorb: {
    position: 'absolute',
    top: '7%',
    left: '4.9%',
    width: 130,
    height: 130
  },
  fichaContainer: {
    position: 'absolute',
    left: '3.2%',
    bottom: '6.8%',
    width: '16%',
    height: '16%'
  },
  ficha: {
    width: '100%',
    height: '100%',
    resizeMode: 'center'
  },
  fichaText: {
    position: 'absolute',
    bottom: '37%',
    left: '19%',
    fontFamily: fonts.regular,
    fontSize: 20
  },
  painel: {
    position: 'absolute',
    top: '15%',
    right: '2.2%',
    width: '26%',
    height: '67%',
    resizeMode: 'center'
  },
  caracteristicas: {
    position: 'absolute',
    right: '6.25%',
    width: '18%',
    height: '67%',
  },
  itemImage: {
    width: 120,
    height: 280,
    //position: 'absolute',
    resizeMode: 'center',
  },
  planet: {
    position: 'absolute',
    top: '39.5%',
    left: '43%',
    width: 100,
    height: 100
  },
  mplanet: {
    position: 'absolute',
    top: '25.5%',
    left: '16.7%',
    width: 30,
    height: 30
  },
  sist: {
    position: 'absolute',
    bottom: '7%',
    right: '5%',
    transform: [{scale: 1.15}]
  }
});

export default styles;
