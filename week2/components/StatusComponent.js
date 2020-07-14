import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const WIDTH = '100%'
export default function StatusComponent() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <AntDesign style={styles.btnBack} name="back" size={30} color="#777777" />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 50 }}>
            <Entypo name="dots-three-vertical" size={24} color="#777777" />
          </View>
        </View>
        <View style={styles.image}>
          <Image source={{ uri: 'https://5b0988e595225.cdn.sohucs.com/images/20190923/0c79eb6bbcf2409791686af41afa5107.jpeg' }}
            style={{ width: WIDTH, height: WIDTH, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }} />
        </View>
        <View style={styles.infor}>
          <View style={styles.inforLeft}>
            <Text style={{ fontWeight: 'bold', fontSize: 35, marginVertical: 5 }}>
              Eiffet tower
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="location-pin" size={24} color="#C0C0C0" />
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: "#C0C0C0", marginVertical: 5, marginLeft: 10 }}>Paris, Franch</Text>

            </View>

          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View style={styles.inforDownload}>
              <AntDesign name="clouddownloado" size={30} color="#fff" style={{ margin: 20 }} />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={{ flex: 9 }}>
            <Text style={{ fontSize: 18, marginVertical: 5, marginLeft: 10 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit ullamcorper sapien.
          </Text>
            <View style={styles.fixHashtag}>
              <TouchableOpacity style={styles.hashtag}>
                <Text style={{ color: "#888888" }}>#photograhpy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.hashtag}>
                <Text style={{ color: "#888888" }}>#sea</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flex: 1,
            justifyContent: "flex-end"


          }}>
            <View style={styles.emoticon}>
              <View style={{
                flexDirection: "row",
              }}>
                <AntDesign name="heart" size={30} color="#666699" />
                <MaterialCommunityIcons name="facebook-messenger" size={30} color="#666699" style={{ marginLeft: 15 }} /></View>
              <View>
                <FontAwesome name="bookmark" size={30} color="#666699" />
              </View>
            </View>
          </View>

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
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    flex: 2,
    marginLeft: 20,
    paddingTop: 50,
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
    width: WIDTH
  },
  image: {
    flex: 9
  },
  infor: {
    flex: 2,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 20
  },
  inforLeft: {
    flex: 3,
    margin: 10,
    justifyContent: "center",
  },
  inforDownload: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0099FF"
  },
  content: {
    flex: 5,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  fixHashtag: {
    flexDirection: 'row',
    alignItems: "center",
    marginTop: 20
  },
  hashtag: {
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    paddingVertical: 7,
    marginRight: 10,
    paddingHorizontal: 50,
    borderRadius: 999
  },
  emoticon: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navbar: {
    flex: 1,
    marginTop: 30,
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

