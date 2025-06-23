import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { SvgUri } from 'react-native-svg';
import API from '../api/brapiApi';
import styles from './style';
import acoesDisponiveis from '../funcoes/fAcoes';

export default function Home() {
  const [cotacao, setCotacao] = useState(null);
  const [acaoSelecionada, setAcaoSelecionada] = useState(null);
  const [busca, setBusca] = useState(''); // valor digitado pelo usuário
  const [acoesFiltradas, setAcoesFiltradas] = useState(acoesDisponiveis); // ações mostradas

  // Atualiza a lista filtrada conforme o usuário digita
  useEffect(() => {
    const resultado = acoesDisponiveis.filter((acao) =>
      acao.toLowerCase().includes(busca.toLowerCase())
    );
    setAcoesFiltradas(resultado);
  }, [busca]);

  // Sempre que a ação mudar, busca nova cotação
  useEffect(() => {
    if (acaoSelecionada) {
      buscarCotacao(acaoSelecionada);
    }
  }, [acaoSelecionada]);

  const buscarCotacao = async (ticker) => {
    try {
      const response = await API.get(`/quote/${ticker}`, {
        params: {
          range: '1d',
          interval: '1d',
        },
      });
      const dados = response.data.results[0];
      setCotacao(dados);
    } catch (error) {
      console.error('Erro ao buscar cotação:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com imagem e botões */}
      <View style={styles.espaco}></View>
      <View style={styles.cabecario}>
        <Image
          style={styles.logoCabecario}
          source={require('../assets/logoPrincipalGrande.png')}
        />
        <TouchableOpacity onPress={''}>
          <Text style={styles.botao1}>Calculadora de Juros</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={''}>
          <Text style={styles.botao2}>Calculadora de Juros</Text>
        </TouchableOpacity>
      </View>

      {/* Cotação */}
      <View style={styles.containerCotacao}>
        {cotacao ? (
          <View style={styles.infoCotacao}>
            {cotacao.logourl && (
              <View style={styles.logoCotacao}>
                <SvgUri uri={cotacao.logourl} />
              </View>
            )}
            <View style={styles.infoCotacao2}>
              <Text style={styles.label}>Nome da empresa: {cotacao.longName}</Text>
              <Text style={styles.label}>Ação: {cotacao.symbol}</Text>
              <Text style={styles.label}>Preço Atual: R$ {cotacao.regularMarketPrice}</Text>
              <Text style={styles.label}>Variação: {cotacao.regularMarketChangePercent}%</Text>
            </View>
          </View>
        ) : (
        <Text style={styles.label2}>Nenhuma ação selecionada.</Text>
        )}
      </View>

      {/* Campo de busca e lista filtrada */}
      <View style={styles.containerBotao}>
        <Text style={styles.titulo}>Buscar Ação</Text>
        <TextInput
          placeholder="Digite o nome da ação (ex: PETR4)"
          value={busca}
          onChangeText={setBusca}
          style={styles.inputBusca}
          placeholderTextColor="white"
        />

        <FlatList
          data={acoesFiltradas}
          keyExtractor={(item) => item}
          style={styles.lista}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemLista}
              onPress={() => setAcaoSelecionada(item)}
            >
              <Text style={styles.itemTexto}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
