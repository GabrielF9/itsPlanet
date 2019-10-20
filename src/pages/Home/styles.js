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
  title:{
    fontSize:30,
    color: '#FFF',
    fontFamily:fonts.regular,
    marginBottom: "5%",
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: '2%',
    width: '50%',
    height: '40%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '60%',
    height: '60%',
    marginBottom: '-15%',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    padding: 0
  }
});

export default styles;
