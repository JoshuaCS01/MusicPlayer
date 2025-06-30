import SongCard from '@/components/SongCards';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, NativeModules, Pressable, StyleSheet, Text, View } from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
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
  const [fullList, setFullList] = useState<MusicFile[]>([]);
  const {songs, setSongs} = usePlayback();

   const handleOnChangeText = (text) => {
    setText(text);
    let tempText = text.toLowerCase()
    let filteredList = fullList.filter((item) => { // search from a full list, and not from a previous search results list
      if (item.title.toLowerCase().match(text) || item.artist.toLowerCase().match(text)) {
        return item;
      }
    })
    if (!text || text === '') {
      setSongs(fullList)
    }
    else if (Array.isArray(filteredList)) {
      setSongs(filteredList)
    }
  }




const handlePlay = async (song) => {
  setCurrentSong(song);
  setAudioSource(song.path);
  setIsPlaying(true);
};


useEffect(() => {
  const fetchSongs = async () => {
    try {
      const result = await MusicFiles.getMusicFiles();
      setSongs(result);
      setIsThereSongs(true);
      setFullList(result)
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  fetchSongs();
}, []);



let content;
let blankSpot;

if(isPlaying){
  blankSpot = <View style={{ height: 70 }}></View>;
} else{
  blankSpot = <></>;
}

if (isThereSongs) {
  content = <>
    <View style={styles.topBar}>
      <SearchBar
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        backgroundColor="#ffffff"
        placeholder="Search here"
        onChangeText={(text) => handleOnChangeText(text)}
        onSearchPress={() => console.log("Search Icon is pressed")}
        onClearPress={() => handleOnChangeText("")}
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
    {blankSpot}
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
    flexDirection: "row",
    marginBottom: 10
  }
});


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

