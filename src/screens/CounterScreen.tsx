import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)
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
                Counter {counter}
        </Text>

        <Button
            onPress={ () => setCounter( counter +1 )}
            title="increase"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />

<Button
            onPress={ () => setCounter( counter +1 )}
            title="increase"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
  )
}
