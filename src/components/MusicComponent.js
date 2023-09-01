import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MusicComponent({ data, index, item }) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("Music", {data: item, index:index})}
      style={{
        height: "auto",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between",}}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 60,
              height: 60,
              objectFit: "cover",
              borderRadius: 500,
            }}
          />
          <Text style={{ fontWeight: "bold" }}>
            {item.name} by {item.singerName}
          </Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Play</Text>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
