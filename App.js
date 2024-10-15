import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Head from './components/header';

export default function App() {

  return (
    <View style={styles.container}>
   
      <StatusBar style={styles.statusbar} />
      <Head/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    
  },
  statusbar: {
    backgroundColor: 'blue',
    
  }
});
