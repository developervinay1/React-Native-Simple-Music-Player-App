import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Slider from "@react-native-community/slider";
import { songs } from "../songs/songs";

export default function Music() {
  const { width, height } = Dimensions.get("window");
  const route = useRoute();
  const [currentSong, setCurrentSong] = useState(route.params.index);
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToIndex({animated: true, index: currentSong})
    }, 100);
  }, [])

  return (
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={songs}
        renderItem={({ item }) => (
          <View style={{ height: height/2, width: width, justifyContent: "center", alignContent: "center", paddingBottom: 19 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
             <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", marginTop: 10 }}>
                Song: {item.name} by {item.singerName}
            </Text>
          </View>
        )}
      />

      {/* Controls Container */}

      <View style={{ padding: 20 }}>
        <View>
          <Slider
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          {/* Controls Play Pause Next Previous */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <TouchableOpacity onPress={() => {
              if(currentSong > 0) {
                setCurrentSong(currentSong - 1)
                ref.current.scrollToIndex({ animated: true, index: currentSong - 1 })
              }
            }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              if(songs.length -1 > currentSong) {
                setCurrentSong(currentSong + 1)
                ref.current.scrollToIndex({ animated: true, index: currentSong + 1 })
              }
            }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Next</Text>
            </TouchableOpacity>
          </View>

          {/* Controls Shuffle and Repeat */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 30,
            }}
          >
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Repeat</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>Shuffle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
