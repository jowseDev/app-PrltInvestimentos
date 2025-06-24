import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
    // paddingHorizontal: 16,
    backgroundColor: '#151515',
  },
  espaco:{
    paddingTop: 25,
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  lista: {
    gap: 12,
    maxHeight: 200,
  },
  cabecario:{
    backgroundColor:'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  botao1:{
   paddingHorizontal: 8,
   color: 'white',
  },
  botao2:{
   paddingHorizontal: 8,
   color: 'white',
  },
  logoCabecario:{
  height: 85,
  width: 85,
  },
    botao: {
    minWidth: 100,  
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
logoCotacao: {
  marginRight: 16,
  padding: 20,
  backgroundColor: 'black',
  borderRadius: 10,
 },
 containerCotacao:{
  paddingTop:25,
 },
infoCotacao: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 16,
  borderRadius: 8,
  backgroundColor: '#ffffff',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},
infoCotacao2: {
  flex: 1,
},
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  label2:{
    fontSize: 16,
    marginBottom: 6,
    color: 'white',
    borderBottomColor: 'white',
    alignSelf: 'center',
    padding: 40
  },
  containerBotao: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    padding: 12,

  },
  picker: {
  backgroundColor: 'white',
  marginTop: 10,
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 20,
  height: 50,
  paddingHorizontal: 100,
},
inputBusca: {
  backgroundColor: '#151515',
  padding: 12,
  borderRadius: 8,
  marginBottom: 12,
  borderWidth: 1,
  borderColor: 'white',
  color:'white',
},
itemLista: {
  padding: 12,
  backgroundColor: 'white',
  marginBottom: 9,
  borderRadius: 8,
  paddingHorizontal: 90,
},

itemTexto: {
  fontSize: 16,
  color: '#333',
},
conteudoHome:{
flexDirection: 'row',
backgroundColor: 'white',
alignItems: 'center',
padding: 10,
},
conteudoHomeDescricao:{
color: 'white',
padding: 11,
},
  logoConteudo:{
  height: 85,
  width: 85,
  },
 tituloConteudo: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#151515',
  marginBottom: 10,
},

textoConteudo: {
  fontSize: 16,
  color: '#333',
  textAlign: 'justify',
},
containerCarrossel: {
  marginTop: 20,
  paddingHorizontal: 16,
  backgroundColor: '#151515',
},

});
export default styles;
