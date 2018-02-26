import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';
import AppWithNavigationState from './navigation/AppWithNavigationState';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

export default App;
