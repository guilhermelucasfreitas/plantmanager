import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import {Button} from '../components/Button'

export function Welcome() {
  const [visible, setVisible] = useState(false);

  function handleVisibility(){
    setVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} suas plantas {'\n'} de forma fácil</Text>
      
      {
        visible && 
        <Image source={wateringImg} style={styles.image}/>
      }

      <Text style={styles.subtitle}>Não esqueça mais de regar as plantas.
            Nós cuidamos de lembrar você semore que precisar.
      </Text>

      <Button title=">" onPress={handleVisibility}></Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },

  image: {
    width: 292,
    height: 284
  },

});
