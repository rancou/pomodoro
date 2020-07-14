import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 24,
    minWidth: 300,
    borderRadius: 7,
  },
  buttonTitle: {
    fontWeight: 'bold',
  },
  timer: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 100,
    width: '100%',
    textAlign: 'center',
  },
  type: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    width: '100%',
    textAlign: 'center',
  },
})
