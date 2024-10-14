import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const MyFlex = ({}) =>
{
return(
<View style={styles.container}>

    <View style={styles.Box1}>
        <Text>Box 1</Text>
    </View>

    <View style={styles.Box2}>
        <Text>Box 2</Text>
    </View>

    <View style={styles.Box3}>
        <Text>Box 3</Text>
    </View>

</View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'space-around',
        padding: 10,
        paddingTop:50,
        paddingVertical:50,
        
    
    },
    Box1:{
        backgroundColor: 'red',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        height: 10,
        borderColor: 'black',
        flexDirection: 'column',
    },
    Box2:{
        backgroundColor: 'green',
        flex: 1,
        padding: 10,
        borderWidth: 1,
        height: 10,
        borderColor: 'black',
        flexDirection: 'column',
    },
    Box3:{
        backgroundColor: 'yellow',
        flex: 1,
        padding: 10,
        height: 10,
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'column',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
export default MyFlex;