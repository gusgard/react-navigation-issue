import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import AppNavigation from './AppNavigation';
import { NAME } from './constants';

const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, [NAME]: state } = this.props;
    return (
      <AppNavigation
        navigation={addNavigationHelpers({ dispatch, state, addListener })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  [NAME]: PropTypes.object.isRequired
};

export default connect(state => ({
  [NAME]: state[NAME]
}))(AppWithNavigationState);
