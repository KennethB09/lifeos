import  React, { createContext, useState } from 'react';
import axios from 'axios';


interface AppContextType {
  mode: string;
  musicEmbed: string;
  handeModeSection: (mode: string) => void;

}

const defaultContext: AppContextType = {
    mode: 'Focus',
    musicEmbed: '',
    handeModeSection: () => {}

}

export const AppContext = createContext<AppContextType>(defaultContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State to manage the current mode and music embed URL
  const [mode, setMode] = useState<string>('Focus');
  // State to manage the music embed URL
  const [musicEmbed, setMusicEmbed] = useState<string>('');
    /// Function to handle mode selection and fetch music embed URL
  const handeModeSection = async (mode: string) => {
    setMode(mode);
    try {
      const response = await axios.get(`https://localhost:3000/api/mood?mode=${mode}`);
      setMusicEmbed(response.data.embedUrl);
    } catch (error) {
      console.error('Error fetching music embed:', error);
    }
  };
  // Provide the context values to children components
  return (
    <AppContext.Provider value={{ mode, musicEmbed, handeModeSection }}>
      {children}
    </AppContext.Provider>
  );
};