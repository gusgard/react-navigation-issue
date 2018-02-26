import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage'; // AsyncStorage

// import { isDev } from '@config/environment';

import navigation from './navigation';

const middleware = [
  createReactNavigationReduxMiddleware('root', state => state[navigation.NAME]),
  thunk
];

// if (isDev) {
//   middleware.push(require('redux-immutable-state-invariant').default());
// }

const config = {
  key: 'skedler',
  version: 1,
  storage
  // debug: isDev
};

export default (data = {}) => {
  const reducers = {
    [navigation.NAME]: navigation.reducer
  };
  const appReducer = persistCombineReducers(config, reducers);
  const compose = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(appReducer, data, compose);

  // Persist and rehydrate a redux store
  // persistStore(store, null, () => {
  //   // console.log('Rehydration complete');
  // })
  // Add purge to delete the persist store.
  // .purge();

  return store;
};
