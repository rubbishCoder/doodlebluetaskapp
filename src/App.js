/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes';
import store from './reducers';
import { Provider as StoreProvider } from 'react-redux'

const App = () =>
  <StoreProvider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </StoreProvider>

export default App;
