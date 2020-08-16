import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: '500',
    maxWidth: 240,
  },
  buttonOk: {
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04d361',
    height: 60,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
