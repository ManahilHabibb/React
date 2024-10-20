import React from "react";
 import {Text,View,Button,StyleSheet} from 'react-native';

 export default function Home({navigation}) {
    return (
 
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
        title="Main"
        onPress={()=>navigation.navigate('detail')}/>
      </View>
      
    );
    
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });




