import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Head = ({}) =>{
return(
    <View style={styles.container}>
        <Text style={styles.mytext}>This is Header</Text>  
    </View>
);
};

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 25,
    marginTop: 10,
},
mytext: {
    fontSize: 20,
    fontWeight: 'bold'
}
});
export default Head;