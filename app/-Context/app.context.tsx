'use client'
import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
    CarNum: any;
    setCarNum: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppContextType>({
    CarNum: 0,
    setCarNum: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [CarNum, setCarNum] = useState(0);

    return (
        <AppContext.Provider value={{ CarNum, setCarNum }}>
            {children}
        </AppContext.Provider>
    );
};

