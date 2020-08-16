import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

function GiveClasses() {
  const {goBack} = useNavigation();

  function goBackToLandingPage() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}>
        <Text style={styles.title}>Quer ser um proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={goBackToLandingPage} style={styles.buttonOk}>
        <Text style={styles.buttonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
