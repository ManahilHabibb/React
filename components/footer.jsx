import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Foot = ({}) =>{
return(
    <View style={styles.container}>
        <Text style={styles.mytext}>This is Footer</Text>  
    </View>
);
};

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 25,
    position: 'absolute ',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
},
mytext: {
    fontSize: 20,
    fontWeight: 'bold'
}
});
export default Foot;