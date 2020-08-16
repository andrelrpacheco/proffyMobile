import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },
  teacherList: {
    marginTop: -40,
  },
  searchForm: {
    marginBottom: 12,
  },
  label: {
    color: '#d4c2ff',
    fontWeight: '400',
  },
  input: {
    height: 54,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
