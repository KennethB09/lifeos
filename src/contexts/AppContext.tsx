import React, { createContext, useState } from 'react';

interface AppContextType {
  mode: string | null;
  handeModeSection: (mode: string) => void;
}

const defaultContext: AppContextType = {
  mode: null,
  handeModeSection: () => { }
}

export const AppContext = createContext<AppContextType>(defaultContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<string | null>(null);
  const handeModeSection = (mode: string) => {
    setMode(mode);
  };
  return (
    <AppContext.Provider value={{ mode, handeModeSection }}>
      {children}
    </AppContext.Provider>
  );
};