export const getCurrentRouteName = navState => {
  if (Object.prototype.hasOwnProperty.call(navState, 'index')) {
    return getCurrentRouteName(navState.routes[navState.index]);
  }
  return navState.routeName;
};
