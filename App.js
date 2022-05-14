import React from 'react';
import Index from './src/Index';
import { Provider } from 'react-redux'
import store from './src/store/Index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
}

