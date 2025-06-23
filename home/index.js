import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // use esta lib, não a do RN puro
import API from '../api/brapiApi';
import styles from './style';
import acoesDisponiveis from '../funcoes/fAcoes';

export default function Home() {
  const [cotacao, setCotacao] = useState(null);
  const [acaoSelecionada, setAcaoSelecionada] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(''); // Estado do Picker

  // Atualiza a ação selecionada quando o usuário escolhe no Picker
  useEffect(() => {
    if (opcaoSelecionada) {
      setAcaoSelecionada(opcaoSelecionada);
    }
  }, [opcaoSelecionada]);

  // Busca a cotação da ação escolhida
  useEffect(() => {
    if (acaoSelecionada) {
      buscarCotacao(acaoSelecionada);
    }
  }, [acaoSelecionada]);

  const buscarCotacao = async (ticker) => {
    try {
      const response = await API.get(`/quote/${ticker}`, {
        params: { range: '1d', interval: '1d' }
      });
      const dados = response.data.results[0];
      setCotacao(dados);
    } catch (error) {
      console.error('Erro ao buscar cotação:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cotação da ação selecionada */}
      <View style={styles.containerCotacao}>
        {cotacao ? (
          <View style={styles.infoCotacao}>
                 <Image
        style={styles.logoCotacao}
        source={require('../assets/logoPrincipal.png')}
      />
          <View style={styles.infoCotacao2}>
            <Text style={styles.label}>Nome da empresa: {cotacao.longName}</Text>
            <Text style={styles.label}>Ação: {cotacao.symbol}</Text>
            <Text style={styles.label}>Preço Atual: R$ {cotacao.regularMarketPrice}</Text>
            <Text style={styles.label}>Variação: {cotacao.regularMarketChangePercent}%</Text>
          </View>
          </View>
        ) : (
          <Text style={styles.label}>Nenhuma ação selecionada.</Text>
        )}
      </View>

      {/* Seletor com Picker */}
      <View style={styles.containerBotao}>
        <Text style={styles.titulo}>Selecione uma Ação</Text>

        <Picker
          selectedValue={opcaoSelecionada}
          onValueChange={(itemValue) => setOpcaoSelecionada(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Escolha uma ação..." value="" />
          {acoesDisponiveis.map((acao) => (
            <Picker.Item key={acao} label={acao} value={acao} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
