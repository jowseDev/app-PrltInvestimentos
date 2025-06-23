import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  lista: {
    gap: 12,
    paddingBottom: 20,
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
  logoCotacao:{
    height: 100,
    width: 100,
  },
  infoCotacao:{
    marginTop: 30,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoCotacao2: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  containerBotao: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    padding: 12,

  },
  picker: {
  backgroundColor: '#fff',
  marginTop: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  height: 50,
  paddingHorizontal: 10,
},

});

export default styles;
