import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Switch} from 'react-native';
 

export default function App() {
  
  const[enabled,setisenabled] = useState(false);
  const toggleSwitch = ()=>setisenabled((previouState)=>!previouState);

  

  return (
    <View style={styles.container}>
      <Text>Toggle Switch</Text>
      <StatusBar style="auto" />
      <Switch value={enabled} onValueChange={toggleSwitch}></Switch>
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
