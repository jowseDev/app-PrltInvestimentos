import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: 'center',
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
  infoCotacao: {
    marginTop: 30,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  }
});

export default styles;
