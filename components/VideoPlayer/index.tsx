import React, { useEffect, useRef, useState } from "react";
import { Episode } from "../../types";
import { Text, View } from "../../components/Themed";

import styles from "./styles";
import { Video } from "expo-av";
import { Playback } from "expo-av/build/AV";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [status, setStatus] = useState({});

  const video = useRef<Playback>(null);

  useEffect(() => {
    if (!video) {
      return;
    }
    async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync(
        {
          uri: episode.video,
        },
        {},
        false
      );
    };
  }, [episode]);

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster,
        }}
        usePoster={true}
        posterStyle={{ resizeMode: "cover" }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;
