// PlaybackContext.tsx
import { createContext, useContext, useState } from 'react';

const PlaybackContext = createContext(null);

export const PlaybackProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <PlaybackContext.Provider value={{ currentSong, setCurrentSong }}>
      {children}
    </PlaybackContext.Provider>
  );
};

export const usePlayback = () => useContext(PlaybackContext);