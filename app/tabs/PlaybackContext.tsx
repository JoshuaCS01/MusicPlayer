// PlaybackContext.tsx
import { createContext, useContext, useState } from 'react';

const PlaybackContext = createContext(null);

export const PlaybackProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onTogglePlay = () => {
    setIsPlaying(prev => !prev);
  };


  return (
    <PlaybackContext.Provider value={{ currentSong, setCurrentSong, isPlaying, onTogglePlay }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => useContext(PlaybackContext);