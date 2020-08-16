import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    lineHeight: 25,
    maxWidth: 160,
    marginVertical: 30,
  },
});

export default styles;
