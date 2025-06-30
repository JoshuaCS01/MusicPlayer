// PlaybackContext.tsx
import { useAudioPlayer } from "expo-audio";
import { createContext, useContext, useEffect, useState } from 'react';
import { MusicFile } from "../types/MusicFiles";

const PlaybackContext = createContext(null);


export const PlaybackProvider = ({ children }) => {
  const [audioSource, setAudioSource] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState<MusicFile[]>([]);

  const player = useAudioPlayer(audioSource);

  useEffect(() => {
    if (player && isPlaying) {
      player.play()
      console.log(currentSong.path);
    }

  }, [player, isPlaying]);


useEffect(() => {
  const interval = setInterval(() => {
    if (player && player.duration > 0 && player.currentTime >= player.duration) {
      console.log('Next song');
      nextSong();
    }
  }, 1000); // check every second

  return () => clearInterval(interval);
}, [player]);




  const onTogglePlay = () => {
    if (player.playing) {
      player.pause();
    } else {
      player.play();
    }
    setIsPlaying(prev => !prev);
    console.log(player.playing)
    console.log("ButtonPressed");
  };

  const nextSong = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = currentIndex + 1;

    if (nextIndex < songs.length) {
      const next = songs[nextIndex];
      setCurrentSong(next);
      setAudioSource(next.path);
      player.replace(next.path); // use next.path directlyz`
    }
  };


  const previousSong = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const previousIndex = currentIndex - 1;

    if (previousIndex < songs.length) {
      const prev = songs[previousIndex];
      setCurrentSong(prev);
      setAudioSource(prev.path);
      player.replace(prev.path); // use next.path directlyz`
    }
  }


  return (
    <PlaybackContext.Provider value={{ currentSong, setCurrentSong, isPlaying, onTogglePlay, audioSource, setAudioSource, player, setIsPlaying, nextSong, previousSong, songs, setSongs }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => useContext(PlaybackContext);