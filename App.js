
import { StyleSheet, Text, View , Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 import Myhome from './Screens/home'
import Mydetail from './Screens/detail'

const Stack=createStackNavigator();
export default function App() {
  return (
<NavigationContainer>
    
  <Stack.Navigator 
    initialRouteName='home'>
      
      <Stack.Screen
      name='home'
      component={Myhome}>
      </Stack.Screen>

      <Stack.Screen
      name='detail'
      component={Mydetail}>
      </Stack.Screen>
    </Stack.Navigator>
    
    
    </NavigationContainer>
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
