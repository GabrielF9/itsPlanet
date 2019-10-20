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
  planet: {
    width: 50,
    height: 50,
    top: '10%',
    left: '20%',
  }
});

export default styles;
