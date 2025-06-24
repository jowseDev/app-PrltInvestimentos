import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import acoesDisponiveis from '../funcoes/fAcoes';

const { width } = Dimensions.get('window');

const dados = acoesDisponiveis.map((acao) => ({
  title: acao,
  desc: 'Descrição da ação ' + acao,
}));


export default function Carrossel() {
  return (
    <View style={styles.container}>
      <Carousel
  loop
  width={width}
  height={180}
  data={dados}
  autoPlay={true}
  autoPlayInterval={0} // zero, para ativar rolagem contínua
  scrollAnimationDuration={2000} // controla a velocidade da rolagem
  modeConfig={{
    snapDirection: 'left',
    stackInterval: 30,
  }}
  panGestureHandlerProps={{
    activeOffsetX: [-10, 10], // desativa o toque manual
  }}
  enabled={false} // ← evita parada ao tocar
  renderItem={({ item }) => (
    <View style={styles.card}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  )}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 160,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  desc: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
});