import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Picker } from 'react-native';
import API from '../api/brapiApi';
import styles from './style';
import acoesDisponiveis from '../funcoes/fAcoes';    
export default function Home() {
// Lista com os símbolos das ações disponíveis
  const [acoes] = useState(acoesDisponiveis);

  // Estado que armazena os dados da cotação atual
  const [cotacao, setCotacao] = useState(null);

  // Estado que armazena qual ação o usuário selecionou
  const [acaoSelecionada, setAcaoSelecionada] = useState(null);

  // Efeito que executa a busca da cotação sempre que a ação for trocada
  useEffect(() => {
    if (acaoSelecionada) {
      buscarCotacao(acaoSelecionada);
    }
  }, [acaoSelecionada]);

  // Função assíncrona que busca os dados da cotação da ação escolhida
  const buscarCotacao = async (ticker) => {
    try {
      const response = await API.get(`/quote/${ticker}`, {
        params: {
          range: '1d',
          interval: '1d'

        }
      });
      const dados = response.data.results[0];
      setCotacao(dados);
    } catch (error) {
      console.error('Erro ao buscar cotação:', error);
    }
  };

  // Renderiza cada item (ação) como um botão clicável
  const renderItem = ({ item }) => (
    <TouchableOpacity   
      style={styles.botao}
      onPress={() => setAcaoSelecionada(item)}
    >
      <Text style={styles.textoBotao}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

 {/* Container que exibe os dados da ação selecionada */}
      <View style={styles.containerCotacao}>
        {cotacao ? (
          <View style={styles.infoCotacao}>
            <Text style={styles.label}>Ação: {cotacao.symbol}</Text>
            <Text style={styles.label}>Preço Atual: R$ {cotacao.regularMarketPrice}</Text>
            <Text style={styles.label}>Variação: {cotacao.regularMarketChangePercent}%</Text>
          </View>
        ) : (
          <Text style={styles.label}>Nenhuma ação selecionada.</Text>
        )}
      </View>


      <View style ={styles.containerBotao}>
      <Text style={styles.titulo}>Selecione uma Ação</Text>


       <Picker
        selectedValue={opcaoSelecionada}
        onValueChange={(itemValue, itemIndex) => setOpcaoSelecionada(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Escolha uma opção..." value="" />
        <Picker.Item label="Opção 1" value="opcao1" />
        <Picker.Item label="Opção 2" value="opcao2" />
        <Picker.Item label="Opção 3" value="opcao3" />
      </Picker>


      {/* Container para os botões de ações */}
      <View style={styles.containerAcoes}>
        <FlatList
          data={acoesDisponiveis}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={styles.lista}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      </View>
     
    </View>
  );
}
