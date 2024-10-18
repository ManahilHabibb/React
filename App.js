import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


export default function App() {

  return (
    
    <View style={styles.container}>
   <View style={styles.space}></View>
      <StatusBar style={styles.statusbar} />
      <Foot/>
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
    
  },
  space: {
    height:680 ,
  }
});
