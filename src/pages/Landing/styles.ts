import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 30,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 30,
    marginTop: 20,
  },
  titleBold: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    height: 150,
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9871f5',
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  buttonStudy: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDarAulas: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalConnections: {
    color: '#d4c2ff',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 25,
  },
});

export default styles;
