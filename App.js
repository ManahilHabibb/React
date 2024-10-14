import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mytext from './components/text';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text with placeholder</Text>
      <Mytext
      placeholder="Enter your name"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
