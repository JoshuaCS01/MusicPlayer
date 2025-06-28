import SongCard from '@/components/SongCards';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, NativeModules, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import type { MusicFile, MusicFilesModule } from '../types/MusicFiles';
import { usePlayback } from './PlaybackContext';


export default function SongsScreen() {
  const ScreenWidth = Dimensions.get('window').width - 20
  const { MusicFiles } = NativeModules as { MusicFiles: MusicFilesModule };
  const navigation = useNavigation();
  const [isThereSongs, setIsThereSongs] = useState(false);
  const { setCurrentSong } = usePlayback();
  const { setAudioSource } = usePlayback();
  const { player, isPlaying, setIsPlaying } = usePlayback();
  const [text, setText] = useState('');


  


  const handlePlay = async (song) => {
    console.log(song.duration);
    setCurrentSong(song);
    setAudioSource(song.path);
    setIsPlaying(true);
  };

  const [songs, setSongs] = useState<MusicFile[]>([]);


  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const result = await MusicFiles.getMusicFiles();
        setSongs(result);
        setIsThereSongs(true);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);



  let content;

  if (isThereSongs) {
    content = <>
      <View style={styles.topBar}>
        <TextInput
          value={text}
          onChangeText={setText}
        placeholder="Search"
        style={[styles.searchBar, { width: Dimensions.get('window').width - 75 }]}
        placeholderTextColor='black'
        />
      </View>
      <FlatList
        data={songs}
        key={songs.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => { handlePlay(item); }}>
            <SongCard song={item} />
          </Pressable>
        )}
      />


    </>;

  } else {
    content = <>
      <Text style={styles.text}>Loading songs ...</Text>
    </>;
  }

  const goToPlaylists = () => {
    navigation.navigate('playlists');
  };

  return (
    <View style={styles.container} >
      {content}
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 30
  },
  button: {
    backgroundColor: "#261b27",
    padding: 20,
    borderRadius: 20
  },
  searchBar: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 5,
  },
  topBar: {
    flexDirection: "row"
  }
});


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

