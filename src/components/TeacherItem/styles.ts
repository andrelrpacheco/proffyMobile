import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#eeeeee',
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontWeight: 'bold',
    color: '#32264d',
    fontSize: 20,
  },
  subject: {
    fontWeight: '500',
    color: '#6a6180',
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#6a6180',
  },
  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 20,
  },
  price: {
    fontWeight: '400',
    color: '#6a6180',
    fontSize: 14,
  },
  priceValue: {
    fontWeight: 'bold',
    color: '#8257e5',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  favoriteButton: {
    backgroundColor: '#8257e5',
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  contactButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  favorited: {
    backgroundColor: '#e33d3d',
  },
});

export default styles;
