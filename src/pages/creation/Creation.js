import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import * as navigation from 'Skedler/src/navigation/actions';

class Creation extends Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired
  };

  render() {
    const { goBack } = this.props;
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%'
        }}
      >
        <TouchableHighlight onPress={goBack}>
          <Text>{'press me to go back'}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(null, dispatch => ({
  goBack: () => dispatch(navigation.goBack())
}))(Creation);
