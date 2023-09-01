import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { songs } from "../songs/songs";
import MusicComponent from "../components/MusicComponent";

export default function Home(props) {
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          height: 70,
          elevation: 5,
          justifyContent: "center",
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Simple Music App</Text>
      </View>
      <FlatList data={songs} renderItem={({item, index}) => <MusicComponent item={item} index={index} data={songs} />} />
    </View>
  );
}

const styles = StyleSheet.create({});
