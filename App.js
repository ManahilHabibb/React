import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text ,Image , ImageBackground} from 'react-native';

export default function App() {
  return (
    <ImageBackground style={styles.backgroud} source={require('./assets/bg.png')}>
      <Image style={styles.img} source={require('./assets/image.png')}/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroud:{
     
      resizeMode: 'cover',
      justifyContent: 'center',
      flex:1,
      
  },

  img:{
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 100,
  }
  
});


