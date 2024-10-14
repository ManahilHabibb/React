import React , {useState} from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';

const Mybutton =({title,onPress}) => {

const [buttonColor,setButtonColor]=useState('blue');

const HandlePress = ()=>{
    setButtonColor(previousColor => (previousColor==='blue'?'red':'blue'));

    if(onPress){
        onPress();
    }
};
return (
<TouchableOpacity
style={[styles.mybutton,{backgroundColor:buttonColor}]}
onPress={HandlePress}
>
    <Text style={styles.mytext}>{title}</Text>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
    mybutton: {
        
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