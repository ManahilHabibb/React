import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mybutton from './components/buttons';

export default function App() {

  const Press = () =>{
    alert('Button Pressed');
  };

  return (
    <View style={styles.container}>
      <Text>Touchable Opacity Button</Text>
      <Mybutton
      title="I am a button"
      onPress={Press} />
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
