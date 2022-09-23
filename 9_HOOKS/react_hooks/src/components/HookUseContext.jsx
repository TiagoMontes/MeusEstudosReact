import { createContext } from 'react';

export const SomeContext = createContext();

// Provider
export const HookUseContext = ({ children }) => {
    const contextValue = "testing context"

    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    )
}