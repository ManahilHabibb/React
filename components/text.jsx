import React from 'react';
import {StyleSheet,TextInput} from 'react-native';

const Textfield = ({placeholder}) =>
{
return(
<TextInput
placeholder={placeholder}
style={styles.textfield}
/>
);
}

const styles = StyleSheet.create({

textfield: {
  borderWidth: 1,
  borderColor: '#777',
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
}

});

export default Textfield;