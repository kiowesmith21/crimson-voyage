'use client';
import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of your context data
interface UserContextData {
  // Your context data here
  plan: string;
  updateInfo: (newPlan: string) => void; //add the rest later TODO
}

// Create the context with an initial value (this will be used if a component is rendered outside the provider)
const UserContext = createContext<UserContextData | undefined>(undefined);

// Create a provider component that will wrap your app
interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  // Your state or any other logic here
  const [plan, setPlan] = React.useState('DefaultPlan'); //add the rest later TODO

  // Function to update the name
  const updateInfo = (newPlan: string) => { //add the rest later TOPO
    setPlan(newPlan);
  };

  // Provide the context value to the components in the tree
  const contextValue: UserContextData = {
      plan,
      updateInfo,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Create a custom hook to consume the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};