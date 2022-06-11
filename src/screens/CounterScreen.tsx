import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)
  return (
    <View style={styles.container}>
        <Text
            style={styles.title}
            >
                Counter {counter}
        </Text>

        <Fab
            title='+1'
        />

    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    title:{
        textAlign:'center',
        fontSize:40,
        top:-15
    },
    
  });