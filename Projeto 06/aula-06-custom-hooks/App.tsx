import React from 'react';
import HomeScreen from './src/screens/Home';
import { UserProvider } from './src/hooks/User.hook';

export default function App() {
  return (
    <UserProvider>
      <HomeScreen />
    </UserProvider>
  );
}

