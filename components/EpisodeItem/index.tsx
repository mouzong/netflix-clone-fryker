import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable } from "react-native";
import { Text, View } from "../../components/Themed";
import { Episode } from "../../types";
import styles from "./styles";

interface EpisodeItemProps {
  episode: Episode;
  onPress: (episode: Episode) => {};
}

const EpisodeItem = (props: EpisodeItemProps) => {
  const { episode, onPress } = props;
  return (
    <Pressable style={{ margin: 10 }} onPress={() => onPress(episode)}>
      <View style={styles.row}>
        <Image source={{ uri: episode.poster }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{episode.title}</Text>
          <Text style={styles.duration}>{episode.duration}</Text>
        </View>

        <AntDesign name="download" size={24} color="white" />
      </View>
      <View>
        <Text style={styles.plot}>{episode.plot}</Text>
      </View>
    </Pressable>
  );
};

export default EpisodeItem;
