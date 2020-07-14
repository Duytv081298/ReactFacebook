import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function InstagramComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                    }}
                    style={{
                        flex: 1,
                        width: null,
                        height: 44
                    }}
                    resizeMode="contain"
                />
                <Feather name="inbox" size={27} color="black" style= {{marginRight: 10}} />
            </View>
            <View style={styles.content}>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: 'row',
        backgroundColor: '#f3f6fa',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50
    },
    content: {
        flex: 9,
        backgroundColor: "blue"

    }

});

