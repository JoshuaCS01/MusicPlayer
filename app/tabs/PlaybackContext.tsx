// PlaybackContext.tsx
import { useAudioPlayer } from "expo-audio";
import { createContext, useContext, useEffect, useState } from 'react';

const PlaybackContext = createContext(null);


export const PlaybackProvider = ({ children }) => {
  const [audioSource, setAudioSource] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const player = useAudioPlayer(audioSource);

    useEffect(() => {
    if (player && isPlaying) {
      player.play()
      console.log("Playing audio");
      if (currentSong) {
        console.log(currentSong.path);
      }
    }
    if(player.currentTime < player.duration) {
    }
  }, [player, isPlaying]);

  const onTogglePlay = () => {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
    setIsPlaying(prev => !prev);
      console.log("ButtonPressed");
  };


  return (
    <PlaybackContext.Provider value={{ currentSong, setCurrentSong, isPlaying, onTogglePlay, audioSource, setAudioSource, player, setIsPlaying}}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => useContext(PlaybackContext);