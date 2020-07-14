import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
let name = "Trịnh Văn Duy"
    let jop = "Information technology"
    const POLO_BLUE_COLOR = 'rgb(51,60,87)';
    const FOLLOW_COLOR = 'rgb(71,113,246)';
    const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
    const imgData = [
        { id: 1, imgSource: require('../assets/avatar.jpg') },
        { id: 2, imgSource: require('../assets/avatar.jpg') },
        { id: 3, imgSource: require('../assets/avatar.jpg') },
        { id: 4, imgSource: require('../assets/avatar.jpg') },
        { id: 5, imgSource: require('../assets/avatar.jpg') },
        { id: 6, imgSource: require('../assets/avatar.jpg') }
    ];

export default function InforComponent() {
    const centerImgData = Math.floor(imgData.length / 2);
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <AntDesign style={styles.btnBack} name="back" size={30} color="#777777" />
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <Entypo name="dots-two-vertical" size={30} color="#777777" />
                </View>
            </View>
            <View style={styles.infor}>
                <View style={styles.imageAvatar}>
                    <Image source={{ uri: 'https://i.pinimg.com/236x/df/3a/49/df3a49502ecdc0ec1a57add95551ea71.jpg' }}
                        style={{ width: 100, height: 100, borderRadius: 100 / 2, }} />
                </View>
                <View style={styles.name}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 5 }}>{name}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#C0C0C0", marginVertical: 5 }}>{jop}</Text>
                    <View style={styles.fixButton}>
                        <TouchableOpacity style={styles.btnFollow}>
                            <Text style={{ color: "#fff" }}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSend}>
                            <MaterialIcons name="send" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.follow}>
                <View style={styles.followItem}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 5 }}>210</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#C0C0C0", marginVertical: 5 }}>Photos</Text>
                </View>
                <View style={styles.followItem}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 5 }}>15k</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#C0C0C0", marginVertical: 5 }}>Followers</Text>
                </View>
                <View style={styles.followItem}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 5 }}>605</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#C0C0C0", marginVertical: 5 }}>Following</Text>
                </View>
            </View>
            <View style={styles.images}>
                <ScrollView contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: 'row',
                }}>
                    <View style={styles.imageColumn}>
                        {imgData.slice(0, centerImgData).map(item => {
                            return <Image source={item.imgSource} style={styles.image} />
                        })}
                    </View>
                    <View style={styles.imageColumn}>
                        {imgData.slice(centerImgData).map(item => {
                            return <Image source={item.imgSource} style={styles.image} />
                        })}
                    </View>
                </ScrollView>
            </View>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.btnNavbar}>
                    <Feather name="square" size={24} color="#9933CC" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnNavbar}>
                    <AntDesign name="pluscircleo" size={24} color="#660099" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnNavbar}>
                    <Feather name="user" size={24} color="#6633CC" />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20

    },
    header: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 40,
    },
    btnBack: {
    },
    infor: {
        flex: 3,
        flexDirection: "row",

    },
    imageAvatar: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        flex: 3,
        padding: 5,
        justifyContent: "center",
    },
    fixButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 10
    },
    btnFollow: {
        alignItems: "center",
        backgroundColor: FOLLOW_COLOR,
        paddingVertical: 7,
        paddingHorizontal: 50,
        borderRadius: 999
    },
    btnSend: {
        alignItems: "center",
        backgroundColor: SEND_MESSAGE_COLOR,
        padding: 5,
        paddingHorizontal: 20,
        borderRadius: 999
    },
    follow: {
        flex: 2,
        flexDirection: 'row',
    },
    followItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    images: {
        flex: 9,
    },
    imageColumn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 160,
        height: 150,
        marginVertical: 5,
        borderRadius: 10
    },
    navbar: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "baseline",

    },
    btnNavbar: {
        flex: 1,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }
});
