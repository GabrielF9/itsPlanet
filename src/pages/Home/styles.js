import { StyleSheet } from 'react-native';

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
  buttonsContainer: {
    position: 'absolute',
    bottom: '2%',
    width: '50%',
    height: '40%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    width: '60%',
    height: '60%',
    marginBottom: '10%'
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    padding: 0
  }
});

export default styles;
