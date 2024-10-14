import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const Mybutton =({title,onPress}) => {

return (
<TouchableOpacity
style={styles.mybutton}
onPress={onPress}
>
    <Text style={styles.mytext}>{title}</Text>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
    mybutton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    mytext: {
       Color: '#fff',
    }
});

export default Mybutton;