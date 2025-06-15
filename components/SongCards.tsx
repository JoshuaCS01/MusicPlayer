import { Feather } from '@expo/vector-icons'; // or any icon library
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SongCard({song}) {
  function onAdd(song: any): void {
    console.log(song.id)
    
  }
  const ScreenWidth = Dimensions.get('window').width-20


  return (
    <View style={[styles.card, { width: ScreenWidth }]}>
      <Image source={song.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <View style={{marginRight:"10"}}>
      <TouchableOpacity onPress={() => onAdd(song)}>
        <Feather name="plus-circle" size={24} color="#1DB954" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 6,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    color: '#aaa',
    fontSize: 14,
  },
});

