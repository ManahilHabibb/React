import React from "react";
 import {Text,View,Button,StyleSheet} from 'react-native';

 export default function Detail({navigation}) {
    return (
 
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Button
        title="Main"
        onPress={()=>navigation.navigate('home')}/>
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


