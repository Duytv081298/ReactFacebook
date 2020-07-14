
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';



export default function Button(props) {
    let uri = props.uri
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => props.onPress(props.name)}
        >
            <Text style={styles.buttonText}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </Text>
            <Image source={{uri}} resizeMode="contain" style={styles.choiceImage} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    buttonStyle: {
        width: 200,
        margin: 10,
        height: 50,
        flexDirection: "row",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#640D14',
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    choiceImage: {
        width: 50,
        height: 50,
        padding: 10,
        
        backgroundColor: '#640D14',
      }
});
