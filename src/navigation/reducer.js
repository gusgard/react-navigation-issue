import { handleActions } from 'redux-actions';
import { NavigationActions } from 'react-navigation';

import AppNavigation from './AppNavigation';
import { getCurrentRouteName } from './navigationCommon';

const { getStateForAction } = AppNavigation.router;

const initialState = getStateForAction(NavigationActions.init);

const generateNavigationAction = (state, routeName) => {
  // Don't navigate to the same screen if is already there.
  if (getCurrentRouteName(state) === routeName) {
    return state;
  }
  const nextState = getStateForAction(
    NavigationActions.navigate({ routeName }),
    state
  );
  return nextState || state;
};

export default handleActions(
  {
    // overwritten action types from react-navigation
    [NavigationActions.NAVIGATE]: (state, { routeName }) =>
      generateNavigationAction(state, routeName),

    [NavigationActions.BACK]: state => {
      // Keyboard.dismiss();
      const nextState = getStateForAction(NavigationActions.back(), state);
      return nextState || state;
    }
    // [NavigationActions.INIT]: state => {
    //   console.error(NavigationActions.INIT);
    //   return state;
    // },
    // [NavigationActions.RESET]: state => {
    //   console.error(NavigationActions.RESET);
    //   return state;
    // },
    // [NavigationActions.SET_PARAMS]: (state, { key, params }) => {
    //   const nextState = getStateForAction(
    //     NavigationActions.setParams({ params, key }),
    //     state
    //   );
    //   return nextState || state;
    // },
    // [NavigationActions.URI]: state => {
    //   console.error(NavigationActions.URI);
    //   return state;
    // }
  },
  initialState
);
