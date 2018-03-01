import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage'; // AsyncStorage

import navigation from './navigation';

const middleware = [
  createReactNavigationReduxMiddleware('root', state => state[navigation.NAME])
  // thunk
];

const config = {
  key: 'skedler',
  version: 1,
  storage
};

export default (data = {}) => {
  const reducers = {
    [navigation.NAME]: navigation.reducer
  };
  const appReducer = persistCombineReducers(config, reducers);
  const compose = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(appReducer, data, compose);

  return store;
};
