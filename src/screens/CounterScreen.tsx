import React from 'react'
import { Text, View } from 'react-native';

export const CounterScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
        <Text
            style={{
                textAlign:'center',
                fontSize:40,
                top:-15
            }}
            >
                Counter xxx
        </Text>
    </View>
  )
}
