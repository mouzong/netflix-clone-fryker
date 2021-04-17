import React from "react";
import { Image, Pressable, FlatList } from "react-native";
import { Text, View } from "../../components/Themed";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";

import movie from "../../assets/data/movie";
import EpisodeItem from "../../components/EpisodeItem";
import { useState } from "react";
import VideoPlayer from "./../../components/VideoPlayer";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];

const MovieDetailsScreen = () => {
  const seasonNames = movie.seasons.items.map((season) => season.name);
  const [currentEpisode, setCurrentEpisode] = useState(firstEpisode);
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  return (
    <View>
      <VideoPlayer episode={currentEpisode} />

      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            onPress={async (episode) => setCurrentEpisode(episode)}
          />
        )}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year}</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+ </Text>
              </View>
              <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>
            <Pressable
              style={styles.playButton}
              onPress={() => {
                console.warn("Play");
              }}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={24} color="black" /> Play
              </Text>
            </Pressable>

            <Pressable
              style={styles.downloadButton}
              onPress={() => {
                console.warn("Download");
              }}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={24} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>{movie.plot}</Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            {/**Row with icons buttons */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text style={{ color: "darkgrey" }}>My List</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey" }}>Rate</Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>

            <Picker
              selectedValue={currentSeason.name}
              style={{ color: "white", width: 130 }}
              dropdownIconColor={"white"}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
            >
              {seasonNames.map((seasonName) => (
                <Picker.Item
                  label={seasonName}
                  value={seasonName}
                  key={seasonName}
                />
              ))}
            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MovieDetailsScreen;
