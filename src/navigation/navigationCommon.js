/* eslint-disable import/prefer-default-export */
import update from 'immutability-helper';

export const getCurrentRouteName = (navState) => {
  if (Object.prototype.hasOwnProperty.call(navState, 'index')) {
    return getCurrentRouteName(navState.routes[navState.index]);
  }
  return navState.routeName;
};

export const resetState = (state, routes) => {
  const nextState = update(state, {
    index: { $set: 0 },
    routes: { $set: routes },
  });
  return nextState;
};

export const resetLastState = (state) => {
  const last = state.routes[state.index];
  return resetState(state, [last]);
};

export const resetFistState = (state) => {
  const [first] = state.routes;
  return resetState(state, [first]);
};


export const resetDefaultNavigation = (state, goToRouteName) => {
  const index = state.routes.findIndex(i => i.routeName === 'TabNavigation');
  if (index === -1) {
    console.warn('Did you change the name of TabNavigation ?');
    return state;
  }
  const selected = state.routes[index];
  const goToIndex = selected.routes.findIndex(i => i.routeName === goToRouteName);
  const routeToReset = selected.routes[goToIndex];
  const nextState = update(state, {
    routes: {
      [index]: {
        routes: {
          [goToIndex]: { $set: resetFistState(routeToReset) },
        }
      },
    }
  });
  return nextState;
};

const resetNavRec = (state, routeName, resetFunc, index) => {
  if (state === undefined) {
    return state;
  }
  let newState;
  if (state.routeName === routeName) {
    newState = {
      routes: {
        [index]: { $set: resetFunc(state) },
      }
    };
  } else {
    newState = {
      routes: {
        [index]: resetNavRec(state.routes[state.index], routeName, resetFunc, state.index),
      }
    };
  }
  return newState;
};

export const resetDefaultNavigationRec = (state, routeName, resetFunc = resetLastState) => {
  const index = state.index;
  const nextState = resetNavRec(state.routes[index], routeName, resetFunc, index);
  return update(state, nextState);
};
