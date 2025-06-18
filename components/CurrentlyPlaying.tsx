import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CurrentlyPlayingCard({ song, isPlaying, onTogglePlay }) {
  const insets = useSafeAreaInsets();
  const width = insets.bottom + 60;
  if (!song) return null;

  return (
    <View style={[styles.card, { bottom: width }]}>
      <Image source={require("../assets/images/MusioLogo.png")} style={styles.image} />
      <View >
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <View style={styles.selections}>
      <Pressable onPress={onTogglePlay}>
        <Ionicons name="play-skip-back" size={28} color="white" />
      </Pressable>
      <Pressable onPress={onTogglePlay}>
        <Ionicons style={{marginLeft:"25", marginRight: "25"}} name={isPlaying ? "pause" : "play"} 
        size={28} color="white" 
        />
      </Pressable>
      <Pressable onPress={onTogglePlay}>
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
    flex: 1
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  artist: {
    color: '#bbb',
    fontSize: 14,
  },
  selections:{
    display:"flex",
    flexDirection:"row",
    marginLeft:"auto",
  }
});
