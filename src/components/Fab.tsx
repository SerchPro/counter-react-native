import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string
}

export const Fab = ( {title}: Props) => {
  return (
    
    <TouchableOpacity
        style={ styles.fabLocationBR}
        onPress={ () => console.log("click")}
        >

        <View style= { styles.fab}>
            <Text style= { styles.fabText } >{title}</Text>
        </View>
        
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height:60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        right:25
    },
    fabLocationLT:{
        position: 'absolute',
        bottom: 25,
        left:25
    }
})