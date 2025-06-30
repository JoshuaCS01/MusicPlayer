import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CurrentlyPlayingCard({ song, isPlaying, onTogglePlay, nextSong, previousSong }) {
  const insets = useSafeAreaInsets();
  const width = insets.bottom + 60;
  if (!song) return null;

  return (
    <View style={[styles.card, { bottom: width }]}>
      <Image source={require("../assets/images/MusioLogo.png")} style={styles.image} />
      <View style={styles.info}>
        <View style={{ height: 15, overflow: "hidden" }}>
        <ScrollView horizontal={true}>
          <Text style={styles.title}>{song.title}</Text>
        </ScrollView>
        </View>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <View style={styles.selections}>
        <Pressable onPress={previousSong}>
          <Ionicons name="play-skip-back" size={28} color="white" />
        </Pressable>
        <Pressable onPress={onTogglePlay}>
          <Ionicons style={{ marginLeft: "25", marginRight: "25" }} name={isPlaying ? "pause" : "play"}
            size={28} color="white"
          />
        </Pressable>
        <Pressable onPress={nextSong}>
          <Ionicons name="play-skip-forward" size={28} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    padding: 12,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
    borderRadius: 8,
  },
  info: {
    maxHeight: 20,
    maxWidth: '25%',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textOverflow: "ellipsis",
    transform: [{ translateY: -3 }],

  },
  artist: {
    color: '#bbb',
    fontSize: 12,
  },
  selections: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  }
});
