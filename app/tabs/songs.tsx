import SongCard from '@/components/SongCards';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { usePlayback } from './PlaybackContext';

export default function SongsScreen() {
  const navigation = useNavigation();
  let isThereSongs = true;
  const { setCurrentSong } = usePlayback();

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  const songs = [
    { id: 1, title: 'Song A', artist: 'Artist A', image: require('../../assets/images/MusioLogo.png') },
    { id: 2, title: 'Song B', artist: 'Artist B', image: require('../../assets/images/icon.png') },
    { id: 3, title: 'Song C', artist: 'Artist C', image: require('../../assets/images/MusioLogo.png') },
    { id: 4, title: 'Song D', artist: 'Artist D', image: require('../../assets/images/icon.png') },
    { id: 5, title: 'Song E', artist: 'Artist E', image: require('../../assets/images/MusioLogo.png') },
    { id: 6, title: 'Song F', artist: 'Artist F', image: require('../../assets/images/icon.png') },
    { id: 7, title: 'Song G', artist: 'Artist G', image: require('../../assets/images/MusioLogo.png') },
    { id: 8, title: 'Song H', artist: 'Artist H', image: require('../../assets/images/icon.png') },
    { id: 9, title: 'Song I', artist: 'Artist I', image: require('../../assets/images/MusioLogo.png') },
    { id: 10, title: 'Song J', artist: 'Artist J', image: require('../../assets/images/icon.png') },
  ];



  let content;

  if (isThereSongs) {
    content = <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {songs.map((song) => (
          <Pressable key={song.id} onPress={() => handlePlay(song)}>
            <SongCard key={song.id} song={song} />
          </Pressable>
        ))}
        <View style={{ marginTop: 85 }}></View>
      </ScrollView></>;

  } else {
    content = <><Text style={styles.text}>No Songs  : (</Text><View style={{ transform: [{ translateY: 100 }] }}>
      <Pressable style={styles.button} onPress={goToPlaylists}>
        <Text style={styles.text}>+ Add Songs</Text>
      </Pressable>
    </View></>;
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
});


